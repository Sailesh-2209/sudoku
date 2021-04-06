export const findNeighbours = (rowIndex: number, columnIndex: number) => {
  let neighbourList: number[][] = [];
  if (rowIndex === 0 || rowIndex === 1 || rowIndex === 2) {
    if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          neighbourList.push([i, j]);
        }
      }
      neighbourList = neighbourList.filter((item) => {
        if (item[0] === rowIndex && item[1] === columnIndex) {
          return false;
        } else {
          return true;
        }
      });
    } else if (columnIndex === 3 || columnIndex === 4 || columnIndex === 5) {
      for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++) {
          neighbourList.push([i, j]);
        }
      }
      neighbourList = neighbourList.filter((item) => {
        if (item[0] === rowIndex && item[1] === columnIndex) {
          return false;
        } else {
          return true;
        }
      });
    } else if (columnIndex === 6 || columnIndex === 7 || columnIndex === 8) {
      for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++) {
          neighbourList.push([i, j]);
        }
      }
      neighbourList = neighbourList.filter((item) => {
        if (item[0] === rowIndex && item[1] === columnIndex) {
          return false;
        } else {
          return true;
        }
      });
    }
  } else if (rowIndex === 3 || rowIndex === 4 || rowIndex === 5) {
    if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
      for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          neighbourList.push([i, j]);
        }
      }
      neighbourList = neighbourList.filter((item) => {
        if (item[0] === rowIndex && item[1] === columnIndex) {
          return false;
        } else {
          return true;
        }
      });
    } else if (columnIndex === 3 || columnIndex === 4 || columnIndex === 5) {
      for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 6; j++) {
          neighbourList.push([i, j]);
        }
      }
      neighbourList = neighbourList.filter((item) => {
        if (item[0] === rowIndex && item[1] === columnIndex) {
          return false;
        } else {
          return true;
        }
      });
    } else if (columnIndex === 6 || columnIndex === 7 || columnIndex === 8) {
      for (let i = 3; i < 6; i++) {
        for (let j = 6; j < 9; j++) {
          neighbourList.push([i, j]);
        }
      }
      neighbourList = neighbourList.filter((item) => {
        if (item[0] === rowIndex && item[1] === columnIndex) {
          return false;
        } else {
          return true;
        }
      });
    }
  } else if (rowIndex === 6 || rowIndex === 7 || rowIndex === 8) {
    if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
      for (let i = 6; i < 9; i++) {
        for (let j = 0; j < 3; j++) {
          neighbourList.push([i, j]);
        }
      }
      neighbourList = neighbourList.filter((item) => {
        if (item[0] === rowIndex && item[1] === columnIndex) {
          return false;
        } else {
          return true;
        }
      });
    } else if (columnIndex === 3 || columnIndex === 4 || columnIndex === 5) {
      for (let i = 6; i < 9; i++) {
        for (let j = 3; j < 6; j++) {
          neighbourList.push([i, j]);
        }
      }
      neighbourList = neighbourList.filter((item) => {
        if (item[0] === rowIndex && item[1] === columnIndex) {
          return false;
        } else {
          return true;
        }
      });
    } else if (columnIndex === 6 || columnIndex === 7 || columnIndex === 8) {
      for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++) {
          neighbourList.push([i, j]);
        }
      }
      neighbourList = neighbourList.filter((item) => {
        if (item[0] === rowIndex && item[1] === columnIndex) {
          return false;
        } else {
          return true;
        }
      });
    }
  }

  return neighbourList;
};
