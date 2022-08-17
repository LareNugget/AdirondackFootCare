import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  text-shadow: 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    -1px -1px 0 black;
  justify-content: center;
  align-items: left;
  width: 95%;
  margin: auto;
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

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-color: hsl(222, 100%, 0%, 0.5);
  padding: 5px;

  svg {
    //Nurse svg
    font-size: 6em;
    stroke: black;
    stroke-width: 6px;

    @media (min-width: 800px) {
      font-size: 4em;
    }
  }
`;

export const LabelText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
  h1 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 0.7em;
    letter-spacing: 1px;
  }
`;
