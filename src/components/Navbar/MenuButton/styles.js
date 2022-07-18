import styled from "styled-components";

export const MenuButton = styled.div`
  display: flex;
  width: 50px;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  @media (min-width: 800px) {
    display: none; //menu button goes away on bigger screens
  }

  :hover {
    cursor: pointer;
  }
`;

export const CloseButton = styled.div`
  :hover {
    cursor: pointer;
  }
`;
