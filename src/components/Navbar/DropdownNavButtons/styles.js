import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: hsla(134, 67%, 87%, 1);
  border-bottom: 2px solid black;
  padding: 10px;

  a {
    // used to select React Router Dom Link
    width: 100%;
    display: flex;
    text-decoration: none;
  }

  button {
    //margin: auto;
    padding: 5px;
    background-color: hsla(134, 67%, 87%, 1);
    border: 0;
    font-size: 1.5rem;
    font-weight: bold;

    :hover {
      cursor: pointer;
      background-color: hsla(120, 50%, 87%, 1);
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`;
