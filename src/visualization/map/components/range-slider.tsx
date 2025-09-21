"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

interface RangeSliderProps {
  min: number
  max: number
  onRangeChange: (val: number) => void
  title?: string
}

export function RangeSlider({ min, max, onRangeChange, title }: RangeSliderProps) {
  const [range, setRange] = useState<[number, number]>([min, max])

  const handleRangeChange = (values: number[]) => {
    const newRange: [number, number] = [values[0], values[1]]
    setRange(newRange)
    console.log("New range:", newRange)
    onRangeChange(newRange[0])
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700">{title}</h4>
        <button
          onClick={() => {
            const fullRange: [number, number] = [min, max]
            setRange(fullRange)
            onRangeChange(fullRange[0])
          }}
          className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Slider component */}
      <div className="flex items-center space-x-4 px-2 ">
          <div className="w-24">
            <input
                type="text"
                value={String(range[0])}
                onChange={(e) => handleRangeChange([Number(e.target.value), range[1]])}
                placeholder="e.g., 100000"
                className={`w-full px-3 py-2 text-sm border rounded-md transition-colors focus:outline-none focus:ring-2`}
            />
        </div>

        <div className="w-full space-y-2">
            <Slider
                value={range}
                onValueChange={handleRangeChange}
                min={min}
                max={max}
                step={10000}
                className="w-full"
            />
            {/* Range indicators */}
            <div className="flex justify-between text-xs text-gray-500">
                <span>{min}</span>
                <span>{max}</span>
            </div>
      </div>
    </div>


    </div>
  )
}
