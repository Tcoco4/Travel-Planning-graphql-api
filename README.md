# Travel GraphQL API

## Features:

## Features:

- Dynamic city suggestions (Open-Meteo Geocoding API) based on partial or complete user input.
- Dynamic city suggestions (Open-Meteo Geocoding API) based on partial or complete user input.
- Weather forecast for a selected city (Open-Meteo Forecast API)
- Ranking activities (Skiing, Surfing, Indoor sightseeing, Outdoor sightseeing) based on forecasted conditions using a scoring system of

```
    0 - Bad
    1 - Okay
    2 - Good
```

## Running Locally:

1. Clone repo
2. npm install
3. npm run start
4. Visit http://localhost:4000 (Apollo playground for testing queries)

## Testing Locally:

- npm test
- npx jest --coverage

## Architecture

- Clean Architecture principles:
  `resolvers -> services -> openMeteoClient -> OpenMeteo Api `
- [Architecture](docs/gql-api-arch.png)
- Nodejs with Apollo Server for Graphql
- OpenMeteo Client for retrieving weather data

## Technical Choices

- Apollo Server. Easy setup, Easy testing with apollo studio, large community.

## Improvements

- Use Typescript, type safety & easier maintainability
- Caching, for common results from openmeto
- Better heurisitcs for activity scoring
- Automate tests for maintainance of code quality
- Integration tests

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
