"use client"

import { CardContent, CardHeader, CardTitle, Card } from "./card"
import { WeightSlider } from "./weight-slider"

interface WeightConfig {
  max: number
  min: number
  value: number
    title: string
}

interface WeightsPanelProps {
  /** The weights dictionary */
  weights: { [key: string]: WeightConfig }
  /** Callback when any weight changes */
  onWeightsChange: (weights: { [key: string]: WeightConfig }) => void
  /** Optional title for the panel */
  title?: string
  /** Custom labels for each weight */
  labels?: { [key: string]: string }
  /** Custom descriptions for each weight */
  descriptions?: { [key: string]: string }
  /** Custom CSS classes */
  className?: string
}

/**
 * Panel component that renders multiple weight sliders
 * Manages the weights dictionary and provides a cohesive interface
 */
export function WeightsPanel({
  weights,
  onWeightsChange,
  title = "Weight Configuration",
  labels = {},
  descriptions = {},
  className = "",
}: WeightsPanelProps) {
  const handleWeightChange = (key: string, newValue: number) => {
    const updatedWeights = {
      ...weights,
      [key]: {
        ...weights[key],
        value: newValue,
      },
    }
    onWeightsChange(updatedWeights)
  }

  const handleResetAll = () => {
    const resetWeights = Object.keys(weights).reduce(
      (acc, key) => {
        const weight = weights[key]
        const resetValue = Math.max(weight.min, Math.min(weight.max, 0))
        acc[key] = {
          ...weight,
          value: resetValue,
        }
        return acc
      },
      {} as { [key: string]: WeightConfig },
    )

    onWeightsChange(resetWeights)
  }

  const calculateTotalScore = () => {
    return Math.random() * 100
    // return Object.values(weights).reduce((sum, weight) => sum + weight.value, 0)
  }

  return (
    <div className={`bg-white space-y-4 ${className} w-full`}>
        <CardHeader className="p-0">
            <CardTitle className="text-xl">Score</CardTitle>
            <div className="text-lg font-semibold text-gray-800">{calculateTotalScore().toFixed(2)}</div>
        </CardHeader>
      <div className="space-y-6">
      {/* Panel header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <button onClick={handleResetAll} className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
          Reset All
        </button>
      </div>

      {/* Weight sliders */}
      <div className="space-y-6">
        {Object.entries(weights).map(([key, weight]) => (
          <WeightSlider
            key={key}
            weightKey={key}
            weight={weight}
            onWeightChange={handleWeightChange}
            label={labels[key]}
            description={descriptions[key]}
          />
        ))}
      </div>

      {/* Summary */}
      {/* <div className="bg-gray-50 rounded-lg p-3 mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Current Values</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {Object.entries(weights).map(([key, weight]) => (
            <div key={key} className="flex justify-between">
              <span className="text-gray-600">{labels[key] || key}:</span>
              <span className="font-medium">{weight.value.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  </div>
  )
}
