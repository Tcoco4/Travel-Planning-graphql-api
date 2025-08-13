# Travel GraphQL API

## Features:

- Dynamic city suggestions (Open-Meteo Geocoding API) based on partial or complete user input.
- Weather forecast for a selected city (Open-Meteo Forecast API)
- Ranking activities (Skiing, Surfing, Indoor sightseeing, Outdoor sightseeing) based on forecasted conditions using a scoring system of

```
    0 - Bad
    1 - Okay
    2 - Good
```

- Designed according to clean architecture: resolvers -> services -> openMeteoClient -> OpenMeteo Api

<!-- - Unit Tests : Jest -->

## Running Locally:

1. Clone repo
2. npm install
3. npm run start
4. Visit http://localhost:4000 (Apollo playground for testing queries)

## Example Queries

- suggestCities endpoint
  (has a limit of 8 cities returned)

```
    query GetSuggestedCities($input: String){
        suggestCities(input: $input){
            country,
            latitude,
            longitude,
            name,
            timezone
        }
    }


```

- weatherForCity endpoint (returns daily data forecast for 4 days)

```
query GetWeatherForCity($cityInput: WeatherForecastInput) {
  weatherForCity(weatherForecast: $cityInput){
    date,
    weather {
        temperature_2m_min
        temperature_2m_max
        windspeed_10m_min
        windspeed_10m_max,
        sunrise
        sunset
        precipitation_sum
        weathercode
    }
  }
}
```

- rankingActivities endpoint

```
query RankingActivities($rankingInput: ActivityInput) {
  rankActivitiesInCity(activityInput: $rankingInput){
    latitude,
    longitude,
    activityRanking {
        date,
        skiing,
        surfing,
        outdoorSightseeing,
        indoorSightseeing
   }

  }
}
```

## Variables

```
{
    "input": "Cap"

    "cityInput": {
        "latitude": -33.92584,
        "longitude": 18.42322,
    }

    "rankingInput" :{
        "latitude": -33.38121,
        "longitude": 19.66934,
    }
}
```
