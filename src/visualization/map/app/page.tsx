"use client"

import { useState, useMemo } from "react"
import { californiaCounties } from "@/data/california-counties"
import { PageHeader } from "@/components/page-header"
import { InteractiveMap } from "@/components/interactive-map"
import { InfoPanel } from "@/components/info-panel"
import { StatisticsSummary } from "@/components/statistics-summary"
import { Card, CardContent } from "@/components/ui/card"
/**
 * Main page component for the California Counties Interactive Map
 * Orchestrates all child components and manages global state
 */
export default function CaliforniaCountiesMap() {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null)
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null)
  const [populationRange, setPopulationRange] = useState<[number, number]>([
    Math.min(...californiaCounties.map((c) => c.population)),
    Math.max(...californiaCounties.map((c) => c.population)),
  ])

  const initialWeights = {
    weight1: { max: 100, min: 0, value: 0, title: 'Fire Size' },
    weight2: { max: 10, min: 0, value: 5, title: 'Socioeconomic Status' },
    weight3: { max: 5000, min: 0, value: 0, title: '# Emergency Department Visits' },
  }

  const [weights, setWeights] = useState<{ [key: string]: {max: number, min: number, value: number, title: string} }>(initialWeights)

  const randomizeWeights = () => {
    const newWeights = Object.fromEntries(
      Object.entries(weights).map(([key, weight]) => [
        key,
        {
          ...weight,
          value: parseFloat((Math.random() * (weight.max - weight.min) + weight.min).toFixed(2)),
        },
      ]),
    )
    setWeights(newWeights)
  }

  const filteredCounties = useMemo(() => {
    return californiaCounties.filter(
      (county) => county.population >= populationRange[0] && county.population <= populationRange[1],
    )
  }, [populationRange])

  const handleCountyClick = (countyName: string) => {
    setSelectedCounty(countyName)
    randomizeWeights()
  }

  const handleCountyHover = (countyName: string | null) => {
    setHoveredCounty(countyName)
  }

  const handlePopulationRangeChange = (range: [number, number]) => {
    setPopulationRange(range)
    // Reset selected county if it's no longer in the filtered range
    if (selectedCounty) {
      const selectedCountyData = californiaCounties.find((c) => c.name === selectedCounty)
      if (
        selectedCountyData &&
        (selectedCountyData.population < range[0] || selectedCountyData.population > range[1])
      ) {
        setSelectedCounty(null)
      }
    }
  }

  const handleWeightChange = (weightKey: string, value: number) => {
    setWeights((prevWeights) => ({
      ...prevWeights,
      [weightKey]: {
        ...prevWeights[weightKey],
        value,
      },
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader />

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-3">
            <Card className="h-full backdrop-blur-sm bg-white/70">
              <CardContent className="p-6">
                <InteractiveMap
                  counties={filteredCounties}
                  selectedCounty={selectedCounty}
                  hoveredCounty={hoveredCounty}
                  onCountyClick={handleCountyClick}
                  onCountyHover={handleCountyHover}
                />
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-1">
            <InfoPanel
              selectedCounty={selectedCounty}
              counties={californiaCounties}
              onPopulationRangeChange={handlePopulationRangeChange}
              weights={weights}
              onWeightsChange={setWeights}
            />

          </div>
        </div>

        {/* Statistics Summary */}
        <StatisticsSummary counties={filteredCounties} />
      </div>
    </div>
  )
}
