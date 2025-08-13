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

  if (goodTemp && goodWind && goodSnow) return "Good to Skii";

  if (okayTemp && okayWind && moderateRain) return "Okay to Skii";
  return "Bad to Skii";
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

  if (goodTemp && goodWind && lowRain) return "Good to Surf";
  if (okayTemp && okayWind && moderateRain) return "Okay to Surf";
  return "Bad to Surf";
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

  if (goodTemp && goodWind && lowRain) return "Good for Outdoor Sightseeing";
  if (okayTemp && okayWind && moderateRain)
    return "Okay for Outdoor Sightseeing";

  return "Bad for Outdoor Sightseeing";
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
    return "Good for Indoor Sightseeing";
  if (okayWind && lowRain) return "Okay for indoor Sightseeing";

  return "Bad for Indoor Sightseeing";
};
