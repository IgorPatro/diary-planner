import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
    font-size: 10px;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
  }

  button {
    padding: 0;
    cursor: pointer;
    border: none;
    font-family: 'Poppins', sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyles
