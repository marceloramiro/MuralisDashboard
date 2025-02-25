import { BrowserRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { Routes } from "@/routes";
import { UserProvider } from "./hooks/useUser";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
