import WeatherService from "../src/services/weatherService.js";

describe("Weather Service Tests", () => {
  it("Partial Input for suggestCities endpoint", async () => {
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
});
