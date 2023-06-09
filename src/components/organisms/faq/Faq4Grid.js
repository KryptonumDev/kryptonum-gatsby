import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";

const Faq4Grid = ({
  data: {
    heading,
    paragraph,
    secondParagraph,
    subheading,
    cta
  }
}) => {
  return (
    <Wrapper className="answer">
      <ReactMarkdown className="heading">{heading}</ReactMarkdown>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      <ReactMarkdown className="subheading">{subheading}</ReactMarkdown>
      <div className="secondParagraph">
        <ReactMarkdown>{secondParagraph}</ReactMarkdown>
        {cta?.text && (
          <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px 32px;
  .heading, .subheading {
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
  @media (max-width: 749px){
    grid-template-columns: 1fr;
    gap: 16px;
    .subheading {
      margin-top: 16px;
    }
  }
`

export default Faq4Grid;