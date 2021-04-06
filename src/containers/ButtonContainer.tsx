import React from "react";
import { Buttons } from "../components";

export const ButtonContainer: React.FC = () => {
  return (
    <Buttons>
      <Buttons.Button>New Board</Buttons.Button>
      <Buttons.Button>Solve</Buttons.Button>
    </Buttons>
  );
};
