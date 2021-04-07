const GenerateRandomNumber: (max: number, min: number) => number = (
  max,
  min
) => {
  let num: number = Math.floor(Math.random() * (max - min) + min);
  return num;
};

export default GenerateRandomNumber;
