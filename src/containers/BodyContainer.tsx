import React from "react";
import { Body } from "../components";
import { HeadingContainer } from "./HeadingContainer";
import { BoardContainer } from "./BoardContainer";
import { ButtonContainer } from "./ButtonContainer";

export const BodyContainer: React.FC = () => {
  return (
    <Body>
      <HeadingContainer />
      <BoardContainer />
      <ButtonContainer />
    </Body>
  );
};
