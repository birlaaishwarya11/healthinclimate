Cornell Tech Cleanup Crew

Workflow:
1. Input data
    * social vulnerability
        * Climate Mapping for Resilience and Adaptation - https://livingatlas.arcgis.com/assessment-tool/search
        * CDC Heat & Health Tracker - https://gis.cdc.gov/HHI/Documents/HHI_Data.zip
    * geographic risk
        * ArcGIS Living Atlas - https://livingatlas.arcgis.com/en/browse/#d=2
    * population density
    * health effects of wildfires - Benthan
        * System Dashboard of Evidence - https://github.com/healthinclimateai/datasets/tree/main/system 
        *  CDC Environmental Public Health Tracking (Air Quality) - https://ephtracking.cdc.gov/DataExplorer/
    * different regions/counties’ health preparedness/disease prevalence
2. Score Calculation
    * Train ML model to quantify each factors’ effect 
    * ultimately predict risk (composite risk score)
3. Visualization
    * interactive map that is shaded by health risk score
    * different population vulnerability layers