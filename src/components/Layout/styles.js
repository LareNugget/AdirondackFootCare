import styled from "styled-components";
import WaitingRoom from "../../images/waitingroom2.jpg";

export const WebsiteContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  background-color: gray;
`;

export const PageContainer = styled.div`
  height: 100%;
  background-image: url(${WaitingRoom});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-position: fixed;
`;
