export const scoreActivities = (
  minTemp,
  maxTemp,
  minWind,
  maxWind,
  precipitationSum
) => {
  const activities = {};
  const avgWind = minWind + maxWind / 2;

  //SKiii Scoring
  const skiingTempOverlap = maxTemp >= -6 && minTemp <= 1;
  const skiingWind = avgWind <= 30;
  const skiingSnow = precipitationSum >= 0 && precipitationSum <= 10;

  if (skiingTempOverlap && skiingWind && skiingSnow) activities.skiing = 2;
  else if ((skiingTempOverlap || skiingWind) && skiingSnow)
    activities.skiing = 1;
  else activities.skiing = 0;

  //Surfing Scoring
  const surfingTemp = minTemp >= 18 && maxTemp <= 28;
  const surfingWind = avgWind <= 15;
  const surfingRain = precipitationSum < 2;

  if (surfingTemp && surfingWind && surfingRain) activities.surfing = 2;
  else if ((surfingTemp || surfingWind) && surfingRain) activities.surfing = 1;
  else activities.surfing = 0;

  //Outdoor Scoring
  const outdoorTemp = maxTemp >= 15 && minTemp <= 25;
  const outdoorWind = avgWind <= 20;
  const outdoorRain = precipitationSum < 1;

  if (outdoorTemp && outdoorWind && outdoorRain)
    activities.outdoorSightseeing = 2;
  else if ((outdoorTemp || outdoorWind) && outdoorRain)
    activities.outdoorSightseeing = 1;
  else activities.outdoorSightseeing = 0;

  //Indoor Scoring
  const indoorScore =
    outdoorTemp && outdoorWind && outdoorRain
      ? 0
      : avgWind > 20 || precipitationSum >= 1
      ? 2
      : 1;

  activities.indoorSightseeing = indoorScore;
  return activities;
};
