import styled from "styled-components";

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 800px) {
    width: 50%;
    justify-content: left;
  }

  @media (max-width: 800px) {
    height: 400px;
  }
`;

export const Map = styled.div`
  height: 80%;
  width: 90%;
  background-color: hsla(134, 67%, 87%, 1);
  padding: 10px;
  border: 2px solid black;
  border-radius: 20px;

  iframe {
    border-radius: 20px;
    border: 1px solid black;
  }
`;
