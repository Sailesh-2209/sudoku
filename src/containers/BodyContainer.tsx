import React, { useState } from "react";
import { Body } from "../components";
import { HeadingContainer } from "./HeadingContainer";
import { BoardContainer } from "./BoardContainer";
import { ButtonContainer } from "./ButtonContainer";
import { generateNewBoard } from "../utils/newBoardGen";

let initialBoard = generateNewBoard();

export const BodyContainer: React.FC = () => {
  const [boardArray, setBoardArray] = useState(initialBoard);

  return (
    <Body>
      <HeadingContainer />
      <BoardContainer boardArray={boardArray} />
      <ButtonContainer setBoardArray={setBoardArray} />
    </Body>
  );
};
