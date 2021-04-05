import styled from "styled-components/macro";

export const Container = styled.div`
  margin: auto;
  width: fit-content;
`;

export const MiddleBlock = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid #e4e4e4;
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

  @media (max-width: 520px) {
    height: 40px;
    width: 40px;
  }
`;

export const TopBlock = styled(MiddleBlock)`
  border-top: 2px solid #e4e4e4;
`;

export const RightBlock = styled(MiddleBlock)`
  border-right: 2px solid #e4e4e4;

  &:first-of-type {
    border-top: 2px solid #e4e4e4;
  }

  &:last-of-type {
    border-bottom: 2px solid #e4e4e4;
  }
`;

export const BottomBlock = styled(MiddleBlock)`
  border-bottom: 2px solid #e4e4e4;
`;

export const LeftBlock = styled(MiddleBlock)`
  border-left: 2px solid #e4e4e4;

  &:first-of-type {
    border-top: 2px solid #e4e4e4;
  }

  &:last-of-type {
    border-bottom: 2px solid #e4e4e4;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
