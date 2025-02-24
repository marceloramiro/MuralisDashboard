import type { OutlinedSelectProps } from "@mui/material";
import { MainContainer, CustomSelectInput, Label } from "./styles";

interface SelectProps extends OutlinedSelectProps {
  label?: string;
  children: React.ReactNode;
}

function Select({ label, children, ...rest }: SelectProps) {
  return (
    <MainContainer>
      {label && <Label>{label}</Label>}
      <CustomSelectInput {...rest}>{children}</CustomSelectInput>
    </MainContainer>
  );
}

export { Select };
