import styled from "styled-components";

import { theme } from "@/theme";
import { Select } from "@mui/material";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomSelectInput = styled(Select)({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colors.light_blue_50,
    borderWidth: 2,
    borderRadius: "8px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colors.light_blue_50 + "!important",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colors.light_blue_50 + "!important",
  },
  "& .MuiSelect-icon": {
    color: theme.colors.light_100,
    right: "12px",
    fontSize: "1.8rem",
    borderRadius: "8px",
    backgroundColor: theme.colors.light_blue_50,
    width: "45px",
    height: "45px",
    transition: "all 0.3s",
    transform: "translate(7px,-8px)",
  },
});

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.dark_100};
  margin-bottom: 4px;
`;
