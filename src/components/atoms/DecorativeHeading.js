import React from "react";
import ReactMarkdown from "react-markdown";
import { HeadingDecoration } from "./Icons";
import styled from "styled-components";

const DecorativeHeading = ({type="h1", children}) => {
  return (
    <Wrapper as={type}>
      <HeadingDecoration />
      <ReactMarkdown
        components={{
          p: 'span',
        }}
      >{children}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.h1`
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
  width: fit-content;
  svg {
    width: 0.86em;
    height: 0.86em;
    margin-top: 0.25em;
  }
`

export default DecorativeHeading;