import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const Develop = ({
  data: {
    develop_Paragraph1,
    develop_Paragraph2,
    develop_Paragraph3,
    develop_Paragraph4,
  }
}) => {
  return (
    <Wrapper>
      <ReactMarkdown className="paragraph1">{develop_Paragraph1}</ReactMarkdown>
      <ReactMarkdown className="paragraph2">{develop_Paragraph2}</ReactMarkdown>
      <ReactMarkdown className="paragraph3">{develop_Paragraph3}</ReactMarkdown>
      <ReactMarkdown className="paragraph4">{develop_Paragraph4}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px 32px;
  .paragraph1, .paragraph3 {
    max-width: ${400/16}rem;
  }
  .paragraph1, .paragraph2, .paragraph3 {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph4 {
    font-size: ${Clamp(16, 22, 22)};
    p:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  @media (max-width: 999px){
    grid-template-columns: 1fr;
    gap: 16px;
    .paragraph1, .paragraph3 {
      max-width: unset;
    }
    .paragraph2 {
      margin-bottom: 24px;
    }
  }
`

export default Develop;