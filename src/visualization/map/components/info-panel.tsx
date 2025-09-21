import type { County } from "@/types/county"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CountyDetails } from "./county-details"
import { PopulationLegend } from "./population-legend"

interface InfoPanelProps {
  selectedCounty: string | null
  counties: County[]
}

/**
 * Side panel component that displays county information and legend
 * Combines county details and population legend in a cohesive layout
 */
export function InfoPanel({ selectedCounty, counties }: InfoPanelProps) {
  const selectedCountyData = selectedCounty ? counties.find((c) => c.name === selectedCounty) : undefined

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">County Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CountyDetails county={selectedCountyData} />
        <PopulationLegend />
      </CardContent>
    </Card>
  )
}
