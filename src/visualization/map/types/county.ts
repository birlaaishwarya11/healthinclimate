export interface County {
  name: string
  population: number
  x: number
  y: number
  geometry?: {
    type: 'Polygon' | 'MultiPolygon'
    coordinates: number[][][] | number[][][][]
  }
  info?: string
}

export type PopulationCategory = "mega" | "large" | "medium" | "small" | "tiny"
