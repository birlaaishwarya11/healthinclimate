"use client"

import { useState } from "react"
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

  const handleCountyClick = (countyName: string) => {
    setSelectedCounty(countyName)
  }

  const handleCountyHover = (countyName: string | null) => {
    setHoveredCounty(countyName)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader />

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardContent className="p-6">
                <InteractiveMap
                  counties={californiaCounties}
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
            <InfoPanel selectedCounty={selectedCounty} counties={californiaCounties} />
          </div>
        </div>

        {/* Statistics Summary */}
        <StatisticsSummary counties={californiaCounties} />
      </div>
    </div>
  )
}
