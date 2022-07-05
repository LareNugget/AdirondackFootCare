import styled from "styled-components";

// WebsiteContainer Props
export const WebsiteContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  background-color: gray;
`;

// PageContainer Props
// NavbarHeight - height of navbar, inherited from the navbar component.
export const PageContainer = styled.div`
  overflow-y: auto;
  height: calc(100% - 50px);
  margin-top: 50px;
`;
