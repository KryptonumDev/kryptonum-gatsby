import React from "react";
import { HeadingDecoration } from "./Icons";
import { transformBToStrong } from "../../utils/functions";
import styled from "styled-components";

const DecorativeHeading = ({type="h1", text}) => {
  return (
    <Wrapper as={type}>
      <HeadingDecoration />
      <span dangerouslySetInnerHTML={{__html: transformBToStrong(text)}}></span>
    </Wrapper>
  );
}

const Wrapper = styled.h1`
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 8px;
  svg {
    width: 0.86em;
    height: 0.86em;
    margin-top: 0.35em;
  }
`

export default DecorativeHeading;