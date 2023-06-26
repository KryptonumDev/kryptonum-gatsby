import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Clamp } from "../../../utils/functions";

const VisualIdentification = ({ showcase, paragraph, secondParagraph }) => {
  return (
    <Wrapper>
      <div className="wrapper">
        {showcase.map((img, i) => (
          <GatsbyImage
            key={i}
            image={img.asset.gatsbyImageData}
            alt={img.asset.altText || ''}
            className="img"
          />
        ))}
      </div>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      <ReactMarkdown className="paragraph2">{secondParagraph}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  .wrapper {
    grid-column: 3/1;
    display: grid;
    gap: 16px;
    margin-bottom: ${Clamp(32, 32, 48, 'px')};
    grid-template-areas: "a b b" "c c d";
    @media (max-width: 449px){
      grid-template-areas: "a" "b" "c" "d";
    }
    .img:nth-child(1) { grid-area: a };
    .img:nth-child(2) { grid-area: b };
    .img:nth-child(3) { grid-area: c };
    .img:nth-child(4) { grid-area: d };
  }
  .paragraph {
    font-size: ${Clamp(20, 32, 40)};
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
  }
  @media (max-width: 799px){
    .wrapper {
      grid-column: unset;
    }
    grid-template-columns: 1fr;
    .paragraph {
      margin-bottom: 16px;
    }
  }
`

export default VisualIdentification;