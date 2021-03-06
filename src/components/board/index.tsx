import React from "react";
import {
  Container,
  MiddleBlock,
  TopBlock,
  RightBlock,
  BottomBlock,
  LeftBlock,
  RowContainer,
  ColumnContainer,
  Number,
} from "./styles/board";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  restProps?: object;
  onClick?: React.MouseEventHandler;
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
  theme,
  ...restProps
}: {
  children: JSX.Element | JSX.Element[] | string;
  theme: string;
  onClick?: React.MouseEventHandler;
  restProps?: object;
}) {
  return <MiddleBlock {...restProps}>{children}</MiddleBlock>;
};

Board.ColumnContainer = function BoardColumnContainer({
  children,
  ...restProps
}: Props) {
  return <ColumnContainer {...restProps}>{children}</ColumnContainer>;
};

Board.RowContainer = function BoardRowContainer({
  children,
  ...restProps
}: Props) {
  return <RowContainer {...restProps}>{children}</RowContainer>;
};

Board.NumberContainer = function BoardNumberContainer({
  children,
  color,
  ...restProps
}: {
  children: JSX.Element | JSX.Element[] | string;
  restProps?: object;
  color?: string;
}) {
  return <Number {...restProps}>{children}</Number>;
};

export default Board;
