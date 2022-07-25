import styled from "styled-components";

export const HoursContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  color: white;
  text-shadow: 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    -1px -1px 0 black;
  justify-content: center;
  align-items: left;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 100px;

  @media (min-width: 800px) {
    flex-direction: row;
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    width: 50%;
  }

  img {
    width: 100%;
    min-height: 270px;
    border: 2px solid black;
    border-radius: 10px;
  }
`;

export const HoursTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  margin: 10px;
  background-color: hsl(222, 100%, 0%, 0.5);
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1.3rem;

  @media (min-width: 800px) {
    width: 50%;
    margin: 10px;
    gap: 0px;
    font-size: 1.5rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
    justify-content: center;
    gap: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 80%;
    font-size: 0.75em;
    border-top: 1px solid white;
    padding-top: 15px;

    li {
      display: flex;
      flex-direction: row;
      gap: 5px;
      padding: 3px;
      justify-content: space-between;
    }
  }
`;

export const HoursLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;

  svg {
    font-size: 1.3em;
  }

  div {
    //Office Hours text
    font-family: "Oswald";
    font-size: 1em;
  }
`;
