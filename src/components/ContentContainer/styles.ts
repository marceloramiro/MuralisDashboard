import styled from "styled-components";
import { SIDEBAR_WIDTH } from "../SideBar/constants";

interface MainContainerProps {
  isSidebarOpen?: boolean;
}

export const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  overflow: auto;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  padding-inline: 24px;
  padding-bottom: 24px;
  transition: margin-left 350ms ease-in-out;
  background-color: ${({ theme }) => theme.colors.light_50};
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? 0 : -SIDEBAR_WIDTH)}px;
`;
