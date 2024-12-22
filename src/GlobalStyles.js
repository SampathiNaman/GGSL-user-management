import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    
code {
  font-family: 'Courier New', 'Courier', monospace;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyles;
