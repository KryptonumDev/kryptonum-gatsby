import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Benefits = ({ data }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">Do zespołu **wnoszę...**</DecorativeHeading>
      <ReactMarkdown>{data}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  text-align: center;
  p:not(:last-child) {
    margin-bottom: 16px;
  }
  p:first-of-type, p:nth-of-type(4) {
    font-size: ${Clamp(20, 32, 30)};
  }
  p:nth-of-type(4) {
    margin-top: 62px;
  }
  font-size: ${Clamp(16, 22, 22)};
`

export default Benefits;