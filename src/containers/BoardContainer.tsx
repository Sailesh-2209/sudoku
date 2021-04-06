import React from "react";
import { Board } from "../components";

export const BoardContainer: React.FC<{ boardArray: React.ComponentState }> = ({
  boardArray,
}) => {
  console.log("boardContainer", boardArray);
  return (
    <Board>
      <Board.RowContainer>
        {boardArray.map((rowArray: number[], outerIndex: number) => {
          return (
            <Board.ColumnContainer key={`${outerIndex.toString()}`}>
              {rowArray.map((item: number, innerIndex: number) => {
                if (outerIndex === 0) {
                  return (
                    <Board.LeftBlock
                      key={`${innerIndex}`}
                      onClick={(e) => console.log(e.target)}
                    >
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[innerIndex][outerIndex]}
                      </p>
                    </Board.LeftBlock>
                  );
                } else if (
                  innerIndex === 0 &&
                  outerIndex !== 0 &&
                  outerIndex !== 8
                ) {
                  return (
                    <Board.TopBlock key={`${innerIndex}`}>
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[innerIndex][outerIndex]}
                      </p>
                    </Board.TopBlock>
                  );
                } else if (
                  innerIndex === 8 &&
                  outerIndex !== 0 &&
                  outerIndex !== 8
                ) {
                  return (
                    <Board.BottomBlock key={`${innerIndex}`}>
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[innerIndex][outerIndex]}
                      </p>
                    </Board.BottomBlock>
                  );
                } else if (outerIndex === 8) {
                  return (
                    <Board.RightBlock key={`${innerIndex}`}>
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[innerIndex][outerIndex]}
                      </p>
                    </Board.RightBlock>
                  );
                } else {
                  return (
                    <Board.MiddleBlock key={`${innerIndex}`}>
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[innerIndex][outerIndex]}
                      </p>
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
