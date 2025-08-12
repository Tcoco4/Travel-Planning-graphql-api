export default class WeatherService {
  constructor(client) {
    if (!client) throw new Error("WeatherService requires an API client");
    this.client = client;
  }

  async getGeoCodingData(input) {
    return await this.client
      .getGeoLocationData(input)
      .then(async (res) => {
        return await res.json().then((data) => {
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
          } else {
            return "location(s) not found!";
          }
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
  async getForecastPerCity() {
    return await this.client
      .getWeatherForecastData()
      .then(async (res) => {
        return await res.json().then((data) => {
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
        });
      })
      .catch(
        (e) =>
          (response = {
            success: false,
            message: `Error ${e} ` || "Error Occured",
          })
      );
  }
}
