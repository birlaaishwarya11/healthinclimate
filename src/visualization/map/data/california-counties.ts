import type { County } from "@/types/county"
import { parseGeoJSONWithPopulation } from "@/utils/geojson-parser"
import geoJsonDataRaw from "./california_counties.json"

interface GeoJSONData {
  type: "FeatureCollection"
  features: any[]
}

const geoJsonData = geoJsonDataRaw as GeoJSONData

/**
 * Population data for California counties
 */
const populationData = [
  { name: "Alameda", population: 1671329 },
  { name: "Alpine", population: 1204 },
  { name: "Amador", population: 40474 },
  { name: "Butte", population: 219186 },
  { name: "Calaveras", population: 45905 },
  { name: "Colusa", population: 21917 },
  { name: "Contra Costa", population: 1165927 },
  { name: "Del Norte", population: 27812 },
  { name: "El Dorado", population: 193221 },
  { name: "Fresno", population: 1008654 },
  { name: "Glenn", population: 28393 },
  { name: "Humboldt", population: 136463 },
  { name: "Imperial", population: 179702 },
  { name: "Inyo", population: 19016 },
  { name: "Kern", population: 909235 },
  { name: "Kings", population: 152940 },
  { name: "Lake", population: 68163 },
  { name: "Lassen", population: 32730 },
  { name: "Los Angeles", population: 10014009 },
  { name: "Madera", population: 157327 },
  { name: "Marin", population: 262321 },
  { name: "Mariposa", population: 17131 },
  { name: "Mendocino", population: 91305 },
  { name: "Merced", population: 281202 },
  { name: "Modoc", population: 8700 },
  { name: "Mono", population: 14444 },
  { name: "Monterey", population: 439035 },
  { name: "Napa", population: 138019 },
  { name: "Nevada", population: 102241 },
  { name: "Orange", population: 3186989 },
  { name: "Placer", population: 404739 },
  { name: "Plumas", population: 19915 },
  { name: "Riverside", population: 2418185 },
  { name: "Sacramento", population: 1585055 },
  { name: "San Benito", population: 64209 },
  { name: "San Bernardino", population: 2181654 },
  { name: "San Diego", population: 3298634 },
  { name: "San Francisco", population: 873965 },
  { name: "San Joaquin", population: 779233 },
  { name: "San Luis Obispo", population: 282424 },
  { name: "San Mateo", population: 764442 },
  { name: "Santa Barbara", population: 448229 },
  { name: "Santa Clara", population: 1936259 },
  { name: "Santa Cruz", population: 273213 },
  { name: "Shasta", population: 182155 },
  { name: "Sierra", population: 3236 },
  { name: "Siskiyou", population: 44076 },
  { name: "Solano", population: 453491 },
  { name: "Sonoma", population: 488863 },
  { name: "Stanislaus", population: 552878 },
  { name: "Sutter", population: 99633 },
  { name: "Tehama", population: 65829 },
  { name: "Trinity", population: 16060 },
  { name: "Tulare", population: 473117 },
  { name: "Tuolumne", population: 55620 },
  { name: "Ventura", population: 843843 },
  { name: "Yolo", population: 216403 },
  { name: "Yuba", population: 81575 },
]

/**
 * California counties data with population and GeoJSON geometry for visualization
 * Coordinates are normalized to a 100x100 viewBox for SVG rendering
 */
export const californiaCounties: County[] = parseGeoJSONWithPopulation(geoJsonData, populationData)
