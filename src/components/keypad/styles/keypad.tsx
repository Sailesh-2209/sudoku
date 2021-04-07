import styled from "styled-components/macro";

export const Container = styled.div`
  position: absolute;
  top: 30%;
  right: 10%;
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 20px;
  margin: 0;

  @media (max-width: 1320px) {
    right: 7%;
  }

  @media (max-width: 1200px) {
    right: 4%;
  }

  @media (max-width: 1100px) {
    right: 50%;
    transform: translate(50%);
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

export const Number = styled.div`
  width: 80px;
  height: 80px;
  color: white;
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  text-align: center;
  padding-top: 25px;
  margin: 0;
  transition: 0.5s ease;
  border-radius: 20px;

  &:hover {
    background-color: #3b3b3b;
    color: #c5bfbf;
  }
`;
