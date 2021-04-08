import React from "react";
import { Container, Row, Number } from "./styles/keypad";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  restProps?: object;
};

const Keypad = ({ children, ...restProps }: Props) => {
  return <Container {...restProps}>{children}</Container>;
};

Keypad.Row = function KeypadRow({ children, ...restProps }: Props) {
  return <Row {...restProps}>{children}</Row>;
};

Keypad.Number = function KeypadNumber({
  children,
  ...restProps
}: {
  children: JSX.Element | JSX.Element[] | string;
  restProps?: object;
  onClick?: React.MouseEventHandler;
}) {
  return <Number {...restProps}>{children}</Number>;
};

export default Keypad;
