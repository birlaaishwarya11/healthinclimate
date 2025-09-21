import type { County } from "@/types/county"
import { formatPopulation, getPopulationCategory } from "@/utils/county-utils"

interface CountyDetailsProps {
  county: County | undefined
}

/**
 * Displays detailed information about the selected county
 * Shows population data and categorization
 */
export function CountyDetails({ county }: CountyDetailsProps) {
  if (!county) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>Click on a county to view details</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <h3 className="text-2xl font-bold text-blue-600">{county.name} County</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Population:</span>
          <span className="font-semibold">{formatPopulation(county.population)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Category:</span>
          <span className="font-semibold capitalize">{getPopulationCategory(county.population)}</span>
        </div>
      </div>
    </div>
  )
}
