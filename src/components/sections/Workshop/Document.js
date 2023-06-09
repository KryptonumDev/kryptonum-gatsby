import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from "../../../utils/functions";

const Document = ({
  data: {
    document_Heading,
    document_Paragraph,
    document_Paragraph2,
    document_Images,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading className="heading" type="h2">{document_Heading}</DecorativeHeading>
      <ReactMarkdown className="paragraph">{document_Paragraph}</ReactMarkdown>
      <ReactMarkdown className="paragraph2">{document_Paragraph2}</ReactMarkdown>
      <div className="slider">
        <div className="slider-wrapper">
          {document_Images.map((img, i) => (
            <div className="item" key={i}>
              <GatsbyImage
                image={img.asset.gatsbyImageData}
                alt={img.asset.altText || ''}
                className="img"
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  .heading {
    grid-column: 3/1;
    max-width: ${734/16}rem;
    margin-bottom: ${Clamp(28, 48, 64, 'px')};
  }
  .paragraph {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
  }
  .slider {
    grid-column: 3/1;
    margin-top: ${Clamp(28, 48, 64, 'px')};
    .slider-wrapper {
      display: flex;
      overflow-x: auto;
      gap: 32px;
      counter-reset: counter;
    }
    position: relative;
    &::before {
      content: '';
      width: 33.3%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      background-image: linear-gradient(90deg, rgba(0,0,0,0), var(--neutral-950));
      pointer-events: none;
    }
    .item {
      counter-increment: counter;
      width: 66.6%;
      flex-shrink: 0;
      &:last-child {
        margin-right: 33.3%;
      }
      &::after {
        content: counter(counter) ".";
        font-size: ${Clamp(16, 22, 22)};
        display: block;
        margin-top: 24px;
      }
      &:nth-child(-n+9)::after {
        content: "0" counter(counter) ".";
      }
    }
  }
  @media (max-width: 999px){
    grid-template-columns: 1fr;
    .heading {
      grid-column: unset;
    }
    .paragraph {
      margin-bottom: 16px;
    }
    .slider {
      grid-column: unset;
      margin-left: calc(var(--pageMargin) * -1);
      margin-right: calc(var(--pageMargin) * -1);
      .slider-wrapper {
        padding: 0 var(--pageMargin);
      }
      &::before {
        width: 10%;
      }
      .item {
        width: 100%;
        &:last-child {
          margin-right: 0;
        }
      }
    }

  }
`

export default Document;