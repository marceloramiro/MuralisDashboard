import { MenuItem } from "@mui/material";
import { Button, InputText, Select } from "@/components";
import {
  MainContainer,
  Header,
  Title,
  ContentContainer,
  Footer,
} from "./styles";

function FormCreateEntrants() {
  return (
    <MainContainer>
      <Header>
        <Title>Cadastro de ingressantes</Title>
        <ContentContainer>
          <InputText variant="outlined" label="Nome" />
          <Select variant="outlined" label="Curso">
            <MenuItem value={"matematica"}>Matemática</MenuItem>
            <MenuItem value={"letras"}>Letras</MenuItem>
            <MenuItem value={"geografia"}>Geografia</MenuItem>
          </Select>
          <Select variant="outlined" label="Estado">
            <MenuItem value={"SP"}>São Paulo</MenuItem>
            <MenuItem value={"RJ"}>Rio de Janeiro</MenuItem>
            <MenuItem value={"MG"}>Minas Gerais</MenuItem>
          </Select>
          <Select variant="outlined" label="Cidade">
            <MenuItem value={"SP"}>Mogi das Cruzes</MenuItem>
            <MenuItem value={"RJ"}>Poá</MenuItem>
            <MenuItem value={"MG"}>Guararema</MenuItem>
          </Select>
        </ContentContainer>
        <Footer>
          <Button variant="contained" color="warning">
            Voltar
          </Button>
          <Button variant="contained" color="success">
            Gravar
          </Button>
        </Footer>
      </Header>
    </MainContainer>
  );
}

export { FormCreateEntrants };
