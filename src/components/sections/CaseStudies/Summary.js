import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const Summary = ({ paragraph, secondParagraph }) => {
  return (
    <Wrapper>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      <ReactMarkdown className="paragraph2">{secondParagraph}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 599px){
    grid-template-columns: 1fr;
  }
  gap: 16px 32px;
  .paragraph {
    font-size: ${Clamp(22, 32, 30)};
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
  }
`

export default Summary;