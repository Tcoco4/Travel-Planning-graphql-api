export default class OpenMeteoClient {
  geocodeURL = "https://geocoding-api.open-meteo.com/v1/search";
  weatherURL = "https://api.open-meteo.com/v1/forecast";

  async getGeoLocationData(input, limit = 8, language = "en") {
    const url = `${this.geocodeURL}?name=${encodeURIComponent(
      input
    )}&count=${limit}&language=${language}`;

    return await fetch(url);
  }

  async getWeatherForecastData(
    lat,
    lon,
    forecast_days = 4,
    daily = [
      "temperature_2m_min",
      "temperature_2m_max",
      "windspeed_10m_min",
      "windspeed_10m_max",
      "sunrise",
      "sunset",
      "precipitation_sum",
      "weathercode",
    ],
    timezone = "auto"
  ) {
    const params = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lon),
      daily: daily.join(","),
      timezone,
      forecast_days,
    });

    const url = `${this.weatherURL}?${params.toString()}`;

    return await fetch(url);
  }
}
