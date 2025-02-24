import type { ButtonProps as MuiButtonProps } from "@mui/material";
import { CustomButton } from "./styles";

interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return <CustomButton {...rest}>{children}</CustomButton>;
}

export { Button };
