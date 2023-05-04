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
    font-feature-settings: 'pnum' on, 'onum' on, 'ss01' on, 'ss03' on, 'ss04' on;
  }
  :focus {
    outline: none;
  }
  :focus-visible {
    outline: 2px solid #26D9C3;
    outline-offset: 5px;
  }
  main, .max-width {
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
  button {
    border: none;
    background-color: transparent;
  }
  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.005em;
    strong {
      color: var(--primary-400);
      background-image: linear-gradient(90deg, #90F4E8, #2DD282);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  h1 {
    font-size: clamp(${28/16}rem, ${50/7.68}vw, ${56/16}rem);
  }
  .cta-wrapper {
    display: grid;
    justify-items: flex-end;
    gap: 24px;
  }
  .cta {
    font-size: clamp(1rem, ${22/7.68}vw, ${22/16}rem);
    display: flex;
    align-items: center;
    white-space: nowrap;
    svg {
      flex-shrink: 0;
      margin-left: 12px;
    }
    &.primary {
      position: relative;
      border-radius: 2px;
      padding: ${12/16}rem ${42/16}rem;
      background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                  linear-gradient(90deg, #90F4E8, #2DD282) border-box;
      border: 2px solid transparent;
      span {
        color: var(--primary-400);
        background-image: linear-gradient(90deg, #90F4E8, #2DD282);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &::before, &::after {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity .3s;
      }
      &::before {
        box-shadow: 0px 0px 2px #E1FFFA,
                    0px 0px 5px #6DF1DD,
                    0px 0px 15px rgba(55, 193, 131, 0.5);
      }
      &::after {
        box-shadow: 0px 0px 4px #E1FFFA,
                    0px 0px 15px #6DF1DD,
                    0px 0px 25px rgba(55, 193, 131, 0.75);
      }
      &:hover::before,
      &:active::after {
        opacity: 1;
      }
      &:active::before {
        opacity: 0;
      }
    }
    &.secondary {
      text-decoration: underline;
      &::before, &::after {
        content: attr(data-text);
        position: absolute;
        opacity: 0;
        transition: opacity .3s;
      }
      &::before {
        filter: drop-shadow(0px 0px 2px #E1FFFA) drop-shadow(0px 0px 5px #6DF1DD) drop-shadow(0px 0px 15px rgba(55, 193, 131, 0.5));
      }
      &::after {
        filter: drop-shadow(0px 0px 2px #FFFFFF) drop-shadow(0px 0px 6px #E1FFFA) drop-shadow(0px 0px 25px #6DF1DD) drop-shadow(0px 0px 35px rgba(55, 193, 131, 0.75));
      }
      &:hover::before,
      &:active::after {
        opacity: 1;
      }
      &:active::before {
        opacity: 0;
      }
    }
  }
`

export default GlobalStyle