import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const Bio = ({ data }) => {
  return (
    <Wrapper>
      <ReactMarkdown>{data}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
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

export default Bio;