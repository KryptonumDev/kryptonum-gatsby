import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Brandbook = ({
  data: {
    brandbook_Heading,
    brandbook_Paragraph,
    brandbook_Standout,
    brandbook_Img,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2" className="heading">{brandbook_Heading}</DecorativeHeading>
      <div className="column">
        <ReactMarkdown className="paragraph">{brandbook_Paragraph}</ReactMarkdown>
        <ReactMarkdown className="standout">{brandbook_Standout}</ReactMarkdown>
        <GatsbyImage
          image={brandbook_Img.asset.gatsbyImageData}
          alt={brandbook_Img.asset.altText}
          className="img"
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .paragraph p:first-child, .standout {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph {
    font-size: ${Clamp(16, 22, 22)};
  }
  .column {
    margin-top: ${Clamp(28, 48, 72, 'px')};
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    grid-template-areas: "paragraph img" "standout img";
    .paragraph {
      grid-area: paragraph;
      p:not(:last-child){
        margin-bottom: 16px;
      }
      p:first-child {
        margin-bottom: 24px;
      }
    }
    .standout {
      margin-top: ${Clamp(32, 48, 48, 'px')};
      grid-area: standout;
      align-self: end;
      padding: ${Clamp(24, 32, 32, 'px')} 0;
      background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                  var(--gradient) border-box;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
    }
    .img {
      grid-area: img;
      margin-left: 112px;
      max-width: 688px;
    }
  }
  @media (max-width: 1099px){
    .column {
      grid-template-columns: 1fr;
      gap: 0;
      grid-template-areas: "img" "paragraph" "standout";
      .img {
        margin-left: 0;
        margin-bottom: 40px;
      }
    }

  }
`

export default Brandbook;