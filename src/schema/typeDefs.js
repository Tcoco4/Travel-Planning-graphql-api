import { gql } from "apollo-server";

export const typeDefs = gql`
  #Query Definiton
  type Query {
    suggestCities(input: String): [City!]
    weatherForCity(weatherForecast: WeatherForecastInput): [DailyWeatherEntry!]
    rankActivitiesInCity(activityInput: ActivityInput): [ActivityScore!]
  }

  #Scalar Definition
  scalar DateTime

  #Type Definition
  type City {
    name: String!
    country: String
    admin1: String
    latitude: Float!
    longitude: Float!
    timezone: String
  }
  type DailyWeather {
    temperature_2m_min: Float
    temperature_2m_max: Float
    windspeed_10m_min: Float
    windspeed_10m_max: Float
    sunrise: String
    sunset: String
    precipitation_sum: Float
    weathercode: Int
  }
  type DailyWeatherEntry {
    date: String!
    temperatureUnit: String
    windspeedUnit: String
    weather: DailyWeather
  }
  type ActivityScore {
    activity: Activity!
    details: [ScoreDetails]!
  }
  type ScoreDetails {
    date: String
    reason: String
    score: Int
  }
  #Input Definitions
  input WeatherForecastInput {
    latitude: Float!
    longitude: Float!
  }

  input ActivityInput {
    latitude: Float!
    longitude: Float!
  }
  #Enum definitions
  enum Activity {
    SKIING
    SURFING
    INDOOR_SIGHTSEEING
    OUTDOOR_SIGHTSEEING
  }
`;
