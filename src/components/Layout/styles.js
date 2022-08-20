import styled from "styled-components";
import WaitingRoom from "../../images/waitingroom2.webp";

export const WebsiteContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: gray;
`;

export const PageContainer = styled.div`
  min-height: calc(100% - 60px);
  background-image: url(${WaitingRoom});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-position: fixed;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
