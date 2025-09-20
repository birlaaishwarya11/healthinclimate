Cornell Tech Cleanup Crew

Workflow:
1. Input data
    * social vulnerability: https://www.atsdr.cdc.gov/place-health/php/svi/svi-data-documentation-download.html
    * geographic risk
    * population density
    * health effects of wildfires - Benthan
    * different regions/counties’ health preparedness/disease prevalence: https://gis.data.ca.gov/datasets/CADHCS::mcna-population-points-with-t-d-standards/about
2. Score Calculation
    * Train ML model to quantify each factors’ effect 
    * ultimately predict risk (composite risk score)
3. Visualization
    * interactive map that is shaded by health risk score
    * different population vulnerability layers
