export const isSkiiDay = (
  minTemp,
  maxTemp,
  minWind,
  maxWind,
  precipitationSum
) => {
  const goodTemp = minTemp <= 1 && maxTemp >= -6;
  const goodWind = minWind >= 10 && maxWind <= 35;
  const goodSnow = precipitationSum > 0 && precipitationSum <= 10;

  const okayTemp = minTemp >= -10 && maxTemp <= -6;
  const okayWind = minWind >= 30 && maxWind <= 40;
  const moderateRain = precipitationSum > 10 && precipitationSum < 20;

  if (goodTemp && goodWind && goodSnow)
    return { reason: "Good to Skii", score: 1 };

  if (okayTemp && okayWind && moderateRain)
    return { reason: "Okay to Skii", score: 1 };
  return { reason: "Bad to Skii", score: 0 };
};

export const isSurfDay = (
  minTemp,
  maxTemp,
  minWind,
  maxWind,
  precipitationSum
) => {
  const goodTemp = minTemp >= 18 && maxTemp <= 28;
  const goodWind = minWind >= 0 && maxWind <= 15;
  const lowRain = precipitationSum >= 0 && precipitationSum < 2;

  const okayTemp = minTemp >= 15 && maxTemp <= 30;
  const okayWind = minWind > 15 && maxWind <= 25;
  const moderateRain = precipitationSum > 3 && precipitationSum < 5;

  if (goodTemp && goodWind && lowRain)
    return { reason: "Good to Surf", score: 1 };
  if (okayTemp && okayWind && moderateRain)
    return { reason: "Okay to Surf", score: 1 };
  return { reason: "Bad to Surf", score: 0 };
};

export const isOutdoorDay = (
  minTemp,
  maxTemp,
  minWind,
  maxWind,
  precipitationSum
) => {
  const goodTemp = minTemp >= 15 && maxTemp <= 25;
  const goodWind = minWind >= 0 && maxWind <= 20;
  const lowRain = precipitationSum >= 0 && precipitationSum < 1;

  const okayTemp = minTemp >= 10 && maxTemp <= 30;
  const okayWind = minWind > 20 && maxWind <= 30;
  const moderateRain = precipitationSum > 1 && precipitationSum < 3;

  if (goodTemp && goodWind && lowRain)
    return { reason: "Good for Outdoor Sightseeing", score: 1 };
  if (okayTemp && okayWind && moderateRain)
    return { reason: "Okay for Outdoor Sightseeing", score: 1 };

  return { reason: "Bad for Outdoor Sightseeing", score: 0 };
};

export const isIndoorDay = (
  minTemp,
  maxTemp,
  minWind,
  maxWind,
  precipitationSum
) => {
  const indoorTemp = minTemp <= 5 && maxTemp >= 30;
  const indoorWind = maxWind > 30;
  const heavyRain = precipitationSum > 3;

  const okayWind = maxWind < 30;
  const lowRain = precipitationSum < 3;

  if (indoorTemp && indoorWind && heavyRain)
    return { reason: "Good for Indoor Sightseeing", score: 1 };
  if (okayWind && lowRain)
    return { reason: "Okay for indoor Sightseeing", score: 1 };

  return { reason: "Bad for Indoor Sightseeing", score: 0 };
};
