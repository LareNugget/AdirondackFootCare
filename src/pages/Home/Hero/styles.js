import styled from "styled-components";

// Hero Text + Map split 60/40 on desktop
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  text-shadow: 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    -1px -1px 0 black;
  justify-content: center;
  align-items: left;
  width: 100%;
  margin-top: 20px;
  font-size: 1.1rem;

  @media (min-width: 800px) {
    flex-direction: row;
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

// Text stuff
export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  padding: 10px;

  @media (min-width: 800px) {
    width: 60%;
  }

  p {
    //business description
    font-size: 0.8em;
    max-width: 1000px;
  }
`;

export const Slogan = styled.div`
  //foot svg and welcome container
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: left;
  align-items: center;

  svg {
    //Footprint svg
    font-size: 3em;
    stroke: black;
    stroke-width: 6px;
  }

  div {
    //ADKFC + happy feet
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
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

// Map stuff

export const HeroMapContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  height: 300px;

  @media (min-width: 800px) {
    width: 40%;
  }

  @media (min-width: 1000px) {
    width: 40%;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 10px;
    position: relative;
  }
`;
