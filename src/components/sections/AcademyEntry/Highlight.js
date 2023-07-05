import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Highlight = ({ heading, paragraph }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: ${Clamp(34, 48, 64, 'px')} ${Clamp(16, 64, 110, 'px')};
  background-color: var(--neutral-900);
  border-radius: 2px;
  h2 {
    margin-bottom: ${Clamp(28, 32, 48, 'px')}
  }
  .paragraph {
    font-size: ${Clamp(16, 28, 30)};
    p:not(:last-child){
      margin-bottom: 16px;
    }
  }
  @media (max-width: 999px){
    padding: ${Clamp(32, 48, 64, 'px')} var(--pageMargin);
    margin: 0 calc(var(--pageMargin) * -1);
  }
`

export default Highlight;