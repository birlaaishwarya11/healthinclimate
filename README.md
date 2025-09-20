Cornell Tech Cleanup Crew

Workflow:
1. Input data
    * social vulnerability
        * Climate Mapping for Resilience and Adaptation - https://livingatlas.arcgis.com/assessment-tool/search
        * CDC Heat & Health Tracker - https://gis.cdc.gov/HHI/Documents/HHI_Data.zip
        * https://www.atsdr.cdc.gov/place-health/php/svi/svi-data-documentation-download.html
    * geographic risk
        * ArcGIS Living Atlas - https://livingatlas.arcgis.com/en/browse/#d=2
        * Wildfire Risk Index https://hazards.fema.gov/nri/wildfire
    * population density
    * health effects of wildfires - Benthan
        * System Dashboard of Evidence - https://github.com/healthinclimateai/datasets/tree/main/system 
        *  CDC Environmental Public Health Tracking (Air Quality) - https://ephtracking.cdc.gov/DataExplorer/
        *  Systems (Provided by mentor) https://docs.google.com/spreadsheets/d/17jGTpE2QJOuJmqHKvDBXeNny_WquRQJmQHWwYk8EBD0/edit?usp=sharing
    * different regions/counties’ health preparedness/disease prevalence
        * https://gis.data.ca.gov/datasets/CADHCS::mcna-population-points-with-t-d-standards/about
        * Asthma: https://data.cdc.gov/National-Center-for-Health-Statistics/Asthma-in-children-younger-than-age-18-by-selected/aewi-gwni/about_data
        * Chronic disease indicators: https://data.cdc.gov/Chronic-Disease-Indicators/U-S-Chronic-Disease-Indicators/hksd-2xuw/about_data
        * Chronic Obstructive Pulmonary Disease (COPD) by County https://www.cdc.gov/copd/php/case-reporting/county-level-estimates-in-copd.html
    *  Healthcare utilization patterns: https://github.com/healthinclimateai/datasets/blob/main/milliman/healthcare%20utilization%20summary%20data.xlsx
2. Score Calculation
    * Train ML model to quantify each factors’ effect 
    * ultimately predict risk (composite risk score)
3. Visualization
    * interactive map that is shaded by health risk score
    * different population vulnerability layers
