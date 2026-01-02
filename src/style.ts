import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #0e0e0e;
  }

  html {
    min-height: 100vh;

    display: flex;
    justify-content: center;

    background: #2f2f2f;
  }

  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    html, body {
      width: 210mm;
      height: 297mm;
    }
  }
`