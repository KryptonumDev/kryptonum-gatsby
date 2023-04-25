import { createGlobalStyle } from "styled-components";
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --neutral-50: #F9FBFC;
    --neutral-100: #F7F7F8;
    --neutral-200: #EFF0F3;
    --neutral-300: #E2E4EC;
    --neutral-400: #BFC1CA;
    --neutral-500: #A4A8B5;
    --neutral-600: #9699A2;
    --neutral-700: #5B5F67;
    --neutral-800: #38383B;
    --neutral-900: #0D0F10;
    --neutral-950: #040606;
    --primary-400: #2DD282;
  }
  body {
    min-width: 320px;
    background-color: var(--neutral-950);
    color: var(--neutral-200);
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }
  .max-width {
    max-width: 1920px;
    width: calc(100% - 32px);
    margin: 0 auto;
  }
  svg {
    vertical-align: top;
  }
  a {
    text-decoration: none;
    color: var(--neutral-200);
  }
  h1, h2, h3, h4, h5, h6 {
    strong {
      color: var(--primary-400);
    }
  }
  h1 {
    font-size: ${56/13.66}vw;
  }
`

export default GlobalStyle