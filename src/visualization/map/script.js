const d3 = require("d3")

// California counties data - simplified GeoJSON structure
const californiaCounties = {
  type: "FeatureCollection",
  features: [
    // Major counties with approximate coordinates for demonstration
    {
      type: "Feature",
      properties: { NAME: "Los Angeles" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-118.9, 33.7],
            [-117.6, 33.7],
            [-117.6, 34.8],
            [-118.9, 34.8],
            [-118.9, 33.7],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "San Diego" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-117.6, 32.5],
            [-116.1, 32.5],
            [-116.1, 33.5],
            [-117.6, 33.5],
            [-117.6, 32.5],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Orange" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-118.1, 33.4],
            [-117.4, 33.4],
            [-117.4, 33.9],
            [-118.1, 33.9],
            [-118.1, 33.4],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Riverside" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-117.6, 33.4],
            [-114.6, 33.4],
            [-114.6, 34.1],
            [-117.6, 34.1],
            [-117.6, 33.4],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "San Bernardino" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-118.0, 34.1],
            [-114.1, 34.1],
            [-114.1, 35.8],
            [-118.0, 35.8],
            [-118.0, 34.1],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Santa Clara" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.2, 36.9],
            [-121.2, 36.9],
            [-121.2, 37.5],
            [-122.2, 37.5],
            [-122.2, 36.9],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Alameda" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.4, 37.4],
            [-121.5, 37.4],
            [-121.5, 37.9],
            [-122.4, 37.9],
            [-122.4, 37.4],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Sacramento" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.8, 38.2],
            [-121.0, 38.2],
            [-121.0, 38.9],
            [-121.8, 38.9],
            [-121.8, 38.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Contra Costa" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.3, 37.8],
            [-121.6, 37.8],
            [-121.6, 38.1],
            [-122.3, 38.1],
            [-122.3, 37.8],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Fresno" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.7, 36.0],
            [-119.0, 36.0],
            [-119.0, 37.3],
            [-120.7, 37.3],
            [-120.7, 36.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Kern" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.2, 34.9],
            [-117.1, 34.9],
            [-117.1, 35.8],
            [-120.2, 35.8],
            [-120.2, 34.9],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "San Francisco" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.5, 37.7],
            [-122.3, 37.7],
            [-122.3, 37.8],
            [-122.5, 37.8],
            [-122.5, 37.7],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Ventura" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-119.6, 34.0],
            [-118.7, 34.0],
            [-118.7, 34.5],
            [-119.6, 34.5],
            [-119.6, 34.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "San Mateo" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.5, 37.1],
            [-122.1, 37.1],
            [-122.1, 37.7],
            [-122.5, 37.7],
            [-122.5, 37.1],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Marin" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-123.0, 37.9],
            [-122.4, 37.9],
            [-122.4, 38.3],
            [-123.0, 38.3],
            [-123.0, 37.9],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Sonoma" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-123.5, 38.1],
            [-122.4, 38.1],
            [-122.4, 38.9],
            [-123.5, 38.9],
            [-123.5, 38.1],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Napa" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.6, 38.2],
            [-122.2, 38.2],
            [-122.2, 38.9],
            [-122.6, 38.9],
            [-122.6, 38.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Solano" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.4, 38.0],
            [-121.8, 38.0],
            [-121.8, 38.5],
            [-122.4, 38.5],
            [-122.4, 38.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Stanislaus" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.6, 37.2],
            [-120.3, 37.2],
            [-120.3, 37.9],
            [-121.6, 37.9],
            [-121.6, 37.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "San Joaquin" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.9, 37.6],
            [-121.0, 37.6],
            [-121.0, 38.3],
            [-121.9, 38.3],
            [-121.9, 37.6],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Tulare" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-119.6, 35.7],
            [-118.1, 35.7],
            [-118.1, 36.5],
            [-119.6, 36.5],
            [-119.6, 35.7],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Santa Barbara" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.7, 34.4],
            [-119.5, 34.4],
            [-119.5, 35.0],
            [-120.7, 35.0],
            [-120.7, 34.4],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Monterey" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.0, 35.8],
            [-120.2, 35.8],
            [-120.2, 36.9],
            [-122.0, 36.9],
            [-122.0, 35.8],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Placer" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.4, 38.7],
            [-120.1, 38.7],
            [-120.1, 39.4],
            [-121.4, 39.4],
            [-121.4, 38.7],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "San Luis Obispo" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.4, 35.0],
            [-119.5, 35.0],
            [-119.5, 35.8],
            [-121.4, 35.8],
            [-121.4, 35.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Santa Cruz" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.3, 36.9],
            [-121.6, 36.9],
            [-121.6, 37.3],
            [-122.3, 37.3],
            [-122.3, 36.9],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Merced" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.3, 36.8],
            [-120.3, 36.8],
            [-120.3, 37.6],
            [-121.3, 37.6],
            [-121.3, 36.8],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Butte" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.0, 39.2],
            [-121.2, 39.2],
            [-121.2, 40.0],
            [-122.0, 40.0],
            [-122.0, 39.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Yolo" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.1, 38.5],
            [-121.5, 38.5],
            [-121.5, 38.9],
            [-122.1, 38.9],
            [-122.1, 38.5],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "El Dorado" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.9, 38.4],
            [-119.9, 38.4],
            [-119.9, 39.0],
            [-120.9, 39.0],
            [-120.9, 38.4],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Imperial" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-116.1, 32.5],
            [-114.1, 32.5],
            [-114.1, 33.3],
            [-116.1, 33.3],
            [-116.1, 32.5],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Kings" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.3, 35.9],
            [-119.4, 35.9],
            [-119.4, 36.5],
            [-120.3, 36.5],
            [-120.3, 35.9],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Madera" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.1, 36.8],
            [-119.1, 36.8],
            [-119.1, 37.5],
            [-120.1, 37.5],
            [-120.1, 36.8],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Nevada" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.2, 39.0],
            [-120.0, 39.0],
            [-120.0, 39.6],
            [-121.2, 39.6],
            [-121.2, 39.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Humboldt" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-124.4, 40.0],
            [-123.4, 40.0],
            [-123.4, 41.5],
            [-124.4, 41.5],
            [-124.4, 40.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Mendocino" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-124.0, 38.8],
            [-122.9, 38.8],
            [-122.9, 40.2],
            [-124.0, 40.2],
            [-124.0, 38.8],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Lake" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-123.2, 38.8],
            [-122.4, 38.8],
            [-122.4, 39.4],
            [-123.2, 39.4],
            [-123.2, 38.8],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Shasta" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.6, 40.3],
            [-121.2, 40.3],
            [-121.2, 41.2],
            [-122.6, 41.2],
            [-122.6, 40.3],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Tehama" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.8, 39.8],
            [-121.8, 39.8],
            [-121.8, 40.5],
            [-122.8, 40.5],
            [-122.8, 39.8],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Glenn" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.6, 39.4],
            [-122.0, 39.4],
            [-122.0, 39.9],
            [-122.6, 39.9],
            [-122.6, 39.4],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Colusa" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.4, 38.9],
            [-121.8, 38.9],
            [-121.8, 39.4],
            [-122.4, 39.4],
            [-122.4, 38.9],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Sutter" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.9, 38.9],
            [-121.4, 38.9],
            [-121.4, 39.3],
            [-121.9, 39.3],
            [-121.9, 38.9],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Yuba" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.6, 39.0],
            [-121.0, 39.0],
            [-121.0, 39.5],
            [-121.6, 39.5],
            [-121.6, 39.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Sierra" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.9, 39.3],
            [-120.2, 39.3],
            [-120.2, 39.8],
            [-120.9, 39.8],
            [-120.9, 39.3],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Plumas" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.2, 39.6],
            [-120.0, 39.6],
            [-120.0, 40.3],
            [-121.2, 40.3],
            [-121.2, 39.6],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Lassen" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.2, 40.2],
            [-120.0, 40.2],
            [-120.0, 41.2],
            [-121.2, 41.2],
            [-121.2, 40.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Modoc" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.2, 41.0],
            [-120.0, 41.0],
            [-120.0, 42.0],
            [-121.2, 42.0],
            [-121.2, 41.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Siskiyou" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-123.5, 41.2],
            [-121.8, 41.2],
            [-121.8, 42.0],
            [-123.5, 42.0],
            [-123.5, 41.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Del Norte" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-124.3, 41.5],
            [-123.8, 41.5],
            [-123.8, 42.0],
            [-124.3, 42.0],
            [-124.3, 41.5],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Trinity" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-123.8, 40.2],
            [-122.6, 40.2],
            [-122.6, 41.2],
            [-123.8, 41.2],
            [-123.8, 40.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Tuolumne" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.7, 37.6],
            [-119.2, 37.6],
            [-119.2, 38.4],
            [-120.7, 38.4],
            [-120.7, 37.6],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Calaveras" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.9, 37.9],
            [-120.2, 37.9],
            [-120.2, 38.5],
            [-120.9, 38.5],
            [-120.9, 37.9],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Amador" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.9, 38.2],
            [-120.4, 38.2],
            [-120.4, 38.7],
            [-120.9, 38.7],
            [-120.9, 38.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Alpine" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.2, 38.4],
            [-119.7, 38.4],
            [-119.7, 38.9],
            [-120.2, 38.9],
            [-120.2, 38.4],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Mono" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-119.6, 37.0],
            [-118.2, 37.0],
            [-118.2, 38.4],
            [-119.6, 38.4],
            [-119.6, 37.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Inyo" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-118.9, 36.0],
            [-117.8, 36.0],
            [-117.8, 37.2],
            [-118.9, 37.2],
            [-118.9, 36.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Mariposa" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120.2, 37.1],
            [-119.6, 37.1],
            [-119.6, 37.8],
            [-120.2, 37.8],
            [-120.2, 37.1],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "San Benito" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-121.6, 36.2],
            [-120.6, 36.2],
            [-120.6, 37.0],
            [-121.6, 37.0],
            [-121.6, 36.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { NAME: "Santa Clara" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.2, 36.9],
            [-121.2, 36.9],
            [-121.2, 37.5],
            [-122.2, 37.5],
            [-122.2, 36.9],
          ],
        ],
      },
    },
  ],
}

class CaliforniaMap {
  constructor() {
    this.svg = d3.select("#california-map")
    this.tooltip = d3.select("#tooltip")
    this.selectedCounty = null
    this.width = 800
    this.height = 600

    this.init()
  }

  init() {
    // Set up SVG dimensions
    this.svg
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .style("width", "100%")
      .style("height", "auto")

    // Set up projection for California
    this.projection = d3
      .geoMercator()
      .center([-119.5, 37.0])
      .scale(2400)
      .translate([this.width / 2, this.height / 2])

    this.path = d3.geoPath().projection(this.projection)

    this.renderMap()
  }

  renderMap() {
    // Create county paths
    const counties = this.svg
      .selectAll(".county")
      .data(californiaCounties.features)
      .enter()
      .append("path")
      .attr("class", "county")
      .attr("d", this.path)
      .on("mouseover", (event, d) => this.handleMouseOver(event, d))
      .on("mousemove", (event, d) => this.handleMouseMove(event, d))
      .on("mouseout", (event, d) => this.handleMouseOut(event, d))
      .on("click", (event, d) => this.handleClick(event, d))
  }

  handleMouseOver(event, d) {
    this.tooltip.classed("visible", true).html(`<strong>${d.properties.NAME} County</strong>`)
  }

  handleMouseMove(event, d) {
    const [x, y] = d3.pointer(event, document.body)
    this.tooltip.style("left", x + 10 + "px").style("top", y - 10 + "px")
  }

  handleMouseOut(event, d) {
    this.tooltip.classed("visible", false)
  }

  handleClick(event, d) {
    // Remove previous selection
    this.svg.selectAll(".county").classed("selected", false)

    // Add selection to clicked county
    d3.select(event.target).classed("selected", true)

    // Update info panel
    this.selectedCounty = d.properties.NAME
    d3.select("#selected-county").text(`${this.selectedCounty} County`)

    // Add some sample data display
    this.displayCountyInfo(d.properties.NAME)
  }

  displayCountyInfo(countyName) {
    // Sample data for demonstration
    const sampleData = {
      "Los Angeles": { population: "10.04M", area: "4,751 sq mi" },
      "San Diego": { population: "3.34M", area: "4,526 sq mi" },
      Orange: { population: "3.19M", area: "948 sq mi" },
      Riverside: { population: "2.42M", area: "7,208 sq mi" },
      "San Bernardino": { population: "2.18M", area: "20,105 sq mi" },
      "Santa Clara": { population: "1.93M", area: "1,291 sq mi" },
      Alameda: { population: "1.67M", area: "739 sq mi" },
      Sacramento: { population: "1.55M", area: "966 sq mi" },
      "Contra Costa": { population: "1.15M", area: "720 sq mi" },
      Fresno: { population: "999K", area: "5,958 sq mi" },
    }

    const data = sampleData[countyName] || { population: "Data not available", area: "Data not available" }

    d3.select("#selected-county").html(`
            <strong>${countyName} County</strong><br>
            <small>Population: ${data.population}</small><br>
            <small>Area: ${data.area}</small>
        `)
  }
}

// Initialize the map when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new CaliforniaMap()
})
