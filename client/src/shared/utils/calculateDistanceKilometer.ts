interface ICalculateDistanceProps {
  firstCoord: {
    lat: number;
    long: number;
  };
  secondCoord: {
    lat: number;
    long: number;
  };
  earthDiameterKilometer?: number;
  placeholder?: {
    z: number;
    i: number;
  };
}

export const calculateDistanceKilometer = ({
  firstCoord,
  secondCoord,
  earthDiameterKilometer = 2 * 6378.137,
  placeholder = {
    z: Math.PI / 360,
    i: 0,
  },
}: ICalculateDistanceProps) => {
  return (
    earthDiameterKilometer *
    Math.atan2(
      Math.sqrt(
        (placeholder.i =
          Math.pow(
            Math.sin((secondCoord.lat - firstCoord.lat) * placeholder.z),
            2,
          ) +
          Math.cos(firstCoord.lat * placeholder.z * 2) *
            Math.cos(secondCoord.lat * placeholder.z * 2) *
            Math.pow(
              Math.sin((secondCoord.long - firstCoord.long) * placeholder.z),
              2,
            )),
      ),
      Math.sqrt(1 - placeholder.i),
    )
  );
};
