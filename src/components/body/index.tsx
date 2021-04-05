import React from "react";
import { Container, Heading, HeadingText } from "./styles/body";

type props = {
  children: JSX.Element | JSX.Element[] | string;
  restProps?: object;
  onClick?: React.MouseEventHandler;
};

const Body = ({ children, ...restProps }: props) => {
  return <Container {...restProps}>{children}</Container>;
};

Body.HeadingContainer = function BodyHeadingContainer({
  children,
  ...restProps
}: props) {
  return <Heading {...restProps}>{children}</Heading>;
};

Body.HeadingText = function BodyHeadingText({ children, ...restProps }: props) {
  return <HeadingText {...restProps}>{children}</HeadingText>;
};

export default Body;
