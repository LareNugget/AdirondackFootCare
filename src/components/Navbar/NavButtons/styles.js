import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 30px;

  button {
    padding: 5px;
    font-weight: bold;
    border: 0px solid white;
    border-radius: 5px;
    font-size: 1em;
    color: black;
    background-color: hsla(134, 67%, 87%, 1);

    :hover {
      background-color: lightgreen;
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    display: none; // nav buttons go away on small screens.
  }
`;
