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
      let checkList: number[] = [];
      while (true) {
        let newNum: number = GenerateRandomNumber();
        if (!checkList.includes(newNum)) {
          checkList.push(newNum);
        }
        if (isValid(i, j, newNum, newBoardArray)) {
          newBoardArray[i][j] = newNum;
          break;
        }
        const test =
          checkList.includes(1) ||
          checkList.includes(2) ||
          checkList.includes(3) ||
          checkList.includes(4) ||
          checkList.includes(5) ||
          checkList.includes(6) ||
          checkList.includes(7) ||
          checkList.includes(8);
        if (test) {
          break;
        }
      }
    }
  }
  return newBoardArray;
};
