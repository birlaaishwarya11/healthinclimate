import type { County } from "@/types/county"
import { Card, CardContent } from "@/components/ui/card"
import { formatPopulation, getTotalPopulation, getLargestCounty, getSmallestCounty } from "@/utils/county-utils"

interface StatisticsSummaryProps {
  counties: County[]
}

/**
 * Summary statistics component showing key metrics about California counties
 * Displays total counties, population, largest and smallest counties
 */
export function StatisticsSummary({ counties }: StatisticsSummaryProps) {
  const totalPopulation = getTotalPopulation(counties)
  const largestCounty = getLargestCounty(counties)
  const smallestCounty = getSmallestCounty(counties)

  const stats = [
    {
      value: counties.length.toString(),
      label: "Total Counties",
      color: "text-blue-600",
    },
    {
      value: formatPopulation(totalPopulation),
      label: "Total Population",
      color: "text-green-600",
    },
    {
      value: largestCounty?.name || "N/A",
      label: "Largest County",
      color: "text-orange-600",
    },
    {
      value: smallestCounty?.name || "N/A",
      label: "Smallest County",
      color: "text-purple-600",
    },
  ]

  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
