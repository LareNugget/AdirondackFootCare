import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding-top: 5px;
  overflow-y: auto;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const ServiceCarousel = styled.div`
  display: flex;
  flex-direction: column;
`;