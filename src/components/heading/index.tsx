import React from "react";
import { IconContext } from "react-icons";
import { BsDot } from "react-icons/bs";
import {
  Container,
  Text,
  ButtonContainer,
  IconContainer,
  ItemContainer,
  InfoContainer,
  InfoHeading,
  TextSmall,
} from "./styles/heading";

interface Props {
  children: JSX.Element[] | string | JSX.Element;
  restProps?: object;
}

const Heading = ({ children, ...restProps }: Props) => {
  return <Container {...restProps}>{children}</Container>;
};

Heading.Text = function HeadingText({
  children,
  color,
  ...restProps
}: {
  children: JSX.Element | JSX.Element[] | string;
  color?: string;
  restProps?: object;
}) {
  return <Text {...restProps}>{children}</Text>;
};

Heading.ButtonContainer = function HeadingButtonContainer({
  children,
  ...restProps
}: Props) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

Heading.IconContainer = function HeadingIconContainer({
  children,
  ...restProps
}: {
  children: JSX.Element | JSX.Element | string;
  restProps?: object;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
}) {
  return <IconContainer {...restProps}>{children}</IconContainer>;
};

Heading.InfoContainer = function HeadingInfoContainer({
  children,
  ...restProps
}: Props) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

Heading.InfoHeading = function HeadingInfoHeading({
  children,
  ...restProps
}: Props) {
  return <InfoHeading {...restProps}>{children}</InfoHeading>;
};

Heading.TextSmall = function HeadingTextSmall({
  children,
  ...restProps
}: Props) {
  return (
    <ItemContainer>
      <IconContext.Provider value={{ color: "white", size: "35" }}>
        <BsDot />
      </IconContext.Provider>
      <TextSmall {...restProps}>{children}</TextSmall>
    </ItemContainer>
  );
};

export default Heading;
