export const GenerateRandomNumber: () => number = () => {
  let num: number = Math.floor(Math.random() * 9 + 1);
  return num;
};
