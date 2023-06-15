import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../atoms/DecorativeHeading';
import Button from '../atoms/Button';
import { Clamp } from '../../utils/functions';

const HeroTwoColumns = ({heading, paragraph, cta, img}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading className="heading">{heading}</DecorativeHeading>
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
        {cta?.text && (
          <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
        )}
      </header>
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        objectFit="contain"
        className="img"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  header {
    max-width: ${684/16}rem;
    .heading {
      margin-bottom: ${Clamp(28, 32, 32, "px")};
    }
    .paragraph {
      font-size: ${Clamp(20, 32, 30)};
      p:not(:last-of-type){
        margin-bottom: 1rem;
      }
    }
    .cta {
      margin-top: ${Clamp(24, 48, 48, "px")};
    }
  }
  .img {
    max-width: 600px;
    max-height: 600px;
    margin: 0 auto;
  }
  @media (max-width: 1409px){
    grid-template-columns: 1fr;
    header {
      max-width: unset;
    }
  }
`
 
export default HeroTwoColumns;