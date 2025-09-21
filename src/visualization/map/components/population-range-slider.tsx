"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { formatPopulation } from "@/utils/county-utils"

interface PopulationRangeSliderProps {
  minPopulation: number
  maxPopulation: number
  onRangeChange: (range: [number, number]) => void
}

/**
 * Interactive slider component for filtering counties by population range
 * Displays current range values and provides smooth interaction
 */
export function PopulationRangeSlider({ minPopulation, maxPopulation, onRangeChange }: PopulationRangeSliderProps) {
  const [range, setRange] = useState<[number, number]>([minPopulation, maxPopulation])

  const handleRangeChange = (values: number[]) => {
    const newRange: [number, number] = [values[0], values[1]]
    setRange(newRange)
    onRangeChange(newRange)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700">Population Range Filter</h4>
        <button
          onClick={() => {
            const fullRange: [number, number] = [minPopulation, maxPopulation]
            setRange(fullRange)
            onRangeChange(fullRange)
          }}
          className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Range values display */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Min:</span>
          <span className="font-semibold text-blue-600 min-w-[80px]">{formatPopulation(range[0])}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Max:</span>
          <span className="font-semibold text-blue-600 min-w-[80px]">{formatPopulation(range[1])}</span>
        </div>
      </div>

      {/* Slider component */}
      <div className="px-2 box-border">
        <Slider
          value={range}
          onValueChange={handleRangeChange}
          min={minPopulation}
          max={maxPopulation}
          step={10000}
          className="w-full"
        />
      </div>

      {/* Range indicators */}
      <div className="flex justify-between text-xs text-gray-500">
        <span>{formatPopulation(minPopulation)}</span>
        <span>{formatPopulation(maxPopulation)}</span>
      </div>
    </div>
  )
}
