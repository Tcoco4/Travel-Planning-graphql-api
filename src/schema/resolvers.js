import WeatherService from "../services/weatherService.js";

const wClient = new WeatherService();

export const resolvers = {
  Query: {
    suggestCities: async (parent, args) => {
      // need to suggest City based on county destination
      // user selects city, then we get geo data and weather
      const input = args.input;
      console.log("Input ", input);
      const data = await wClient.getGeoCodingData();
    },
    weatherForCity: async (parent, args) => {
      const input = args.input;
      console.log("Input ", input);
      const data = await wClient.getForecastPerCity();
    },
    activitiesRankedInCity: (parent, args) => {},
  },
};
