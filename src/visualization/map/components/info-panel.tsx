import type { County } from "@/types/county"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CountyDetails } from "./county-details"
import { PopulationLegend } from "./population-legend"
import { RangeSlider } from "./range-slider"
import { RangeSlider as RangeSlider2 } from "./population-range-slider"
import { WeightsPanel } from "@/components/ui/weights-panel"

interface WeightConfig {
  max: number
  min: number
  value: number
    title: string
}

interface InfoPanelProps {
  selectedCounty: string | null
  counties: County[]
  onPopulationRangeChange?: (range: [number, number]) => void
  weights: { [key: string]: WeightConfig }
  onWeightsChange: (weights: { [key: string]: WeightConfig }) => void

}

/**
 * Side panel component that displays county information and legend
 * Combines county details and population legend in a cohesive layout
 */
export function InfoPanel({ selectedCounty, counties, onPopulationRangeChange, weights, onWeightsChange }: InfoPanelProps) {
  const selectedCountyData = selectedCounty ? counties.find((c) => c.name === selectedCounty) : undefined

  const minPopulation = Math.min(...counties.map((c) => c.population))
  const maxPopulation = Math.max(...counties.map((c) => c.population))

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-xl">County Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <CountyDetails county={selectedCountyData} />

        {/* {onPopulationRangeChange && (
          <div className="border-t pt-4">
            <RangeSlider2
              min={minPopulation}
              max={maxPopulation}
              onRangeChange={onPopulationRangeChange}
              title="Population Range Filter"
            />
            {weights && onWeightChange && (
              <div className="mt-4 space-y-4">
                {Object.keys(weights).map((key) => (
                  <div key={key}>
                    <RangeSlider
                      min={weights[key].min}
                      max={weights[key].max}
                      onRangeChange={(val) => onWeightChange(key, val)}
                      title={`Weight ${key}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )} */}
        { selectedCounty && (
          <WeightsPanel
              weights={weights}
              onWeightsChange={onWeightsChange}
          />
        )}
        {/* <PopulationLegend /> */}
      </CardContent>
    </Card>
  )
}
