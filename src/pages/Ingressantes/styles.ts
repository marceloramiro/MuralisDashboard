import styled from "styled-components";
import { IconButton as MuiIconButton } from "@mui/material";

export const CreateEntrantButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 50px);
  height: 100%;
`;

export const IconButton = styled(MuiIconButton)`
  background-color: ${({ theme }) => theme.colors.dark_blue_70} !important;
  color: ${({ theme }) => theme.colors.light_100} !important;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark_100};
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;
