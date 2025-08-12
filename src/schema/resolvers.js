import WeatherService from "../services/weatherService.js";
import OpenMeteoClient from "../client/openMeteoClient.js";

const client = new OpenMeteoClient();
const weatherService = new WeatherService(client);

export const resolvers = {
  Query: {
    suggestCities: async (parent, args) => {
      const input = args.input;
      return await weatherService.getGeoCodingData(input).then((res) => {
        return res;
      });
    },
    weatherForCity: async (parent, args) => {
      const input = args.input;
      console.log("Input ", input);
      const data = await weatherService.getForecastPerCity();
    },
    activitiesRankedInCity: (parent, args) => {},
  },
};
