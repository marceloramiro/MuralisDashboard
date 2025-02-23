import styled, { css } from "styled-components";
import { FaHouse } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";

export const baseIconStyle = css`
  color: ${({ theme }) => theme.colors.light_100};
  width: 100%;
  height: 100%;
`;

export const baseTextStyle = css`
  color: ${({ theme }) => theme.colors.light_100};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 5px;
`;

export const MainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  padding-block: 20px;
  padding-inline: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark_blue_70};
  flex-direction: column;
`;

export const UserName = styled.p`
  ${baseTextStyle}
`;

export const UserEmail = styled.p`
  ${baseTextStyle}
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 3px;
  width: 100%;
`;

export const IconHome = styled(FaHouse)`
  ${baseIconStyle}
`;

export const IconFolder = styled(FaFolder)`
  ${baseIconStyle}
`;
