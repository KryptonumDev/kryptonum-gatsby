import { createGlobalStyle } from "styled-components";
import { Clamp } from "../utils/functions";
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
    --neutral-800: #212123;
    --neutral-900: #0F0F10;
    --neutral-950: #040606;
    --primary-400: #2DD282;
  }
  body.scrollLock {
    overflow: hidden;
    touch-action: none;
  }
  body {
    min-width: 320px;
    background-color: var(--neutral-950);
    color: var(--neutral-200);
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-feature-settings: 'pnum' on, 'onum' on, 'ss03' on, 'ss04' on;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  ::-webkit-scrollbar-track {
    border-right: 2px solid var(--neutral-800);
    background-color: var(--neutral-950);
  }
  ::-webkit-scrollbar-thumb {
    border-left: 14px solid var(--neutral-950);
    background-image: linear-gradient(266deg, var(--primary-400), #90F4E8 100%);
  }
  ::-webkit-scrollbar-track:horizontal {
    border-top: 14px solid var(--neutral-950);
    border-left: none;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    border-left: none;
    border-top: 14px solid var(--neutral-950);
    background-image: linear-gradient(266deg, var(--primary-400), #90F4E8 100%);
  }
  :focus {
    outline: none;
  }
  :focus-visible {
    outline: 2px solid #26D9C3;
    outline-offset: 5px;
  }
  main, .max-width {
    --pageMargin: 40px;
    @media (max-width: 767px){
     --pageMargin: 16px;
    }
    max-width: 1920px;
    width: calc(100% - var(--pageMargin)*2);
    margin: 0 auto;
  }
  main {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${Clamp(96, 144, 172, "px")};
    padding-top: 40px;
    @media (max-width: 999px){
      padding-top: ${Clamp(48, 128, 128, "px")};
    }
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
    cursor: pointer;
  }
  input, textarea, button, select {
    font: inherit;
    color: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    letter-spacing: -0.005em;
    line-height: 1.3;
    strong {
      font-weight: 400;
      color: var(--primary-400);
      background-image: linear-gradient(90deg, #90F4E8, #2DD282);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  h1 {
    font-size: ${Clamp(28, 50, 60)};
  }
  h2 {
    font-size: ${Clamp(28, 50, 48)};
  }
  p strong,
  .strong {
    font-weight: 400;
    &::before,
    &::after {
      color: var(--primary-400);
      background-image: linear-gradient(90deg, #90F4E8, #2DD282);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      white-space: pre;
    }
    &::before {
      content: '[ ';
    }
    &::after {
      content: ' ]';
    }
  }
  .person-border {
    background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
    linear-gradient(90deg, #90F4E8, #2DD282) border-box;
    border: 1px solid transparent;
    &, img {
      border-radius: 50%;
    }
  }
  .cta-wrapper {
    display: inline-flex;
    flex-direction: column;
    gap: 24px;
  }
  .cta {
    font-size: ${Clamp(16, 22, 22)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    position: relative;
    gap: 12px;
    svg {
      flex-shrink: 0;
    }
    &.primary {
      border-radius: 2px;
      padding: 12px 42px;
      @media (max-width: 499px){
        width: 100%;
        padding: 12px 24px;
      }
      background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                  linear-gradient(90deg, #90F4E8, #2DD282) border-box;
      border: 2px solid transparent;
      span {
        color: var(--primary-400);
        background-image: linear-gradient(90deg, #90F4E8, #2DD282);
        -webkit-background-clip: text;
        background-clip: text;
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
      span {
        position: relative;
        &::before, &::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          opacity: 0;
          transition: opacity .3s;
        }
        &::before {
          filter: drop-shadow(0px 0px 2px #E1FFFA) drop-shadow(0px 0px 5px #6DF1DD) drop-shadow(0px 0px 15px rgba(55, 193, 131, 0.5));
        }
        &::after {
          filter: drop-shadow(0px 0px 2px #FFFFFF) drop-shadow(0px 0px 6px #E1FFFA) drop-shadow(0px 0px 25px #6DF1DD) drop-shadow(0px 0px 35px rgba(55, 193, 131, 0.75));
        }
      }
      &:hover span::before,
      &:active span:after {
        opacity: 1;
      }
      &:active span::before {
        opacity: 0;
      }
    }
  }
`

export default GlobalStyle