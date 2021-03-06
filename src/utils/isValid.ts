import { findNeighbours } from "./findNeighbours";

export const isValid: (
  rowIndex: number,
  columnIndex: number,
  number: number,
  array: number[][]
) => boolean = (rowIndex, columnIndex, number, array) => {
  // find the square and check if number exists in the current square
  let neighbours: number[][] = findNeighbours(rowIndex, columnIndex);
  for (let i = 0; i < 8; i++) {
    let item = neighbours[i];
    if (array[item[0]][item[1]] === number) {
      return false;
    }
  }
  //   neighbours.forEach((item) => {
  //     console.log("number: ", number);
  //     console.log(`array[${item[0]}][${item[1]}]`, array[item[0]][item[1]]);
  //     if (array[item[0]][item[1]] === number) {
  //       return false;
  // }
  //   });

  // check if the number is present in the current column
  for (let i = 0; i < 9; i++) {
    if (array[rowIndex][i] === number) {
      return false;
    }
  }

  // check if the number is present in the current row
  for (let i = 0; i < 9; i++) {
    if (array[i][columnIndex] === number) {
      return false;
    }
  }

  // if number is not present in the row, column or square return zero
  return true;
};
