import {
  isSkiiDay,
  isSurfDay,
  isOutdoorDay,
  isIndoorDay,
} from "../utils/rankingActivities.js";

export class ActivityRankingService {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  scoreSkiing(weatherData) {
    const scoring = weatherData.map((day, index) => {
      const {
        temperature_2m_min,
        temperature_2m_max,
        windspeed_10m_min,
        windspeed_10m_max,
        precipitation_sum,
      } = day;
      const result = isSkiiDay(
        temperature_2m_min,
        temperature_2m_max,
        windspeed_10m_min,
        windspeed_10m_max,
        precipitation_sum
      );
      return { date: day.date, reason: result.reason, score: result.score };
    });
    return scoring;
  }
  scoreSurfing() {}

  scoreOutdoor() {}

  scoreIndoor() {}
  async rankActivities(input, weatherData) {
    let results = [];
    const skiing = this.scoreSkiing(weatherData);
    // const surfing = this.scoreSurfing(weatherData);
    // const outdoorSightSee = this.scoreOutdoor(weatherData);
    // const indoorSightSee = this.scoreIndoor(weatherData);

    results.push({ activity: "SKIING", details: skiing });

    return results;
  }
}
