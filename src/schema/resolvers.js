import WeatherService from "../services/weatherService.js";
import OpenMeteoClient from "../client/openMeteoClient.js";
import { ActivityRankingService } from "../services/activityRankingService.js";

const client = new OpenMeteoClient();
const weatherService = new WeatherService(client);
const rankActivityService = new ActivityRankingService();

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
    rankActivitiesInCity: async (_, args) => {
      const input = args.activityInput;

      const weather = await weatherService
        .getForecastPerCity(input)
        .then((res) => res);

      return await rankActivityService.rankActivities(input, weather);
    },
  },
};
