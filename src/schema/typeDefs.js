const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    suggestCities(countryName: String!): [City!]!
    weatherForCity(id: ID!): WeatherForecast!
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
    timezone: String!
    dayForcast: DayForecast
  }

  type DayForecast {
    time: [String!]!
    temperature_min: [Float!]!
    temperature_max: [Float!]!
    precipitation: [Float!]!
    weatherCode: [Int!]!
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
