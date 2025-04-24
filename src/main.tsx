import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const theme = extendTheme({
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
  },
});

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'. Asegúrate de que existe en tu index.html");
}
