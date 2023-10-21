import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";

const ImageAndStandout = ({ heading, paragraph, standout, img, reversed }) => {
  return (
    <Wrapper className={reversed ? 'reversed' : ''}>
      {heading && (
        <DecorativeHeading type="h2" className="heading">{heading}</DecorativeHeading>
      )}
      <div className="column">
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
        {standout && (
          <ReactMarkdown className="standout">{standout}</ReactMarkdown>
        )}
        <GatsbyImage
          image={img.asset.gatsbyImageData}
          alt={img.asset.altText || ''}
          className="img"
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .heading {
    max-width: ${734/16}rem;
  }
  .paragraph p:first-child, .standout {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph {
    font-size: ${Clamp(16, 22, 22)};
    ol {
      counter-reset: counter;
      display: grid;
      gap: 16px;
      li {
        list-style-type: none;
        counter-increment: counter;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        padding-top: .4em;
        &::before {
          content: counter(counter);
          margin-top: -.4em;
          width: ${Clamp(42, 48, 54, 'px')};
          height: ${Clamp(42, 48, 54, 'px')};
          border: 1px solid var(--neutral-800);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &:nth-child(-n+10)::before {
          content: "0" counter(counter);
        }
      }
    }
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
    }
  }
  &.reversed {
    .column {
      grid-template-areas: "img paragraph" "img standout";
    }
    .img {
      margin-left: 0;
      margin-right: 112px;
    }
  }
  @media (max-width: 1099px){
    .column {
      grid-template-columns: 1fr;
      gap: 0;
      grid-template-areas: "img" "paragraph" "standout";
      .img {
        margin-inline: 0;
        margin-bottom: 40px;
      }
    }
    &.reversed {
      .column {
        grid-template-areas: "img" "paragraph" "standout";
      }
    }
  }
`

export default ImageAndStandout;