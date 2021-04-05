import React, { useState } from "react";
import { Board } from "../components";

export const BoardContainer: React.FC = () => {
  let initialArray: number[][] = new Array(9).fill(0);
  for (let i = 0; i < 9; i++) {
    initialArray[i] = new Array(9).fill(0);
  }

  const BOARD_SIZE: number = 9;
  const [boardArray, setBoardArray] = useState(initialArray);

  return (
    <Board>
      <Board.RowContainer>
        {boardArray.map((rowArray: number[], outerIndex: number) => {
          return (
            <Board.ColumnContainer key={`${outerIndex.toString()}`}>
              {rowArray.map((item: number, innerIndex: number) => {
                if (outerIndex === 0) {
                  return (
                    <Board.LeftBlock key={`${innerIndex}`}>
                      <p>0</p>
                    </Board.LeftBlock>
                  );
                } else if (
                  innerIndex === 0 &&
                  outerIndex !== 0 &&
                  outerIndex !== 8
                ) {
                  return (
                    <Board.TopBlock key={`${innerIndex}`}>
                      <p>0</p>
                    </Board.TopBlock>
                  );
                } else if (
                  innerIndex === 8 &&
                  outerIndex !== 0 &&
                  outerIndex !== 8
                ) {
                  return (
                    <Board.BottomBlock key={`${innerIndex}`}>
                      <p>0</p>
                    </Board.BottomBlock>
                  );
                } else if (outerIndex === 8) {
                  return (
                    <Board.RightBlock key={`${innerIndex}`}>
                      <p>0</p>
                    </Board.RightBlock>
                  );
                } else {
                  return (
                    <Board.MiddleBlock key={`${innerIndex}`}>
                      <p>0</p>
                    </Board.MiddleBlock>
                  );
                }
              })}
            </Board.ColumnContainer>
          );
        })}
      </Board.RowContainer>
    </Board>
  );
};
