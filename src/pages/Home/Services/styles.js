import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    -1px -1px 0 black;
  padding-bottom: 30px;

  hr {
    height: 1px;
    margin: 10px;
    color: white;
    background-color: white;

    @media (min-width: 1000px) {
      display: none;
    }
  }
`;

export const ServicesHeader = styled.h1`
  margin-top: 20px;
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 10px;

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const ServiceCard = styled.div`
  padding: 5px;
  text-align: center;
  width: 80%;
  margin: auto;

  div {
    font-size: 1.5em;
    text-align: left;
  }

  img {
    height: 250px;
  }

  p {
    font-size: 1em;
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  button {
    background-color: hsla(134, 67%, 87%, 1);
    border: 2px solid black;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    padding: 10px;
    font-size: 1em;

    @media (min-width: 800px) {
      font-size: 1.5em;
    }
  }
`;
