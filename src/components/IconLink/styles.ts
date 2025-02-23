import styled from "styled-components";

interface MainContainerButtonProps {
  isActive?: boolean;
}

export const MainContainer = styled.button<MainContainerButtonProps>`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark_blue_100};
    transition: background-color 0.3s;
  }
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.dark_blue_100 : "transparent"};
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  max-width: 25px;
  max-height: 25px;
  flex-grow: 1;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.light_100};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-inline: 10px;
  margin-block: 5;
`;
