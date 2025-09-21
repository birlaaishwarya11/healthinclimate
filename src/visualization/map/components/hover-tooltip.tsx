import type { County } from "@/types/county"

interface HoverTooltipProps {
  county: County | undefined
}

/**
 * Tooltip component that appears when hovering over counties
 * Displays county name in a styled overlay
 */
export function HoverTooltip({ county }: HoverTooltipProps) {
  if (!county) return null

  return (
    <g>
      <rect x={county.x + 3} y={county.y - 8} width="20" height="6" fill="rgba(0, 0, 0, 0.8)" rx="1" />
      <text x={county.x + 13} y={county.y - 5} fill="white" fontSize="2" textAnchor="middle" className="font-medium">
        {county.name}
      </text>
    </g>
  )
}
