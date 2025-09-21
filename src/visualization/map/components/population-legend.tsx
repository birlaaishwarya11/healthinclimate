export function PopulationLegend() {
  const legendItems = [
    { color: "bg-red-600", label: "Mega (2M+)" },
    { color: "bg-orange-500", label: "Large (1M+)" },
    { color: "bg-yellow-500", label: "Medium (500K+)" },
    { color: "bg-green-500", label: "Small (100K+)" },
    { color: "bg-blue-300", label: "Tiny (<100K)" },
  ]

  return (
    <div className="mt-8 pt-4 border-t">
      <h4 className="font-semibold mb-3">Population Legend</h4>
      <div className="space-y-2 text-sm">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
