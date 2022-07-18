import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  padding: 20px;
  justify-content: center;
  align-items: left;

  @media (min-width: 800px) {
    align-items: flex-start; //contents centered on mobile, align left (start) when on desktop
    width: 50%;
  }

  @media (min-width: 1000px) {
    padding: 50px;
  }

  @media (min-width: 1200px) {
    padding: 70px;
  }
`;

export const Slogan = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media (min-width: 800px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  max-width: 700px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 10px;

  @media (min-width: 800px) {
    justify-content: left;
  }

  button {
    background-color: hsla(134, 67%, 87%, 1);
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 10px;
  }
`;
