import type { County, PopulationCategory } from "@/types/county"

/**
 * Utility functions for county data processing and formatting
 */

/**
 * Categorizes counties by population size
 */
export const getPopulationCategory = (population: number): PopulationCategory => {
  if (population > 2000000) return "mega"
  if (population > 1000000) return "large"
  if (population > 500000) return "medium"
  if (population > 100000) return "small"
  return "tiny"
}

/**
 * Gets the appropriate color class based on county population and state
 */
export const getCountyColor = (county: County, selectedCounty: string | null, hoveredCounty: string | null): string => {
  const category = getPopulationCategory(county.population)
  const isSelected = selectedCounty === county.name
  const isHovered = hoveredCounty === county.name

  if (isSelected) return "fill-blue-600"
  if (isHovered) return "fill-blue-400"

  switch (category) {
    case "mega":
      return "fill-red-600"
    case "large":
      return "fill-orange-500"
    case "medium":
      return "fill-yellow-500"
    case "small":
      return "fill-green-500"
    default:
      return "fill-blue-300"
  }
}

/**
 * Formats population numbers with locale-specific formatting
 */
export const formatPopulation = (population: number): string => {
  return population.toLocaleString()
}

/**
 * Calculates the radius for county markers based on population
 */
export const getCountyRadius = (population: number): number => {
  return Math.max(2, Math.log(population) / 2)
}

/**
 * Finds the county with the largest population
 */
export const getLargestCounty = (counties: County[]): County | undefined => {
  return counties.find((c) => c.population === Math.max(...counties.map((c) => c.population)))
}

/**
 * Finds the county with the smallest population
 */
export const getSmallestCounty = (counties: County[]): County | undefined => {
  return counties.find((c) => c.population === Math.min(...counties.map((c) => c.population)))
}

/**
 * Calculates the total population across all counties
 */
export const getTotalPopulation = (counties: County[]): number => {
  return counties.reduce((sum, county) => sum + county.population, 0)
}
