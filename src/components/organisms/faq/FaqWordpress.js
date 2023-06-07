import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";

const FaqWordpress = ({
  data: {
    heading,
    paragraph,
    subheading,
    secondParagraph,
    cta,
    summary,
    summaryCta,
  }
}) => {
  return (
    <Wrapper>
      <ReactMarkdown className="heading">{heading}</ReactMarkdown>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      <ReactMarkdown className="subheading">{subheading}</ReactMarkdown>
      <div className="secondParagraph">
        <ReactMarkdown>{secondParagraph}</ReactMarkdown>
        {cta?.text && (
          <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
        )}
      </div>
      <div className="summary">
        <ReactMarkdown>{summary}</ReactMarkdown>
        <Button theme={summaryCta.theme} to={summaryCta.href}>{summaryCta.text}</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px 32px;
  .heading, .subheading, .summary {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph, .secondParagraph {
    font-size: ${Clamp(16, 22, 22)};
  }
  .secondParagraph {
    p:not(:last-of-type),
    ol:not(:last-child) {
      margin-bottom: ${Clamp(16, 32, 32, 'px')};
    }
    em {
      font-size: .8em;
      font-style: normal;
    }
    ol {
      counter-reset: counter;
      li {
        counter-increment: counter;
        list-style-type: none;
        display: grid;
        grid-template-columns: 32px auto;
        column-gap: ${Clamp(12, 16, 32, "px")};
        align-items: baseline;
        &:not(:last-child){
          margin-bottom: .5rem;
        }
        &::before {
          content: "/0" counter(counter);
          display: inline-block;
          font-size: 1rem;
        }
      }
    }
    .cta {
      margin-top: ${Clamp(16, 48, 48, 'px')};
    }
  }
  .summary {
    grid-column: 3/1;
    max-width: ${1060/16}rem;
    text-align: center;
    margin: 48px auto 0;
    .cta {
      margin-top: ${Clamp(24, 32, 48, 'px')};
    }
  }
  @media (max-width: 899px){
    grid-template-columns: 1fr;
    gap: 16px;
    .summary {
      grid-column: unset;
    }
  }
`

export default FaqWordpress;