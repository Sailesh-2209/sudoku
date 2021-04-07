import GenerateRandomNumber from "./ranNumGen";
import { isValid } from "./isValid";

export const generateNewBoard: () => number[][] = () => {
  // initialising new empty two dimensional array

  let newBoardArray = new Array(9).fill(0);
  for (let i = 0; i < 9; i++) {
    newBoardArray[i] = new Array(9).fill(0);
  }

  // filling array
  const fill = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let newNum = GenerateRandomNumber(0, 9);
        if (isValid(i, j, newNum, newBoardArray)) {
          newBoardArray[i][j] = newNum;
        } else {
          newBoardArray[i][j] = 0;
        }
      }
    }
    newBoardArray.forEach((item) => {
      if (item.includes(0)) {
        fill();
      }
    });
  };
  return newBoardArray;
};
