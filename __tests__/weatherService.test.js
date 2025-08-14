import WeatherService from "../src/services/weatherService.js";

describe("Weather Service Tests", () => {
  it("Partial Input for getGeoLocationData to be retrieved", async () => {
    const mockClient = {
      getGeoLocationData: jest.fn().mockResolvedValue({
        results: [
          {
            id: 978033,
            name: "Matrooster",
            latitude: -25.33218,
            longitude: 26.99374,
            elevation: 1097.0,
            feature_code: "PPL",
            country_code: "ZA",
            admin1_id: 1085598,
            admin2_id: 8347347,
            admin3_id: 8347508,
            timezone: "Africa/Johannesburg",
            country_id: 953987,
            country: "South Africa",
            admin1: "North West",
            admin2: "Bojanala Platinum",
            admin3: "Moses Kotane",
          },
          {
            id: 3364263,
            name: "Matroosberg",
            latitude: -33.38121,
            longitude: 19.66934,
            elevation: 2249.0,
            feature_code: "MT",
            country_code: "ZA",
            admin1_id: 1085599,
            admin2_id: 8347344,
            admin3_id: 8347628,
            timezone: "Africa/Johannesburg",
            country_id: 953987,
            country: "South Africa",
            admin1: "Western Cape",
            admin2: "Cape Winelands District Municipality",
            admin3: "Breede Valley",
          },
          {
            id: 3364261,
            name: "Matroosfontein",
            latitude: -33.9406,
            longitude: 18.57447,
            elevation: 32.0,
            feature_code: "PPLX",
            country_code: "ZA",
            admin1_id: 1085599,
            admin2_id: 8334583,
            admin3_id: 8347437,
            timezone: "Africa/Johannesburg",
            country_id: 953987,
            country: "South Africa",
            admin1: "Western Cape",
            admin2: "City of Cape Town",
            admin3: "City of Cape Town",
          },
        ],
      }),
    };

    const service = new WeatherService(mockClient);
    const cities = await service.getGeoCodingData("Matroos");

    expect(cities).toHaveLength(3);
    expect(cities[0].name).toBe("Matrooster");
    expect(cities[0].latitude).toBe(-25.33218);
  });

  it("Complete Input for getGeoLocationData to be retrieved", async () => {
    const mockClient = {
      getGeoLocationData: jest.fn().mockResolvedValue({
        results: [
          {
            id: 3369157,
            name: "Cape Town",
            latitude: -33.92584,
            longitude: 18.42322,
            elevation: 25.0,
            feature_code: "PPLA",
            country_code: "ZA",
            admin1_id: 1085599,
            admin2_id: 8334583,
            admin3_id: 8347437,
            timezone: "Africa/Johannesburg",
            population: 4710000,
            postcodes: ["7945", "8001"],
            country_id: 953987,
            country: "South Africa",
            admin1: "Western Cape",
            admin2: "City of Cape Town",
            admin3: "City of Cape Town",
          },
          {
            id: 2146145,
            name: "Cape Townshend",
            latitude: -22.2,
            longitude: 150.5,
            elevation: 9999.0,
            feature_code: "CAPE",
            country_code: "AU",
            admin1_id: 2152274,
            timezone: "Australia/Lindeman",
            country_id: 2077456,
            country: "Australia",
            admin1: "Queensland",
          },
          {
            id: 3368972,
            name: "Cape Town International Airport",
            latitude: -33.96481,
            longitude: 18.60167,
            elevation: 46.0,
            feature_code: "AIRP",
            country_code: "ZA",
            admin1_id: 1085599,
            admin2_id: 8334583,
            admin3_id: 8347437,
            timezone: "Africa/Johannesburg",
            country_id: 953987,
            country: "South Africa",
            admin1: "Western Cape",
            admin2: "City of Cape Town",
            admin3: "City of Cape Town",
          },
        ],
      }),
    };

    const service = new WeatherService(mockClient);
    const cities = await service.getGeoCodingData("Cape Town");

    expect(cities[0].name).toBe("Cape Town");
    expect(cities[0].country).toBe("South Africa");
    expect(cities[0].latitude).toBe(-33.92584);
    expect(cities[0].longitude).toBe(18.42322);
  });

  it("No Input for getGeoLocationData ", async () => {
    const mockClient = {
      getGeoLocationData: jest.fn().mockResolvedValue({
        results: null,
      }),
    };
    const service = new WeatherService(mockClient);
    const cities = await service.getGeoCodingData("");

    expect(cities).toBeNull();
  });
  it("Error thrown in getGeoCodingData", async () => {
    const mockClient = {
      getGeoLocationData: jest
        .fn()
        .mockRejectedValue(new Error("Geolocation API failed")),
    };
    const service = new WeatherService(mockClient);

    await expect(
      service.getGeoCodingData({
        latitude: -26.20227,
        longitude: 28.04363,
      })
    ).rejects.toThrow("Geolocation API failed");
  });
  it("Forecast Data over 4 days to be Retrieved for Johannesburg", async () => {
    const mockClient = {
      getWeatherForecastData: jest.fn().mockResolvedValue({
        daily_units: {
          time: "iso8601",
          temperature_2m_min: "°C",
          temperature_2m_max: "°C",
          windspeed_10m_min: "km/h",
          windspeed_10m_max: "km/h",
          sunrise: "iso8601",
          sunset: "iso8601",
          precipitation_sum: "mm",
          weathercode: "wmo code",
        },
        daily: {
          time: ["2025-08-14", "2025-08-15", "2025-08-16", "2025-08-17"],
          temperature_2m_min: [6.9, 8.8, 9.4, 9.5],
          temperature_2m_max: [22.0, 21.3, 20.0, 20.6],
          windspeed_10m_min: [2.3, 2.4, 1.4, 6.6],
          windspeed_10m_max: [12.8, 16.1, 17.9, 20.8],
          sunrise: [
            "2025-08-14T06:37",
            "2025-08-15T06:36",
            "2025-08-16T06:35",
            "2025-08-17T06:34",
          ],
          sunset: [
            "2025-08-14T17:47",
            "2025-08-15T17:48",
            "2025-08-16T17:48",
            "2025-08-17T17:49",
          ],
          precipitation_sum: [0.3, 0.1, 1.5, 0.0],
          weathercode: [80, 3, 80, 3],
        },
      }),
    };

    const service = new WeatherService(mockClient);
    const forecast = await service.getForecastPerCity({
      latitude: -26.20227,
      longitude: 28.04363,
    });

    expect(forecast.weather).toHaveLength(4);
    expect(forecast.latitude).toBe(-26.20227);
    expect(forecast.longitude).toBe(28.04363);
  });
  it("Error thrown in getForecastPerCity", async () => {
    const mockClient = {
      getWeatherForecastData: jest
        .fn()
        .mockRejectedValue(new Error("Forecast API failed")),
    };
    const service = new WeatherService(mockClient);

    await expect(
      service.getForecastPerCity({
        latitude: -26.20227,
        longitude: 28.04363,
      })
    ).rejects.toThrow("Forecast API failed");
  });
});
