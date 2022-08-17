import styled from "styled-components";

export const Container = styled.div`
  background-color: hsl(222, 100%, 0%, 0.7);
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  text-shadow: 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    -1px -1px 0 black;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BusinessInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: lightgreen;
  padding: 10px;

  div {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 1px;
  }
  span {
    font-size: 0.9em;
  }

  @media (min-width: 800px) {
    align-items: left;
  }
`;

export const NavLinks = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1px;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 5px;

  a {
    color: hsl(0, 0%, 71.76%);
    text-decoration: none;
    font-size: 0.8em;
    letter-spacing: 1px;

    :hover {
      color: lightgreen;
    }
  }
`;

export const GalluzzoDev = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: white;

  a {
    text-decoration: none;
    font-size: 0.9em;
    letter-spacing: 1px;
    color: white;

    :hover {
      color: hsl(36.07, 100%, 33.92%);
    }
  }

  div {
    font-size: 1.1em;
    letter-spacing: 0.5px;
  }

  @media (min-width: 800px) {
    align-items: right;
  }
`;
