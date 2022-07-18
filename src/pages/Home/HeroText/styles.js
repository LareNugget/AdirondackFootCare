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
    padding: 100px;
  }

  @media (min-width: 1000px) {
    padding: 100px;
  }

  @media (min-width: 1200px) {
    padding: 100px;
  }
`;

export const Slogan = styled.h1`
  font-size: 2rem;
`;

export const Description = styled.p``;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  button {
    background-color: hsla(134, 67%, 87%, 1);
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 10px;
  }
`;
