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
    --neutral-50: #EFF0F3;
    --neutral-100: #F5F6FA;
    --neutral-200: #EFF0F3;
    --neutral-300: #E2E4EC;
    --neutral-400: #BFC1CA;
    --neutral-500: #A4A8B5;
    --neutral-600: #9699A3;
    --neutral-700: #9699A3;
    --neutral-800: #212123;
    --neutral-900: #161618;
    --neutral-950: #010104;
    --primary-400: #2DD282;
    --error-400: #EE6470;
    --gradient: linear-gradient(90deg, #90F4E8, #2DD282);
    --easing: cubic-bezier(0.23,1,0.32,1);
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
    @media (max-width: 699px){
     --pageMargin: 16px;
    }
    max-width: 1680px;
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
  sup {
    font-size: .6em;
    vertical-align: top;
  }
  input, textarea, button, select {
    font: inherit;
    color: inherit;
    appearance: none;
  }
  h1, h2, h3, h4, h5, h6 {
    scroll-margin-top: 126px;
    font-weight: 400;
    letter-spacing: -0.005em;
    line-height: 1.3;
    font-size: inherit;
    strong, &.strong {
      font-weight: 400;
      color: var(--primary-400);
      background-image: var(--gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  h1 {
    font-size: ${Clamp(28, 50, 56)};
  }
  h2 {
    font-size: ${Clamp(28, 50, 48)};
  }
  h3 {
    font-size: ${Clamp(24, 40, 40)};
  }
  p strong,
  p.strong,
  li strong {
    font-weight: 400;
    &::before,
    &::after {
      color: var(--primary-400);
      background-image: var(--gradient);
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
    var(--gradient) border-box;
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
`

export default GlobalStyle