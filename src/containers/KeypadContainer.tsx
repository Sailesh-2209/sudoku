import React from "react";
import { Keypad } from "../components";

export const KeypadContainer: React.FC = () => {
  return (
    <Keypad>
      <Keypad.Row>
        <Keypad.Number>1</Keypad.Number>
        <Keypad.Number>2</Keypad.Number>
        <Keypad.Number>3</Keypad.Number>
      </Keypad.Row>
      <Keypad.Row>
        <Keypad.Number>4</Keypad.Number>
        <Keypad.Number>5</Keypad.Number>
        <Keypad.Number>6</Keypad.Number>
      </Keypad.Row>
      <Keypad.Row>
        <Keypad.Number>7</Keypad.Number>
        <Keypad.Number>8</Keypad.Number>
        <Keypad.Number>9</Keypad.Number>
      </Keypad.Row>
    </Keypad>
  );
};
