import React, { useState } from "react";
import { Body } from "../components";
import { HeadingContainer } from "./HeadingContainer";
import { BoardContainer } from "./BoardContainer";
import { ButtonContainer } from "./ButtonContainer";
import { GenerateRandomNumber } from "../utils";
import { Boards } from "../constants/boards";

let boardNumber: number = GenerateRandomNumber(0, Boards.length);
let initialBoard = Boards[boardNumber];

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
