import { gql } from "apollo-server";

export const typeDefs = gql`
  #Query Definiton
  type Query {
    suggestCities(input: String): [City!]
    weatherForCity(input: WeatherForecastInput): WeatherForecast!
    activitiesRankedInCity(id: ID!): [ActivityScore!]!
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

  type WeatherForecast {
    latitude: Float
    longitude: Float
    generationtime_ms: Float
    utc_offset_seconds: Int
    timezone: String
    timezone_abbreviation: String
    elevation: Float
    daily_units: DailyWeatherUnits!
    daily: DailyWeather!
  }
  type DailyWeatherUnits {
    time: String
    temperature_2m_min: String
    temperature_2m_max: String
    windspeed_10m_min: String
    windspeed_10m_max: String
    sunrise: DateTime
    sunset: DateTime
    precipitation_sum: String
    weathercode: String
  }
  type DailyWeather {
    time: [String]
    temperature_2m_min: [Float]
    temperature_2m_max: [Float]
    windspeed_10m_min: [Float]
    windspeed_10m_max: [Float]
    sunrise: [String]
    sunset: [String]
    precipitation_sum: [Float]
    weathercode: [Float]
  }
  type ActivityScore {
    activity: Activity!
    score: Int!
    reasons: [String!]!
  }

  #Input Definitions
  input WeatherForecastInput {
    latitude: Float!
    longitude: Float!
    daily: DailyWeatherInput
    timezone: String = auto
    forecast_days: Int = 3
  }

  input DailyWeatherInput {
    temperature_2m_min: String = "temperature_2m_min"
    temperature_2m_max: String = "temperature_2m_max"
    windspeed_10m_min: String = "windspeed_10m_min"
    windspeed_10m_max: String = "windspeed_10m_max"
    sunrise: String = "sunrise"
    sunset: String = "sunset"
    precipitation_sum: String = "precipitation_sum"
    weathercode: String = "weathercode"
  }

  #Enum definitions
  enum Activity {
    SKIING
    SURFING
    INDOOR_SIGHTSEEING
    OUTDOOR_SIGHTSEEING
  }
`;
