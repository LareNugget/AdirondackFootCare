import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    -1px -1px 0 black;
  padding-bottom: 30px;
`;

export const Header = styled.h1`
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 10px;
  justify-content: center;

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 20px;
  }

  img {
    height: 70px;
    border-radius: 5px;
    border: 2px solid black;

    @media (min-width: 800px) {
      height: 100px;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  button {
    background-color: hsla(134, 67%, 87%, 1);
    border: 2px solid black;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    padding: 10px;
    font-size: 1em;

    cursor: pointer;

    @media (min-width: 800px) {
      font-size: 1.5em;
    }
  }
`;
