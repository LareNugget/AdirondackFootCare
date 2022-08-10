import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  text-shadow: 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    -1px -1px 0 black;
  justify-content: center;
  align-items: left;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  font-size: 1rem;

  @media (min-width: 800px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.3rem;
  }
`;

export const Header = styled.h2`
  text-align: center;
  font-size: 2em;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  justify-content: center;
  margin: auto;

  /*
  img {
    margin: auto;
    min-width: 200px;
    max-width: 300px;
    border-radius: 5px;
    border: 1px solid black;

    @media (min-width: 600px) {
      width: 250px;
    }

    @media (min-width: 800px) {
      width: 300px;
    }

    @media (min-width: 1000px) {
      width: 350px;
    }
  }

  */
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 2px solid black;
  background-color: hsl(222, 100%, 0%, 0.5);
  padding: 5px;
  gap: 5px;
  max-width: 500px;

  img {
    margin: auto;
    border-radius: 5px;
    border: 1px solid black;
    width: 100px;

    @media (min-width: 600px) {
      width: 125px;
    }

    @media (min-width: 800px) {
      width: 150px;
    }

    @media (min-width: 1000px) {
      width: 175px;
    }
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    font-weight: bold;
    font-size: 1em;
  }

  p {
    font-size: 0.8em;
  }
`;
