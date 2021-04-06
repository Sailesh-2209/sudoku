export const GenerateRandomNumber: () => number = () => {
  let num: number = Math.floor(Math.random() * 10);
  return num;
};
