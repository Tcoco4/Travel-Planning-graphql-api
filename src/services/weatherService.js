import { transform } from "../utils/transformer.js";
export default class WeatherService {
  constructor(client) {
    if (!client) throw new Error("Weather Service requires an API client");
    this.client = client;
  }

  async getGeoCodingData(input) {
    return await this.client
      .getGeoLocationData(input)
      .then(async (data) => {
        if (data.results && data.results.length > 0) {
          let results = [];
          data.results.forEach((res) => {
            const { name, country, admin1, latitude, longitude, timezone } =
              res;
            results.push({
              name,
              country,
              admin1,
              latitude,
              longitude,
              timezone,
            });
          });

          return results;
        } else return null;
      })
      .catch((e) => {
        throw e;
      });
  }
  async getForecastPerCity(input) {
    return await this.client
      .getWeatherForecastData(input.latitude, input.longitude)
      .then(async (data) => {
        if (data) {
          const { daily, daily_units } = data;
          const { temperature_2m_min, windspeed_10m_min } = daily_units;
          const transformedData = transform(daily);

          return {
            latitude: input.latitude,
            longitude: input.longitude,
            temperatureUnit: temperature_2m_min,
            windspeedUnit: windspeed_10m_min,
            weather: transformedData,
          };
        }
          return {
            latitude: input.latitude,
            longitude: input.longitude,
            temperatureUnit: temperature_2m_min,
            windspeedUnit: windspeed_10m_min,
            weather: transformedData,
          };
        }
      })
      .catch((e) => {
        throw e;
      });
  }
}
