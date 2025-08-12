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
    daily = [
      "temperature_2m_min",
      "temperature_2m_max",
      "precipitation_sum",
      "weathercode",
    ],
    timezone = "auto",
    forecast_days = 4
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

    // if (!res.ok) throw new Error("Weather API failed");
    // return res.json();
  }
}
