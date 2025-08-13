import { scoreActivities } from "../utils/rankingActivities.js";

export class ActivityRankingService {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  scoring(weatherData) {
    return weatherData.map((day, index) => {
      const {
        temperature_2m_min,
        temperature_2m_max,
        windspeed_10m_min,
        windspeed_10m_max,
        precipitation_sum,
      } = day;

      const result = scoreActivities(
        temperature_2m_min,
        temperature_2m_max,
        windspeed_10m_min,
        windspeed_10m_max,
        precipitation_sum
      );

      const { skiing, surfing, outdoorSightseeing, indoorSightseeing } = result;
      return {
        date: day.date,
        skiing,
        surfing,
        outdoorSightseeing,
        indoorSightseeing,
      };
    });
  }
  async rankActivities(input, weatherData) {
    const activityRanking = this.scoring(weatherData);

    return {
      latitude: input.latitude,
      longitude: input.longitude,
      activityRanking,
    };
  }
}
