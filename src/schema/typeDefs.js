const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    suggestCities(countryName: String): [City!]!
    weatherForCity(input: WeatherForecastInput): WeatherForecast!
    activitiesRankedInCity(id: ID!): [ActivityScore!]!
  }

  type City {
    id: ID!
    name: String!
    country: String
    lat: Float!
    lon: Float!
    timezone: String
  }

  type WeatherForecast {
    latitude: Float!
    longitude: Float!
    timezone: String
    forecast_days: DayForecast
  }
  type DayForecast {
    time: [String!]!
    temperature_min: [Float!]!
    temperature_max: [Float!]!
    precipitation: [Float!]!
    weatherCode: [Int!]!
  }
  # type WeatherForecast {
  #     latitude: Float
  #     longitude: Float,
  #     generationtime_ms:Float,
  #     utc_offset_seconds: Int,
  #     timezone: String,
  #     timezone_abbreviation: String,
  #     elevation: Float,
  #     daily_units: {
  #         time: String,
  #         temperature_2m_min: String,
  #         temperature_2m_max: String,
  #         windspeed_10m_min: String,
  #         windspeed_10m_max: String,
  #         sunrise: String,
  #         sunset: String,
  #         precipitation_sum: String,
  #         weathercode: String
  #     },
  #     daily: {
  #         time: [DateString],
  #         temperature_2m_min: [Float],
  #         temperature_2m_max: [Float],
  #         windspeed_10m_min: [Float],
  #         windspeed_10m_max: [Float],
  #         sunrise: [DateTime],
  #         sunset: [DateTime],
  #         precipitation_sum: [Float]
  #         weathercode: [Float]
  #     }
  # }

  input WeatherForecastInput {
    latitude: Float!
    longitude: Float!
    daily: DailyWeatherInput
    timezone: String = auto
    forecast_days: Int
  }

  input DailyWeatherInput {
    temperature_2m_min: String = temperature_2m_min
    temperature_2m_max: String = temperature_2m_max
    windspeed_10m_min: String = windspeed_10m_min
    windspeed_10m_max: String = windspeed_10m_max
    sunrise: String = sunrise
    sunset: String = sunset
    precipitation_sum: String = precipitation_sum
    weathercode: String = weathercode
  }
  type ActivityScore {
    activity: Activity!
    score: Int!
    reasons: [String!]!
  }
  enum Activity {
    SKIING
    SURFING
    INDOOR_SIGHTSEEING
    OUTDOOR_SIGHTSEEING
  }
`;
module.exports = { typeDefs };
