import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Showcase = ({ heading, img, paragraph, paragraph2 }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img"
      />
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      <ReactMarkdown className="paragraph2">{paragraph2}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  @media (min-width: 999px){
    grid-template-columns: 1fr 1fr;
    h2, .img {
      grid-column: 3/1;
    }
  }
  column-gap: 32px;
  h2 {
    margin-bottom: ${Clamp(28, 48, 72, 'px')}
  }
  .img {
    margin-bottom: ${Clamp(24, 48, 48, 'px')};
  }
  .paragraph {
    font-size: ${Clamp(20, 32, 32)};
    margin-bottom: 24px;
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
  }
`

export default Showcase;