import React, { useContext } from "react";
import { Buttons } from "../components";
import { generateNewBoard } from "../utils/newBoardGen";
import { BoardContext } from "../context/boardContext";

export const ButtonContainer: React.FC = () => {
  // @ts-ignore
  const { setBoardArray } = useContext(BoardContext);

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
