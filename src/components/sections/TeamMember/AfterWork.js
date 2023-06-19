import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import ReactMarkdown from "react-markdown";

const AfterWork = ({ data }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">A po **godzinach**...</DecorativeHeading>
      <ReactMarkdown>{data}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin-left: 0;
  }
  p:not(:last-child) {
    margin-bottom: 16px;
  }
  p:first-of-type, p:nth-of-type(4) {
    font-size: ${Clamp(20, 32, 30)};
    margin-bottom: 32px;
  }
  p:nth-of-type(4) {
    margin-top: 62px;
  }
  font-size: ${Clamp(16, 22, 22)};
`

export default AfterWork;