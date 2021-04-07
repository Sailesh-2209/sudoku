import React, { useState } from "react";
import { Body } from "../components";
import { HeadingContainer } from "./HeadingContainer";
import { BoardContainer } from "./BoardContainer";
import { ButtonContainer } from "./ButtonContainer";
import { KeypadContainer } from "./KeypadContainer";
import { GenerateRandomNumber } from "../utils";
import { Boards } from "../constants/boards";

let boardNumber: number = GenerateRandomNumber(0, Boards.length);
let initialBoard = Boards[boardNumber][0];
let solutionBoard = Boards[boardNumber][1];

export const BodyContainer: React.FC = () => {
  const [boardArray, setBoardArray] = useState(initialBoard);
  const [solution, setSolution] = useState(solutionBoard);
  //@ts-ignore

  return (
    <Body>
      <HeadingContainer />
      <BoardContainer boardArray={boardArray} />
      <KeypadContainer />
      <ButtonContainer
        setBoardArray={setBoardArray}
        solution={solution}
        setSolution={setSolution}
      />
    </Body>
  );
};
