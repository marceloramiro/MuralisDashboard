import styled from "styled-components";
import { Button } from "@mui/material";
import { theme } from "@/theme";

export const CustomButton = styled(Button)({
  "&.MuiButton-colorWarning": {
    backgroundColor: theme.colors.light_yellow_50,
    borderRadius: "8px",
    border: "2px solid" + theme.colors.dark_yellow_50,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.colors.light_yellow_50,
    },
  },
  "&.MuiButton-colorSuccess": {
    backgroundColor: theme.colors.light_green_50,
    borderRadius: "8px",
    border: "2px solid" + theme.colors.dark_green_50,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.colors.light_green_50,
    },
  },
});
