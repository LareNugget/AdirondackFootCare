import styled from "styled-components";

export const Container = styled.div`
  background-color: hsl(222, 100%, 0%, 0.7);
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BusinessInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: lightgreen;
  padding: 5px;

  div {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 1px;
  }
  span {
    font-size: 0.8em;
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
    color: gray;
    text-decoration: none;
    font-size: 0.75em;

    :hover {
      color: lightgreen;
    }
  }
`;

export const GalluzzoDev = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: orange;
  padding: 5px;

  div {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 1px;
  }
  span {
    font-size: 0.8em;
  }

  @media (min-width: 800px) {
    align-items: right;
  }
`;
