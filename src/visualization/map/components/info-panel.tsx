import type { County } from "@/types/county"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CountyDetails } from "./county-details"
import { PopulationLegend } from "./population-legend"
import { RangeSlider } from "./population-range-slider"

interface InfoPanelProps {
  selectedCounty: string | null
  counties: County[]
  onPopulationRangeChange?: (range: [number, number]) => void
}

/**
 * Side panel component that displays county information and legend
 * Combines county details and population legend in a cohesive layout
 */
export function InfoPanel({ selectedCounty, counties, onPopulationRangeChange }: InfoPanelProps) {
  const selectedCountyData = selectedCounty ? counties.find((c) => c.name === selectedCounty) : undefined

  const minPopulation = Math.min(...counties.map((c) => c.population))
  const maxPopulation = Math.max(...counties.map((c) => c.population))

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">County Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <CountyDetails county={selectedCountyData} />

        {onPopulationRangeChange && (
          <div className="border-t pt-4">
            <RangeSlider
              min={minPopulation}
              max={maxPopulation}
              onRangeChange={onPopulationRangeChange}
              title="Population Range Filter"
            />
          </div>
        )}

        <PopulationLegend />
      </CardContent>
    </Card>
  )
}
