import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Standout = ({ heading, paragraph }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--neutral-900);
  padding: ${Clamp(24, 40, 64, 'px')} ${Clamp(16, 40, 110, 'px')};
  @media (max-width: 599px){
    margin: 0 calc(var(--pageMargin) * -1);
    padding-inline: 16px;
  }
  border-radius: 2px;
  h2 {
    margin-bottom: ${Clamp(32, 48, 48, 'px')}
  }
  .paragraph {
    font-size: ${Clamp(16, 22, 22)};
    p:not(:last-child){
      margin-bottom: 16px;
    }
  }
`

export default Standout;