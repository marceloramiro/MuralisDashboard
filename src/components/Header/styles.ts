import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";

export const MainContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.light_50};
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  margin-block: 8px;
  color: ${({ theme }) => theme.colors.dark_100};
`;

export const MenuIcon = styled(IoMdMenu)`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.dark_100};
`;
