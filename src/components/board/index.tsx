import React from "react";
import {
  Container,
  MiddleBlock,
  TopBlock,
  RightBlock,
  BottomBlock,
  LeftBlock,
} from "./styles/board";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  restProps: object;
};

const Board = ({ children, ...restProps }: Props) => {
  return <Container {...restProps}>{children}</Container>;
};

Board.TopBlock = function BoardTopBlock({ children, ...restProps }: Props) {
  return <TopBlock {...restProps}>{children}</TopBlock>;
};

Board.RightBlock = function BoardTopBlock({ children, ...restProps }: Props) {
  return <RightBlock {...restProps}>{children}</RightBlock>;
};

Board.BottomBlock = function BoardTopBlock({ children, ...restProps }: Props) {
  return <BottomBlock {...restProps}>{children}</BottomBlock>;
};

Board.LeftBlock = function BoardTopBlock({ children, ...restProps }: Props) {
  return <LeftBlock {...restProps}>{children}</LeftBlock>;
};

Board.MiddleBlock = function BoardMiddleblock({
  children,
  ...restProps
}: Props) {
  return <MiddleBlock {...restProps}>{children}</MiddleBlock>;
};

export default Board;
