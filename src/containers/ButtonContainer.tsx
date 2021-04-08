import React from "react";
import { Buttons } from "../components";
import { GenerateRandomNumber } from "../utils";
import { Boards } from "../constants/boards";

export const ButtonContainer: React.FC<{
  setBoardArray: React.ComponentState;
  unsolvedBoard: number[][];
  solution: React.ComponentState;
  setSolution: React.ComponentState;
}> = ({ setBoardArray, unsolvedBoard, solution, setSolution }) => {
  const handleNewBoard = () => {
    let boardNumber: number = GenerateRandomNumber(0, Boards.length);
    let newBoard = Boards[boardNumber][0];
    let newSolution = Boards[boardNumber][1];
    setBoardArray(newBoard);
    setSolution(newSolution);
    unsolvedBoard = newBoard;
  };

  return (
    <Buttons>
      <Buttons.Button onClick={() => handleNewBoard()}>
        New Board
      </Buttons.Button>
      <Buttons.Button onClick={() => setBoardArray(solution)}>
        Solve
      </Buttons.Button>
    </Buttons>
  );
};
