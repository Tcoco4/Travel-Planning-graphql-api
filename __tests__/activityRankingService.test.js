import { ActivityRankingService } from "../src/services/activityRankingService.js";

describe("Activity Ranking Service", () => {
  const mockWeatherService = {
    getForecast: jest.fn(),
  };
  const service = new ActivityRankingService(mockWeatherService);

  it("Activity Ranking for Hermanus", async () => {
    const mockResponse = jest.fn().mockResolvedValue({
      weather: [
        {
          date: "2025-08-14",
          weather: {
            temperature_2m_min: 13.3,
            temperature_2m_max: 14.6,
            windspeed_10m_min: 0.4,
            windspeed_10m_max: 7.7,
            sunrise: "2025-08-14T07:22",
            sunset: "2025-08-14T18:11",
            precipitation_sum: 0,
            weathercode: 3,
          },
        },
        {
          date: "2025-08-15",
          weather: {
            temperature_2m_min: 13.9,
            temperature_2m_max: 15.5,
            windspeed_10m_min: 3.9,
            windspeed_10m_max: 9.4,
            sunrise: "2025-08-15T07:21",
            sunset: "2025-08-15T18:12",
            precipitation_sum: 0,
            weathercode: 3,
          },
        },
        {
          date: "2025-08-16",
          weather: {
            temperature_2m_min: 15.1,
            temperature_2m_max: 16.4,
            windspeed_10m_min: 6.2,
            windspeed_10m_max: 21.3,
            sunrise: "2025-08-16T07:20",
            sunset: "2025-08-16T18:12",
            precipitation_sum: 0,
            weathercode: 3,
          },
        },
        {
          date: "2025-08-17",
          weather: {
            temperature_2m_min: 14.8,
            temperature_2m_max: 16.1,
            windspeed_10m_min: 2.7,
            windspeed_10m_max: 10.7,
            sunrise: "2025-08-17T07:19",
            sunset: "2025-08-17T18:13",
            precipitation_sum: 0,
            weathercode: 2,
          },
        },
      ],
    });

    const weather = {
      weather: [
        {
          date: "2025-08-14",
          weather: {
            temperature_2m_min: 13.3,
            temperature_2m_max: 14.6,
            windspeed_10m_min: 0.4,
            windspeed_10m_max: 7.7,
            sunrise: "2025-08-14T07:22",
            sunset: "2025-08-14T18:11",
            precipitation_sum: 0,
            weathercode: 3,
          },
        },
        {
          date: "2025-08-15",
          weather: {
            temperature_2m_min: 13.9,
            temperature_2m_max: 15.5,
            windspeed_10m_min: 3.9,
            windspeed_10m_max: 9.4,
            sunrise: "2025-08-15T07:21",
            sunset: "2025-08-15T18:12",
            precipitation_sum: 0,
            weathercode: 3,
          },
        },
        {
          date: "2025-08-16",
          weather: {
            temperature_2m_min: 15.1,
            temperature_2m_max: 16.4,
            windspeed_10m_min: 6.2,
            windspeed_10m_max: 21.3,
            sunrise: "2025-08-16T07:20",
            sunset: "2025-08-16T18:12",
            precipitation_sum: 0,
            weathercode: 3,
          },
        },
        {
          date: "2025-08-17",
          weather: {
            temperature_2m_min: 14.8,
            temperature_2m_max: 16.1,
            windspeed_10m_min: 2.7,
            windspeed_10m_max: 10.7,
            sunrise: "2025-08-17T07:19",
            sunset: "2025-08-17T18:13",
            precipitation_sum: 0,
            weathercode: 2,
          },
        },
      ],
    };
    const ranking = await service.rankActivities(
      {
        latitude: -34.4187,
        longitude: 19.23446,
      },
      weather
    );

    expect(ranking.latitude).toEqual(-34.4187);
    expect(ranking.longitude).toEqual(19.23446);
    expect(ranking.activityRanking[0].skiing).toBeDefined();
    expect(ranking.activityRanking[0].surfing).toBeDefined();
    expect(ranking.activityRanking[0].indoorSightseeing).toBeDefined();
    expect(ranking.activityRanking[0].outdoorSightseeing).toBeDefined();
  });
});
