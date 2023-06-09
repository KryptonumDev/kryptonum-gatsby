import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const FaqCopy = ({
  data: {
    img,
    heading,
    paragraph,
    summary
  }
}) => {
  return (
    <Wrapper className="answer">
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img"
      />
      <div className="copy">
        <ReactMarkdown className="heading">{heading}</ReactMarkdown>
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
        <ReactMarkdown className="summary">{summary}</ReactMarkdown>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr;
  column-gap: 144px;
  .copy {
    display: grid;
    grid-template-rows: auto auto 1fr;
    .heading {
      font-size: ${Clamp(20, 32, 30)};
      margin-bottom: ${Clamp(24, 32, 32, 'px')};
    }
    .summary {
      align-self: end;
      padding: 32px 0;
      margin-top: ${Clamp(32, 48, 48, 'px')};
      border-top: 1px solid var(--neutral-800);
      border-bottom: 1px solid var(--neutral-800);
    }
    .paragraph, .summary {
      font-size: ${Clamp(16, 22, 22)};
      p:not(:last-of-type) {
        margin-bottom: ${Clamp(16, 24, 24, 'px')};
      }
    }
  }
  @media (max-width: 949px){
    grid-template-columns: 1fr;
    gap: ${Clamp(32, 48, 48, 'px')};
  }
`

export default FaqCopy;