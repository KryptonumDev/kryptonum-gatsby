import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const ColumnText = ({ heading, paragraph }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 32px;
  @media (min-width: 1149px){
    grid-template-columns: 1fr 1fr;
  }
  .paragraph {
    font-size: ${Clamp(16, 22, 22)};
    p:first-child {
      font-size: ${Clamp(20, 32, 30)};
    }
    p:not(:last-child){
      margin-bottom: 16px;
    }
  }
`

export default ColumnText;