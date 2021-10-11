import React from "react";
import "./App.css";
import FormikContainer from "./components/FormikContainer";
import { theme, ThemeProvider } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <FormikContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
