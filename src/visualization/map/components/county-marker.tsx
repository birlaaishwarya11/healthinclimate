"use client"

import type { County } from "@/types/county"
import { getCountyColor, getCountyRadius } from "@/utils/county-utils"

interface CountyMarkerProps {
  county: County
  selectedCounty: string | null
  hoveredCounty: string | null
  onCountyClick: (countyName: string) => void
  onCountyHover: (countyName: string | null) => void
}

/**
 * Individual county marker component for the map visualization
 * Handles click and hover interactions for each county
 */
export function CountyMarker({
  county,
  selectedCounty,
  hoveredCounty,
  onCountyClick,
  onCountyHover,
}: CountyMarkerProps) {
  return (
    <circle
      cx={county.x}
      cy={county.y}
      r={getCountyRadius(county.population)}
      className={`${getCountyColor(county, selectedCounty, hoveredCounty)} stroke-white stroke-1 cursor-pointer transition-all duration-200 hover:stroke-2`}
      onClick={() => onCountyClick(county.name)}
      onMouseEnter={() => onCountyHover(county.name)}
      onMouseLeave={() => onCountyHover(null)}
    />
  )
}
