import type { County } from "@/types/county"
import { CountyPolygon } from "./county-polygon"
import { HoverTooltip } from "./hover-tooltip"

interface InteractiveMapProps {
  counties: County[]
  selectedCounty: string | null
  hoveredCounty: string | null
  onCountyClick: (countyName: string) => void
  onCountyHover: (countyName: string | null) => void
}

/**
 * Main interactive map component that renders the California outline
 * and all county markers with their interactions
 */
export function InteractiveMap({
  counties,
  selectedCounty,
  hoveredCounty,
  onCountyClick,
  onCountyHover,
}: InteractiveMapProps) {
  const hoveredCountyData = hoveredCounty ? counties.find((c) => c.name === hoveredCounty) : undefined

  return (
    <div className="relative bg-gray-300 rounded-lg border-2 border-gray-200 overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-full h-[600px]" style={{ aspectRatio: "1" }}>

        {/* County polygons */}
        {counties.map((county) => (
          <CountyPolygon
            key={county.name}
            county={county}
            selectedCounty={selectedCounty}
            hoveredCounty={hoveredCounty}
            onCountyClick={onCountyClick}
            onCountyHover={onCountyHover}
          />
        ))}

        {/* Hover tooltip */}
        <HoverTooltip county={hoveredCountyData} />
      </svg>
    </div>
  )
}
