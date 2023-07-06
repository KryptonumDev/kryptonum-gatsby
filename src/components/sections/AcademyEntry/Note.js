import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import { Error } from "../../atoms/Icons";

const Note = ({ heading, paragraph, attention }) => {
  return (
    <Wrapper>
      <header>
        <ReactMarkdown components={{ 'p': 'h3'}}>{heading}</ReactMarkdown>
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      </header>
      <div className="attention">
        <Error />
        <ReactMarkdown>{attention}</ReactMarkdown>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 32px;
  @media (min-width: 999px){
    grid-template-columns: 1fr 1fr;
  }
  h3 {
    font-size: ${Clamp(22, 32, 30)};
    margin-bottom: 24px;
  }
  .paragraph, .attention {
    font-size: ${Clamp(16, 22, 22)};
    p:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  .attention {
    padding: ${Clamp(24, 24, 32, 'px')};
    border: 1px solid var(--error-400);
    svg {
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
    }
  }
`

export default Note;