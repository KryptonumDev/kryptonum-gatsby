import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Skills = ({ data }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">**Skille**:</DecorativeHeading>
      <ReactMarkdown>{data}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  text-align: center;
  p:not(:last-child) {
    margin-bottom: 16px;
  }
  font-size: ${Clamp(20, 32, 30)};
`

export default Skills;