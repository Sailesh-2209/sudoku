import React, { useState, useEffect } from "react";
import { Board } from "../components";
import { Boards } from "../constants/boards";

export const BoardContainer: React.FC<{
  boardArray: React.ComponentState;
  setBoardArray: React.ComponentState;
  setShowKeypad: React.ComponentState;
  showKeypad: React.ComponentState;
  keypadState: React.ComponentState;
  setKeypadState: React.ComponentState;
  clicked: React.ComponentState;
  currentBoardNumber: React.ComponentState;
}> = ({
  boardArray,
  setBoardArray,
  setShowKeypad,
  keypadState,
  showKeypad,
  setKeypadState,
  clicked,
  currentBoardNumber,
}) => {
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [activeColIndex, setActiveColIndex] = useState(0);

  const clickHandler: (
    e: React.SyntheticEvent,
    outerIndex: number,
    innerIndex: number
  ) => void = (e, outerIndex, innerIndex) => {
    if (Boards[currentBoardNumber][0][outerIndex][innerIndex] === 0) {
      setShowKeypad(true);
      setActiveRowIndex(outerIndex);
      setActiveColIndex(innerIndex);
    } else {
      console.log(Boards[currentBoardNumber][0][outerIndex][innerIndex]);
    }
  };

  useEffect(() => {
    if (setKeypadState !== 0) {
      setBoardArray((boardArray: number[][]) => {
        let copy: number[][] = boardArray;
        copy[activeRowIndex][activeColIndex] = keypadState;
        return copy;
      });
    }
    return () => {
      setShowKeypad(false);
    };
  }, [keypadState, clicked]);

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
                      onClick={(e) => clickHandler(e, outerIndex, innerIndex)}
                    >
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[outerIndex][innerIndex]}
                      </p>
                    </Board.LeftBlock>
                  );
                } else if (
                  innerIndex === 0 &&
                  outerIndex !== 0 &&
                  outerIndex !== 8
                ) {
                  return (
                    <Board.TopBlock
                      key={`${innerIndex}`}
                      onClick={(e) => clickHandler(e, outerIndex, innerIndex)}
                    >
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[outerIndex][innerIndex]}
                      </p>
                    </Board.TopBlock>
                  );
                } else if (
                  innerIndex === 8 &&
                  outerIndex !== 0 &&
                  outerIndex !== 8
                ) {
                  return (
                    <Board.BottomBlock
                      key={`${innerIndex}`}
                      onClick={(e) => clickHandler(e, outerIndex, innerIndex)}
                    >
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[outerIndex][innerIndex]}
                      </p>
                    </Board.BottomBlock>
                  );
                } else if (outerIndex === 8) {
                  return (
                    <Board.RightBlock
                      key={`${innerIndex}`}
                      onClick={(e) => clickHandler(e, outerIndex, innerIndex)}
                    >
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[outerIndex][innerIndex]}
                      </p>
                    </Board.RightBlock>
                  );
                } else {
                  return (
                    <Board.MiddleBlock
                      key={`${innerIndex}`}
                      onClick={(e) => clickHandler(e, outerIndex, innerIndex)}
                    >
                      <p>
                        {boardArray[outerIndex][innerIndex] === 0
                          ? null
                          : boardArray[outerIndex][innerIndex]}
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
