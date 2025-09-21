import { Card, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Main page header component with title and description
 * Provides context and instructions for the interactive map
 */
export function PageHeader() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-gray-800">
          California Counties Interactive Map
        </CardTitle>
        <p className="text-center text-gray-600 mt-2">
          Click on counties to explore population data. Hover for quick info.
        </p>
      </CardHeader>
    </Card>
  )
}
