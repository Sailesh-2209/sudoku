import React from "react";
import { Keypad } from "../components";

export const KeypadContainer: React.FC<{
  setKeypadState: React.ComponentState;
  setClicked: React.ComponentState;
  clicked: React.ComponentState;
}> = ({ setKeypadState, setClicked, clicked }) => {
  return (
    <Keypad>
      <Keypad.Row>
        <Keypad.Number
          onClick={() => {
            setKeypadState(1);
            setClicked((clicked: boolean) => !clicked);
          }}
        >
          1
        </Keypad.Number>
        <Keypad.Number
          onClick={() => {
            setKeypadState(2);
            setClicked((clicked: boolean) => !clicked);
          }}
        >
          2
        </Keypad.Number>
        <Keypad.Number
          onClick={() => {
            setKeypadState(3);
            setClicked((clicked: boolean) => !clicked);
          }}
        >
          3
        </Keypad.Number>
      </Keypad.Row>
      <Keypad.Row>
        <Keypad.Number
          onClick={() => {
            setKeypadState(4);
            setClicked((clicked: boolean) => !clicked);
          }}
        >
          4
        </Keypad.Number>
        <Keypad.Number
          onClick={() => {
            setKeypadState(5);
            setClicked((clicked: boolean) => !clicked);
          }}
        >
          5
        </Keypad.Number>
        <Keypad.Number
          onClick={() => {
            setKeypadState(6);
            setClicked((clicked: boolean) => !clicked);
          }}
        >
          6
        </Keypad.Number>
      </Keypad.Row>
      <Keypad.Row>
        <Keypad.Number
          onClick={() => {
            setKeypadState(7);
            setClicked((clicked: boolean) => !clicked);
          }}
        >
          7
        </Keypad.Number>
        <Keypad.Number
          onClick={() => {
            setKeypadState(8);
            setClicked((clicked: boolean) => !clicked);
          }}
        >
          8
        </Keypad.Number>
        <Keypad.Number
          onClick={() => {
            setKeypadState(9);
            setClicked((clicked: boolean) => !clicked);
          }}
        >
          9
        </Keypad.Number>
      </Keypad.Row>
    </Keypad>
  );
};
