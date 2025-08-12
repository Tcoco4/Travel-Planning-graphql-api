export default class OpenMeteoClient {
  geocodeURL = "https://geocoding-api.open-meteo.com/v1/search";
  weatherUrl = "https://api.open-meteo.com/v1/forecast";

  async getGeoLocationData(city, limit = 1, language = "en", format = "json") {
    //Modify to accept country
    let response;
    const url = `${this.geocodeUrl}?name=${encodeURIComponent(
      city
    )}&count=${limit}&language=${language}$format=${format}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const { latitude, longitude, name } = data.results[0];

          return (response = {
            success: true,
            data: { latitude: latitude, longitude: longitude, name: name },
            message: "location found",
          });
        } else
          return (response = {
            success: false,
            data: null,
            message: "location not found",
          });
      })
      .catch(
        (e) =>
          (response = {
            success: false,
            message: `Error ${e}` || "Error Occured",
          })
      );
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

    const url = `${this.weatherUrl}?${params.toString()}`;

    await fetch(url)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        if (!data)
          return (response = {
            success: false,
            message: " Weather data not found",
            data: null,
          });
        else {
          const { daily } = data;

          return (response = {
            success: true,
            message: "Weather data found",
            data: transform(daily),
          });
        }
      })
      .catch(
        (e) =>
          (response = {
            success: false,
            message: `Error ${e} ` || "Error Occured",
          })
      );

    if (!res.ok) throw new Error("Weather API failed");
    return res.json();
  }
}
