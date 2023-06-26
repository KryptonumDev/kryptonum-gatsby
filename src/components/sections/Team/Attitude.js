import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Attitude = ({
  data: {
    attitude_Heading,
    attitude_Paragraph,
    attitude_Claim,
    attitude_Img,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2" className="heading">{attitude_Heading}</DecorativeHeading>
        <ReactMarkdown className="paragraph">{attitude_Paragraph}</ReactMarkdown>
      </header>
      <GatsbyImage
        image={attitude_Img.asset.gatsbyImageData}
        alt={attitude_Img.asset.altText || ''}
        className="img"
      />
      <ReactMarkdown className="claim">{attitude_Claim}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
  .claim,
  .paragraph {
    font-size: ${Clamp(20, 30, 32)};
  }
  .heading {
    margin-bottom: ${Clamp(24, 48, 64, 'px')};
  }
  .paragraph {
    text-align: right;
    margin: 0 auto;
    max-width: ${300/16}rem;
  }
  .claim {
    grid-column: 2/-1;
  }
  .img {
    align-self: center;
  }
  @media (max-width: 899px){
    grid-template-columns: 1fr;
    gap: 24px;
    .paragraph {
      margin: 0 0 0 auto;
    }
    .claim {
      grid-column: unset;
    }
  }
`

export default Attitude;