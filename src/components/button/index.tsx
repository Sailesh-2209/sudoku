import React from "react";
import { Container, Button } from "./styles/button";

type Props = {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >;
  restProps?: object;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Buttons = ({ children, ...restProps }: Props) => {
  return <Container {...restProps}>{children}</Container>;
};

Buttons.Button = function ButtonsButton({ children, ...restProps }: Props) {
  return <Button {...restProps}>{children}</Button>;
};

export default Buttons;
