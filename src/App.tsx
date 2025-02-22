import { BrowserRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { Routes } from "@/routes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
