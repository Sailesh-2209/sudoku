import React from "react";
import { Body } from "../components";
import { HeadingContainer } from "./HeadingContainer";
import { BoardContainer } from "./BoardContainer";

export const BodyContainer: React.FC = () => {
  return (
    <Body>
      <HeadingContainer />
      <BoardContainer />
    </Body>
  );
};
