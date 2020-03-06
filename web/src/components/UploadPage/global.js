import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: #E5E6F0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothin: antialiased;
  }
`;
