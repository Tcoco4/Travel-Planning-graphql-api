export default class OpenMeteoClient {
  geocodeURL = "https://geocoding-api.open-meteo.com/v1/search";
  weatherUrl = "https://api.open-meteo.com/v1/forecast";
  async geocode(q, limit = 8, language = "en") {
    const url = `${this.geocodeUrl}?name=${encodeURIComponent(
      q
    )}&count=${limit}&language=${language}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Geocoding failed");
    return res.json(); // returns results array
  }

  async forecast(
    lat,
    lon,
    timezone = "auto",
    hourly = [
      "temperature_2m",
      "precipitation",
      "windspeed_10m",
      "weathercode",
    ],
    daily = [
      "temperature_2m_min",
      "temperature_2m_max",
      "precipitation_sum",
      "weathercode",
    ],
    start,
    end
  ) {
    const params = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lon),
      timezone,
      hourly: hourly.join(","),
      daily: daily.join(","),
    });
    if (start) params.set("start_date", start);
    if (end) params.set("end_date", end);

    const url = `${this.weatherUrl}?${params.toString()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather API failed");
    return res.json();
  }
}
