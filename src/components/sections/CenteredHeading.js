import React from "react";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions';
import ReactMarkdown from "react-markdown";

const CenteredHeading = ({
  data: {
    heading,
    paragraph,
  },
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    margin: 0 auto;
    max-width: calc(827rem/16);
    @media (min-width: 600px){
      text-align: center;
    }
    h2 {
      margin-bottom: ${Clamp(16, 32, 32, 'px')};
      font-size: ${Clamp(18, 28, 28)};
    }
    .paragraph {
      margin: 0 auto;
      max-width: calc(627rem/16);
      font-size: ${Clamp(16, 18, 18)};
    }
  }
`

export default CenteredHeading;