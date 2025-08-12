import WeatherService from "../services/weatherService.js";
import OpenMeteoClient from "../client/openMeteoClient.js";

const client = new OpenMeteoClient();
const weatherService = new WeatherService(client);

export const resolvers = {
  Query: {
    suggestCities: async (_, args) => {
      const input = args.input;
      return await weatherService.getGeoCodingData(input).then((res) => res);
    },
    weatherForCity: async (_, args) => {
      const input = args.weatherForecast;
      return await weatherService.getForecastPerCity(input).then((res) => res);
    },
    activitiesRankedInCity: (parent, args) => {},
  },
};
