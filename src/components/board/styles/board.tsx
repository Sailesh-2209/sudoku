import styled from "styled-components/macro";

export const Container = styled.div`
  margin: auto;
  width: fit-content;
`;

export const MiddleBlock = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid #7f7f7f;
  margin: 0;
  padding: 0;
  text-align: center;
  align-items: center;
  position: relative;

  p {
    color: white;
    font-size: 22px;
    position: absolute;
    padding: 0;
    margin: -25% 0 0 -10%;
    top: 50%;
    left: 50%;
  }

  &:first-of-type {
    border-top: 2px solid white;
  }

  &:nth-child(3) {
    border-bottom: 1px solid yellow;
  }

  &:nth-child(6) {
    border-bottom: 1px solid yellow;
  }

  &:nth-child(9) {
    border-bottom: 2px solid white;
  }

  @media (max-width: 520px) {
    height: 40px;
    width: 40px;
  }
`;

export const TopBlock = styled(MiddleBlock)`
  border-top: 2px solid #7f7f7f;
`;

export const RightBlock = styled(MiddleBlock)`
  border-right: 2px solid white;

  &:first-of-type {
    border-top: 2px solid white;
  }

  &:last-of-type {
    border-bottom: 2px solid white;
  }
`;

export const BottomBlock = styled(MiddleBlock)`
  border-bottom: 2px solid #7f7f7f;
`;

export const LeftBlock = styled(MiddleBlock)`
  border-left: 2px solid white;

  &:first-of-type {
    border-top: 2px solid white;
  }

  &:last-of-type {
    border-bottom: 2px solid white;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-of-type(3) > div {
    border-right: 1px solid yellow;
  }

  &:nth-of-type(6) > div {
    border-right: 1px solid yellow;
  }
`;

export const Number = styled.p``;
