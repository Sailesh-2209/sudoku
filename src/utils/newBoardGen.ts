import { GenerateRandomNumber } from "./ranNumGen";
import { isValid } from "./isValid";

export const generateNewBoard: () => number[][] = () => {
  // initialising new empty two dimensional array

  let newBoardArray = new Array(9).fill(0);
  for (let i = 0; i < 9; i++) {
    newBoardArray[i] = new Array(9).fill(0);
  }

  // filling array
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let count = 0;
      while (count < 9) {
        console.log("hello");
        count += 1;
        let newNum: number = GenerateRandomNumber();
        if (isValid(i, j, newNum, newBoardArray)) {
          newBoardArray[i][j] = newNum;
          break;
        }
      }
    }
  }
  return newBoardArray;
};
