import { CustomInput, Label, MainContainer } from "./styles";
import type { OutlinedTextFieldProps } from "@mui/material";

interface InputTextProps extends OutlinedTextFieldProps {
  label?: string;
}

function InputText({ label, ...rest }: InputTextProps) {
  return (
    <MainContainer>
      {label && <Label>{label}</Label>}
      <CustomInput {...rest} />
    </MainContainer>
  );
}

export { InputText };
