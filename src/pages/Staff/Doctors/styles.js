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

export const Bios = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  img {
    margin: auto;
    width: 200px;
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
`;

export const Sal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  text-align: left;
  border: 2px solid black;
  background-color: hsl(222, 100%, 0%, 0.5);

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Mason = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
  text-align: right;
  background-color: hsl(222, 100%, 0%, 0.5);

  @media (min-width: 1000px) {
    flex-direction: row-reverse;
  }
`;

export const BioText = styled.div`
  padding: 10px;

  span {
    font-size: 0.8em;
  }

  p {
    margin-top: 20px;
    font-size: 1em;
  }
`;
