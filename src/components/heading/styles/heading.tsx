import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const Text = styled.p`
  display: inline-block;
  font-size: 62px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  letter-spacing: 5px;
  margin-top: 30px;
  margin-bottom: 40px;
  color: white;
`;

export const ButtonContainer = styled.div`
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const InfoContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;
  padding: 10px;
  background-color: #131313;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  max-width: 400px;

  @media (max-width: 1100px) {
    max-width: 250px;
  }
`;

export const IconContainer = styled.div`
  display: inline-block;
  margin: 15px;

  &:hover {
    cursor: pointer;
    filter: invert(0.3);
  }
`;

export const InfoHeading = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: auto;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin: 10px 5px 5px 5px;
`;

export const TextSmall = styled.p`
  display: inline;
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  color: white;
`;
