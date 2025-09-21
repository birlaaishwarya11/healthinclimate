"use client"

import type { County } from "@/types/county"
import { getCountyColor } from "@/utils/county-utils"
import { coordinatesToPath } from "@/utils/geojson-parser"

interface CountyPolygonProps {
  county: County
  selectedCounty: string | null
  hoveredCounty: string | null
  onCountyClick: (countyName: string) => void
  onCountyHover: (countyName: string | null) => void
}

/**
 * Individual county polygon component for the map visualization
 * Renders county shapes from GeoJSON geometry data instead of circles
 * Handles click and hover interactions for each county
 */
export function CountyPolygon({
  county,
  selectedCounty,
  hoveredCounty,
  onCountyClick,
  onCountyHover,
}: CountyPolygonProps) {
  // If no geometry data, fall back to a small circle at the centroid
  if (!county.geometry) {
    return (
      <circle
        cx={county.x}
        cy={county.y}
        r={1}
        className={`${getCountyColor(county, selectedCounty, hoveredCounty)} stroke-white stroke-1 cursor-pointer transition-all duration-200 hover:stroke-2`}
        onClick={() => onCountyClick(county.name)}
        onMouseEnter={() => onCountyHover(county.name)}
        onMouseLeave={() => onCountyHover(null)}
      />
    )
  }

  const pathData = coordinatesToPath(county.geometry.coordinates, county.geometry.type)

  return (
    <path
      d={pathData}
      className={`${getCountyColor(county, selectedCounty, hoveredCounty)} stroke-white stroke-1 cursor-pointer transition-all duration-200 hover:stroke-2`}
      onClick={() => onCountyClick(county.name)}
      onMouseEnter={() => onCountyHover(county.name)}
      onMouseLeave={() => onCountyHover(null)}
    />
  )
}