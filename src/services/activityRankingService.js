export class ActivityRankingService {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  normalize(value, min = 0, max = 1) {
    return Math.max(0, Math.min(1, v));
  }

  scoreSkiing() {}
  scoreSurfing() {}

  scoreOutdoor() {}

  scoreIndoor() {}
  async rankActivities() {}
}
