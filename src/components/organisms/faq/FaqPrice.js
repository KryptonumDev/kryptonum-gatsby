import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";

const FaqPrice = ({
  data: {
    heading,
    paragraph,
    secondParagraph,
    subheading,
    cta
  }
}) => {
  return (
    <Wrapper>
      <ReactMarkdown className="heading">{heading}</ReactMarkdown>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      <ReactMarkdown className="subheading">{subheading}</ReactMarkdown>
      <div className="secondParagraph">
        <ReactMarkdown>{secondParagraph}</ReactMarkdown>
        <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
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
    p:not(:last-of-type) {
      margin-bottom: ${Clamp(16, 32, 32, 'px')};
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

export default FaqPrice;