import React, { useState } from "react";
import { Heading } from "../components";
import { BiSun, BiMoon } from "react-icons/bi";
import { AiOutlineQuestion, AiOutlineQuestionCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

export const HeadingContainer: React.FC<{
  darkMode: React.ComponentState;
  setDarkMode: React.ComponentState;
}> = ({ darkMode, setDarkMode }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Heading>
        <Heading.Text color={darkMode ? "white" : "black"}>Sudoku</Heading.Text>
        <Heading.ButtonContainer>
          <IconContext.Provider value={{ color: "white", size: "32" }}>
            <Heading.IconContainer
              onClick={() => {
                setDarkMode((darkMode: boolean) => !darkMode);
              }}
            >
              {darkMode ? <BiMoon /> : <BiSun />}
            </Heading.IconContainer>
            <Heading.IconContainer
              onMouseEnter={() => setClicked(true)}
              onMouseLeave={() => setClicked(false)}
            >
              {clicked ? <AiOutlineQuestion /> : <AiOutlineQuestionCircle />}
            </Heading.IconContainer>
          </IconContext.Provider>
        </Heading.ButtonContainer>
      </Heading>
      {clicked && (
        <Heading.InfoContainer>
          <Heading.InfoHeading>How it works</Heading.InfoHeading>
          <Heading.TextSmall>
            Click on any one of the empty squares and a virtual keyboard
            appears.
          </Heading.TextSmall>
          <Heading.TextSmall>
            Click on the number that you want to insert in the selected cell.
          </Heading.TextSmall>
          <Heading.TextSmall>
            Once you are done solving the board, click on the Solve button.
          </Heading.TextSmall>
          <Heading.TextSmall>
            The solved board should now appear.
          </Heading.TextSmall>
          <Heading.TextSmall>
            Click on the New Board button to generate a new board.
          </Heading.TextSmall>
        </Heading.InfoContainer>
      )}
    </>
  );
};
