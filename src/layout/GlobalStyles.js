import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
    font-size: 10px;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    background-color: black;
  }

  button {
    padding: 0;
    cursor: pointer;
    border: none;
    font-family: 'Poppins', sans-serif;
  }

  input, textarea {
    font-family: 'Poppins', sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyles
