export const scoreActivities = (
  minTemp,
  maxTemp,
  minWind,
  maxWind,
  precipitationSum
) => {
  const activities = {};
  const avgWind = (minWind + maxWind) / 2;

  //SKiii Scoring
  const skiingTemp = minTemp <= 1 && maxTemp >= -6;
  const skiingWind = avgWind <= 30;
  const skiingSnow = precipitationSum >= 0 && precipitationSum <= 10;

  if (skiingTemp && skiingWind && skiingSnow) activities.skiing = 2;
  else if ((skiingTemp || skiingWind) && skiingSnow) activities.skiing = 1;
  else activities.skiing = 0;

  //Surfing Scoring
  const surfingTemp = minTemp >= 18 && maxTemp <= 28;
  const surfingWind = avgWind <= 15;
  const surfingRain = precipitationSum < 2;

  if (surfingTemp && surfingWind && surfingRain) activities.surfing = 2;
  else if ((surfingTemp || surfingWind) && surfingRain) activities.surfing = 1;
  else activities.surfing = 0;

  //Outdoor Scoring
  const outdoorTemp = minTemp >= 15 && maxTemp <= 25;
  const outdoorWind = avgWind <= 20;
  const outdoorRain = precipitationSum < 1;

  if (outdoorTemp && outdoorWind && outdoorRain)
    activities.outdoorSightseeing = 2;
  else if ((outdoorTemp || outdoorWind) && outdoorRain)
    activities.outdoorSightseeing = 1;
  else activities.outdoorSightseeing = 0;

  //Indoor Scoring
  if (activities.outdoorSightseeing === 2) {
    activities.indoorSightseeing = 0;
  } else if (avgWind > 20 || precipitationSum >= 1) {
    activities.indoorSightseeing = 2;
  } else {
    activities.indoorSightseeing = 1;
  }

  return activities;
};
