import React from "react";
import { Buttons } from "../components";
import { GenerateRandomNumber } from "../utils";
import { Boards } from "../constants/boards";

export const ButtonContainer: React.FC<{
  setBoardArray: React.ComponentState;
  solution: React.ComponentState;
  setSolution: React.ComponentState;
  setCurrentBoardNumber: React.ComponentState;
  setSolved: React.ComponentState;
}> = ({
  setBoardArray,
  solution,
  setSolution,
  setCurrentBoardNumber,
  setSolved,
}) => {
  const handleNewBoard = () => {
    let boardNumber: number = GenerateRandomNumber(0, Boards.length);
    let newBoard = Boards[boardNumber][0];
    let newSolution = Boards[boardNumber][1];
    setBoardArray(JSON.parse(JSON.stringify(newBoard)));
    setSolution(newSolution);
    setCurrentBoardNumber(boardNumber);
    setSolved(false);
  };
  return (
    <Buttons>
      <Buttons.Button onClick={() => handleNewBoard()}>
        New Board
      </Buttons.Button>
      <Buttons.Button
        onClick={() => {
          setBoardArray(solution);
          setSolved(true);
        }}
      >
        Solve
      </Buttons.Button>
    </Buttons>
  );
};
