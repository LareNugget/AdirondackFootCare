import styled from "styled-components";

export const DropdownButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsla(134, 67%, 87%, 1);
  border-bottom: 2px solid black;
  padding: 10px;
  gap: 8px;
  font-weight: bold;
  text-align: left;

  a {
    display: flex;
    flex-direction: column;
    // used to select React Router Dom Link
    text-decoration: none;
    //margin: auto;
    background-color: hsla(134, 67%, 95%, 1);
    border: 2px solid black;
    border-radius: 10px;
    padding: 5px;
    color: black;

    :hover {
      cursor: pointer;
      background-color: hsla(134, 67%, 80%, 1);
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const ButtonTitle = styled.div`
  font-size: 1.2rem;
  padding-left: 10px;
`;
export const ButtonDescription = styled.div`
  font-size: 0.8rem;
  font-weight: normal;
  padding-left: 10px;
`;
