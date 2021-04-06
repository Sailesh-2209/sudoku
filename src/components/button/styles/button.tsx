import styled from "styled-components/macro";

export const Button = styled.div`
  margin: 30px 10px auto 10px;
  padding-top: 10px;
  outline: none;
  border: none;
  height: 30px;
  width: 120px;
  border-radius: 5px;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
  background-color: whitesmoke;
  color: rgb(14, 20, 51);
  transition: 0.5s ease;
  outline: none;

  &:hover {
    background-color: #969090;
    color: rgb(14, 20, 51);
  }
`;

export const Container = styled.button`
  width: fit-content;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
`;
