import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Why = ({
  data: {
    why_Heading,
    why_Paragraph,
    why_SecondParagraph,
    why_ThirdParagraph,
    why_FourthParagraph,
    why_Cta,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2" className="heading">{why_Heading}</DecorativeHeading>
      <ReactMarkdown className="paragraph">{why_Paragraph}</ReactMarkdown>
      <ReactMarkdown className="paragraph2">{why_SecondParagraph}</ReactMarkdown>
      <ReactMarkdown className="paragraph3">{why_ThirdParagraph}</ReactMarkdown>
      <div className="paragraph4">
        <ReactMarkdown>{why_FourthParagraph}</ReactMarkdown>
        <Button theme={why_Cta.theme} to={why_Cta.href}>{why_Cta.text}</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px 32px;
  .heading {
    grid-column: 3/1;
    max-width: ${734/16}rem;
    margin-bottom: -8px;
  }
  .paragraph, .paragraph3 {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2, .paragraph4 {
    font-size: ${Clamp(16, 22, 22)};
  }
  .paragraph4 {
    p:not(:last-of-type){
      margin-bottom: 16px;
    }
    .cta {
      margin-top: ${Clamp(32, 40, 48, 'px')};
    }
  }
  @media (max-width: 999px){
    grid-template-columns: 1fr;
    gap: unset;
    .heading {
      grid-column: unset;
      margin-bottom: ${Clamp(28, 48, 64, 'px')};
    }
    .paragraph, .paragraph3 {
      margin-bottom: 16px;
    }
    .paragraph2 {
      margin-bottom: ${Clamp(32, 40, 40, 'px')};
    }
    .paragraph4 {
      p:not(:last-of-type){
        margin-bottom: 16px;
      }
      .cta {
        margin-top: ${Clamp(32, 40, 48, 'px')};
      }
    }
  }
`

export default Why;