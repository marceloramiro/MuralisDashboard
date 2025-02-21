import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <p>Bem vindo</p>
    </ThemeProvider>
  );
}

export default App;
