export const transform = (data) => {
  const transformed = {};

  const keys = Object.keys(data).filter((key) => key !== "time");

  data.time.forEach((date, index) => {
    transformed[date] = {};
    keys.forEach((key) => {
      transformed[date][key] = daily[key][index];
    });
  });
  return transformed;
};
