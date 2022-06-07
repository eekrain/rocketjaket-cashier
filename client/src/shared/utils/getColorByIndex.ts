export const getColorByIndex = (index: number) => {
  if (index < 10) return darkColors[index];
  else {
    const color = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];

    return (opacity = 1) =>
      `rgba(${color[0]},${color[1]},${color[2]},${opacity})`;
  }
};
const darkColors = [
  (opacity = 1) => `rgba(31, 41, 55, ${opacity})`,
  (opacity = 1) => `rgba(220, 38, 38, ${opacity})`,
  (opacity = 1) => `rgba(20, 83, 45, ${opacity})`,
  (opacity = 1) => `rgba(6, 95, 70, ${opacity})`,
  (opacity = 1) => `rgba(55, 48, 163, ${opacity})`,
  (opacity = 1) => `rgba(159, 18, 57, ${opacity})`,
  (opacity = 1) => `rgba(127, 29, 29, ${opacity})`,
  (opacity = 1) => `rgba(194, 65, 12, ${opacity})`,
  (opacity = 1) => `rgba(17, 94, 89, ${opacity})`,
  (opacity = 1) => `rgba(12, 74, 110, ${opacity})`,
];
