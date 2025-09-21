"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"

interface WeightConfig {
  max: number
  min: number
  value: number
  title: string
}

interface WeightSliderProps {
  /** The key identifier for this weight */
  weightKey: string
  /** The weight configuration object */
  weight: WeightConfig
  /** Callback when weight value changes */
  onWeightChange: (key: string, newValue: number) => void
  /** Optional label for the slider */
  label?: string
  /** Optional description text */
  description?: string
  /** Number of decimal places for precision */
  precision?: number
  /** Step size for the slider */
  step?: number
  /** Custom formatting function for display values */
  formatValue?: (value: number) => string
  /** Whether to show the text input */
  showInput?: boolean
  /** Custom CSS classes */
  className?: string
}

/**
 * Reusable slider component for adjusting weight values within defined ranges
 * Supports text input synchronization and customizable appearance
 */
export function WeightSlider({
  weightKey,
  weight,
  onWeightChange,
  label,
  description,
  precision = 2,
  step = 0.1,
  formatValue,
  showInput = true,
  className = "",
}: WeightSliderProps) {
  const [inputValue, setInputValue] = useState<string>(weight.value.toFixed(precision))
  const [error, setError] = useState<string>("")

  // Update input when weight value changes externally
  useEffect(() => {
    setInputValue(weight.value.toFixed(precision))
    setError("")
  }, [weight.value, precision])

  const defaultFormatValue = (value: number) => value.toFixed(precision)
  const displayFormatter = formatValue || defaultFormatValue

  const handleSliderChange = (values: number[]) => {
    const newValue = values[0]
    setInputValue(newValue.toFixed(precision))
    setError("")
    onWeightChange(weightKey, newValue)
  }

  const validateAndUpdateValue = (value: number) => {
    if (value < weight.min) {
      setError(`Value cannot be less than ${weight.min}`)
      return false
    }
    if (value > weight.max) {
      setError(`Value cannot exceed ${weight.max}`)
      return false
    }
    setError("")
    onWeightChange(weightKey, value)
    return true
  }

  const handleInputChange = (inputStr: string) => {
    setInputValue(inputStr)

    const numValue = Number.parseFloat(inputStr)
    if (!isNaN(numValue)) {
      validateAndUpdateValue(numValue)
    }
  }

  const handleInputBlur = () => {
    const numValue = Number.parseFloat(inputValue)
    if (isNaN(numValue)) {
      // Reset to current weight value if input is invalid
      setInputValue(weight.value.toFixed(precision))
      setError("")
    }
  }

  const handleReset = () => {
    const resetValue = 0
    const clampedValue = Math.max(weight.min, Math.min(weight.max, resetValue))
    setInputValue(clampedValue.toFixed(precision))
    setError("")
    onWeightChange(weightKey, clampedValue)
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header with label and reset button */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-sm font-medium text-gray-700">{weight.title}</h4>
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
        <button onClick={handleReset} className="text-xs text-blue-600 hover:text-blue-800 transition-colors">
          Reset
        </button>
      </div>

      {/* Current value display and text input */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 min-w-0 flex-1">
          <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
            {displayFormatter(weight.value)}
          </span>
          {showInput && (
            <div className="flex-1 max-w-24">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                onBlur={handleInputBlur}
                min={weight.min}
                max={weight.max}
                step={step}
                placeholder={weight.value.toFixed(precision)}
                className={`w-full px-2 py-1 text-xs border rounded transition-colors ${
                  error
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                } focus:outline-none focus:ring-1`}
              />
            </div>
          )}
        </div>
      </div>

      {/* Error message */}
      {error && <p className="text-xs text-red-600">{error}</p>}

      {/* Slider */}
      <div className="px-1">
        <Slider
          value={[weight.value]}
          onValueChange={handleSliderChange}
          min={weight.min}
          max={weight.max}
          step={step}
          className="w-full"
        />
      </div>

      {/* Range indicators */}
      <div className="flex justify-between text-xs text-gray-500">
        <span>{displayFormatter(weight.min)}</span>
        <span>{displayFormatter(weight.max)}</span>
      </div>
    </div>
  )
}
