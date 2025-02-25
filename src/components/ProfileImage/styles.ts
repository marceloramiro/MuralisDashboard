import styled from "styled-components";
import { TbUserFilled } from "react-icons/tb";

export const MainContainer = styled.div`
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
  flex-grow: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.dark_blue_100};
  box-shadow: 20px 20px 30px ${({ theme }) => theme.colors.dark_transparent_70};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

export const DefaultUserIcon = styled(TbUserFilled)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.dark_blue_100};
  transform: translateY(15px);
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light_50};
  border-radius: 50%;
`;
