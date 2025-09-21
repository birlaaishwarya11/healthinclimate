import type { County } from "@/types/county"

interface GeoJSONFeature {
  type: "Feature"
  properties: {
    name: string
    fullname: string
    abbrev: string
    abcode: string
    ansi: string
  }
  geometry: {
    type: "Polygon" | "MultiPolygon"
    coordinates: number[][][] | number[][][][]
  }
}

interface GeoJSONData {
  type: "FeatureCollection"
  features: GeoJSONFeature[]
}

/**
 * Convert longitude/latitude coordinates to SVG viewBox coordinates (0-100 scale)
 * California bounds approximately: lng(-124.5, -114), lat(32.5, 42)
 */
function convertCoordinates(lng: number, lat: number): [number, number] {
  // California bounds
  const minLng = -124.5
  const maxLng = -114
  const minLat = 32.5
  const maxLat = 42

  // Convert to 0-100 scale, flipping Y coordinate for SVG
  const x = ((lng - minLng) / (maxLng - minLng)) * 100
  const y = 100 - ((lat - minLat) / (maxLat - minLat)) * 100

  return [x, y]
}

/**
 * Convert GeoJSON coordinates to SVG coordinates
 */
function convertGeometryCoordinates(
  coordinates: number[][][] | number[][][][],
  type: "Polygon" | "MultiPolygon"
): number[][][] | number[][][][] {
  if (type === "Polygon") {
    return (coordinates as number[][][]).map(ring =>
      ring.map(coord => {
        const [x, y] = convertCoordinates(coord[0], coord[1])
        return [x, y]
      })
    )
  } else {
    // MultiPolygon
    return (coordinates as number[][][][]).map(polygon =>
      polygon.map(ring =>
        ring.map(coord => {
          const [x, y] = convertCoordinates(coord[0], coord[1])
          return [x, y]
        })
      )
    )
  }
}

/**
 * Calculate centroid of a polygon for x,y positioning
 */
function calculateCentroid(coordinates: number[][][]): [number, number] {
  // Use the first ring (exterior ring) of the polygon
  const ring = coordinates[0]
  let totalX = 0
  let totalY = 0
  
  for (const [x, y] of ring) {
    totalX += x
    totalY += y
  }
  
  return [totalX / ring.length, totalY / ring.length]
}

/**
 * Merge GeoJSON data with population data
 */
export function parseGeoJSONWithPopulation(
  geoJsonData: GeoJSONData,
  populationData: Array<{ name: string; population: number }>
): County[] {
  return geoJsonData.features.map(feature => {
    const populationEntry = populationData.find(p => p.name === feature.properties.name)
    
    if (!populationEntry) {
      console.warn(`No population data found for county: ${feature.properties.name}`)
    }

    // Convert geometry coordinates to SVG scale
    const convertedCoordinates = convertGeometryCoordinates(
      feature.geometry.coordinates,
      feature.geometry.type
    )

    // Calculate centroid for x,y positioning
    let centroid: [number, number]
    if (feature.geometry.type === "Polygon") {
      centroid = calculateCentroid(convertedCoordinates as number[][][])
    } else {
      // For MultiPolygon, use the first polygon's centroid
      centroid = calculateCentroid((convertedCoordinates as number[][][][])[0])
    }

    return {
      name: feature.properties.name,
      population: populationEntry?.population || 0,
      x: centroid[0],
      y: centroid[1],
      geometry: {
        type: feature.geometry.type,
        coordinates: convertedCoordinates
      }
    }
  })
}

/**
 * Convert polygon coordinates to SVG path string
 */
export function coordinatesToPath(coordinates: number[][][] | number[][][][], type: "Polygon" | "MultiPolygon"): string {
  if (type === "Polygon") {
    const rings = coordinates as number[][][]
    return rings.map(ring => {
      const pathData = ring.map((coord, index) => {
        const [x, y] = coord
        return index === 0 ? `M${x},${y}` : `L${x},${y}`
      }).join(' ')
      return pathData + 'Z'
    }).join(' ')
  } else {
    // MultiPolygon
    const polygons = coordinates as number[][][][]
    return polygons.map(polygon =>
      polygon.map(ring => {
        const pathData = ring.map((coord, index) => {
          const [x, y] = coord
          return index === 0 ? `M${x},${y}` : `L${x},${y}`
        }).join(' ')
        return pathData + 'Z'
      }).join(' ')
    ).join(' ')
  }
}