import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const KeyElements = ({ heading, list }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ol>
        {list.map((item, i) => (
          <li key={i}>
            <ReactMarkdown components={{
              a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer">{children}</a>
            }}>{item}</ReactMarkdown>
          </li>
        ))}
      </ol>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  a {
    text-decoration: underline;
  }
  display: grid;
  @media (min-width: 1189px){
    gap: 72px;
    grid-template-columns: 1fr 2fr;
  }
  h2 {
    margin-bottom: ${Clamp(28, 48, 72, 'px')}
  }
  ol {
    display: grid;
    gap: ${Clamp(16, 24, 32, 'px')};
    list-style-type: none;
    counter-reset: counter;
    li {
      font-size: ${Clamp(16, 22, 22)};
      counter-increment: counter;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 16px;
      p {
        padding-top: .4em;
      }
      &::before {
        content: counter(counter);
        width: ${Clamp(42, 48, 54, 'px')};
        height: ${Clamp(42, 48, 54, 'px')};
        background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
        var(--gradient) border-box;
        border: 1px solid transparent;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:nth-child(-n+9)::before {
        content: "0" counter(counter);
      }
    }
  }
`

export default KeyElements;