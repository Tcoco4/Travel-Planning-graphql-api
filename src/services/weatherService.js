import OpenMeteoClient from "../client/openMeteoClient.js";

export default class WeatherService {
  client = new OpenMeteoClient();

  constructor(client) {
    this.client = client;
  }

  async getGeoCodingData() {
    const geoData = await this.client.getGeoLocationData();
    return geoData;
  }
  async getForecastPerCity() {
    const weatherData = await this.client.getWeatherForecastData();
    return weatherData;
  }
}
