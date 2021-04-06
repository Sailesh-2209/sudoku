import React, { useState } from "react";
import { Body } from "../components";
import { HeadingContainer } from "./HeadingContainer";
import { BoardContainer } from "./BoardContainer";
import { ButtonContainer } from "./ButtonContainer";
import { BoardContext } from "../context/boardContext";
import { generateNewBoard } from "../utils/newBoardGen";

export const BodyContainer: React.FC = () => {
  let initialBoard = generateNewBoard();
  const [boardArray, setBoardArray] = useState(initialBoard);

  return (
    <Body>
      <BoardContext.Provider
        value={{ boardArray: boardArray, setBoardArray: setBoardArray }}
      >
        <HeadingContainer />
        <BoardContainer />
        <ButtonContainer />
      </BoardContext.Provider>
    </Body>
  );
};
