export const transform = (data) => {
  const transformed = [];

  const keys = Object.keys(data).filter((key) => key !== "time");

  return data.time.map((date, index) => {
    const weather = {};
    keys.forEach((key) => {
      weather[key] = data[key][index];
    });
    return { date, weather };
  });
};
