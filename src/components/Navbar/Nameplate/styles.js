import styled from "styled-components";

export const NameplateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NameplateText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 100%;
  gap: 0px;
`;

export const BusinessName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const BusinessPhone = styled.div`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: left;
  align-items: center;
  color: black;

  div {
    padding-top: 3px;
  }
`;
