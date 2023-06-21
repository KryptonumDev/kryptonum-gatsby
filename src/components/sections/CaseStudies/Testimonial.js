import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Quote } from "../../atoms/Icons";

const Testimonial = ({
  heading,
  testimonial: {
    name,
    text,
    img,
    cta,
  },
  paragraph,
  secondParagraph,
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <div className="wrapper">
        <GatsbyImage
          image={img.asset.gatsbyImageData}
          alt={img.asset.altText || ''}
          className="img"
          objectFit="contain"
          objectPosition="bottom"
        />
        <div className="info">
          <h3>{name}</h3>
          <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
        </div>
        <div className="content">
          <Quote />
          <p>{text}</p>
        </div>
      </div>
      <div className="summary">
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
        <ReactMarkdown className="paragraph2">{secondParagraph}</ReactMarkdown>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin: 0 auto ${Clamp(28, 64, 64, 'px')};
  }
  .wrapper {
    background-color: var(--neutral-900);
    border-radius: 2px;
    display: grid;
    gap: 0 48px;
    padding: 64px 32px 0;
    grid-template-columns: auto auto;
    grid-template-areas: "img info" "img content";
    .img {
      max-width: 362px;
      grid-area: img;
    }
    .info {
      grid-area: info;
      h3 {
        font-size: ${Clamp(22, 32, 30)};
        margin-bottom: 8px;
      }
    }
    .content {
      grid-area: content;
      > svg {
        display: block;
        margin: 48px 0 16px;
      }
      p {
        grid-area: text;
        font-size: ${Clamp(16, 22, 30)};
        margin-bottom: 64px;
      }
    }
  }
  @media (max-width: 999px){
    .wrapper {
      background-color: unset;
      border-radius: none;
      padding: 0;
      gap: 0 24px;
      grid-template-areas: "info info" "img content";
      .img {
        max-width: 148px;
        margin: 0 auto;
      }
      .info {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        h3 {
          margin-bottom: 0;
        }
        padding-bottom: 32px;
        margin-bottom: 32px;
        border-bottom: 1px solid var(--neutral-800);
      }
      .content {
        > svg {
          margin: 0 0 16px;
        }
        p {
          margin-bottom: 32px;
        }
      }
    }
  }
  @media (max-width: 549px){
    .wrapper {
      grid-template-areas: "info" "content" "img";
      .info {
        grid-template-columns: 1fr;
        .cta {
          justify-self: start;
        }
        h3 {
          margin-bottom: 8px;
        }
      }
      .content {
        > svg {
          width: 24px;
          height: 24px;
          margin: 0 auto 8px;
        }
        p {
          text-align: center;
        }
      }
    }
  }
  .summary {
    margin-top: 64px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 599px){
      grid-template-columns: 1fr;
    }
    gap: 16px 32px;
    .paragraph {
      font-size: ${Clamp(22, 32, 30)};
    }
    .paragraph2 {
      font-size: ${Clamp(16, 22, 22)};
    }
  }
`

export default Testimonial;