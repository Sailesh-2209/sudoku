import React from "react";
import { Buttons } from "../components";
import { generateNewBoard } from "../utils/newBoardGen";

export const ButtonContainer: React.FC<{
  setBoardArray: React.ComponentState;
}> = ({ setBoardArray }) => {
  // @ts-ignore
  const handleNewBoard = () => {
    let newBoard = generateNewBoard();
    setBoardArray(newBoard);
  };

  return (
    <Buttons>
      <Buttons.Button onClick={() => handleNewBoard()}>
        New Board
      </Buttons.Button>
      <Buttons.Button>Solve</Buttons.Button>
    </Buttons>
  );
};
