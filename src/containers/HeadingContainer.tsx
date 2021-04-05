// @ts-ignore
import React, { useState } from "react";
import { Heading } from "../components";
import { /* BiSun, */ BiMoon } from "react-icons/bi";
import {
  /* AiOutlineQuestion, */ AiOutlineQuestionCircle,
} from "react-icons/ai";
import { IconContext } from "react-icons";

export const HeadingContainer: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = (clicked: boolean) => {
    setClicked((clicked) => !clicked);
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 3600);
    }
  };

  return (
    <Heading>
      <Heading.Text>Sudoku</Heading.Text>
      <Heading.ButtonContainer>
        <IconContext.Provider value={{ color: "white", size: "32" }}>
          <Heading.IconContainer>
            <BiMoon />
          </Heading.IconContainer>
          <Heading.IconContainer onClick={() => clickHandler(clicked)}>
            <AiOutlineQuestionCircle />
          </Heading.IconContainer>
        </IconContext.Provider>
      </Heading.ButtonContainer>
      {clicked && (
        <Heading.InfoContainer>
          <Heading.InfoHeading>How it works</Heading.InfoHeading>
          <Heading.TextSmall>
            you press the button and boom man damn shit baby
          </Heading.TextSmall>
          <Heading.TextSmall>
            you press the button and boom man damn shit baby
          </Heading.TextSmall>
          <Heading.TextSmall>
            you press the button and boom man damn shit baby
          </Heading.TextSmall>
        </Heading.InfoContainer>
      )}
    </Heading>
  );
};
