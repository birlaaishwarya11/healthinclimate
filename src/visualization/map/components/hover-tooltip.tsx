import type { County } from "@/types/county";

interface HoverTooltipProps {
  county: County | undefined;
}

/** infos
 * 
 * exposure to wildfire emissions is associated with a 65.0% increase in the relative risk of asthma.
exposure to wildfire emissions is associated with a 73.0% increase in the relative risk of chronic obstructive pulmonary disease.
exposure to wildfire smoke PM is associated with a 13.2% increase in the odds of preterm birth.
 */
const randomInfo = () => {
  const infos = [
    "Exposure to wildfire emissions is associated with a 65.0% increase in the relative risk of asthma.",
    "Exposure to wildfire emissions is associated with a 73.0% increase in the relative risk of chronic obstructive pulmonary disease.",
    "Exposure to wildfire smoke PM is associated with a 13.2% increase in the odds of preterm birth.",
  ];
  return infos[Math.floor(Math.random() * infos.length)];
};

const wrapText = (text: string, maxWidth: number) => {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = currentLine.length + word.length + 1; // Approximate width calculation
    if (width <= maxWidth) {
      currentLine += ` ${word}`;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
};

/**
 * Tooltip component that appears when hovering over counties
 * Displays county name in a styled overlay
 */
export function HoverTooltip({ county }: HoverTooltipProps) {
  if (!county) return null;

  const infoText = county.info ? county.info : randomInfo();
  const wrappedText = wrapText(infoText, 20); // Adjust maxWidth as needed

  return (
    <g>
      <rect
        x={county.x + 3}
        y={county.y - 8}
        width="20"
        height={(wrappedText.length + 20)} // Adjust height based on number of lines + county name
        fill="rgba(0, 0, 0, 0.8)"
        rx="1"
        style={{ pointerEvents: "none" }}
      />
      <text
        x={county.x + 13}
        y={county.y - 5} // County name on its own line
        fill="white"
        fontSize="2"
        textAnchor="middle"
        className="font-medium"
      >
        {county.name}
      </text>
      {wrappedText.map((line, index) => (
        <text
          key={index}
          x={county.x + 13}
          y={county.y + index * 3} // Adjust line spacing below county name
          fill="white"
          fontSize="2"
          textAnchor="middle"
          className="font-medium"
        >
          {line}
        </text>
      ))}
    </g>
  );
}
