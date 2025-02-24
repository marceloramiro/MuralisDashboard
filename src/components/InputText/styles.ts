import styled from "styled-components";
import { theme } from "@/theme";
import { TextField } from "@mui/material";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    "& fieldset": {
      borderColor: theme.colors.light_blue_50,
      borderWidth: 2,
    },
    "&:hover fieldset": {
      borderColor: theme.colors.light_blue_50,
      opacity: 0.8,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.colors.light_blue_50,
      opacity: 0.8,
    },
  },
});

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.dark_100};
  margin-bottom: 4px;
`;
