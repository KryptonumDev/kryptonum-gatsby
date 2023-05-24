import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../atoms/DecorativeHeading';
import Button from '../atoms/Button';
import { Clamp } from '../../utils/functions';

const HeroTwoColumns = ({heading, subheading, cta, img}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading>{heading}</DecorativeHeading>
        <ReactMarkdown>{subheading}</ReactMarkdown>
        <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
      </header>
      <GatsbyImage
        image={img.source.asset.gatsbyImageData}
        alt={img.alt || ''}
        objectFit="contain"
        className="img"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  header {
    max-width: 684px;
  }
  h1 {
    margin-bottom: ${Clamp(28, 32, 32, "px")};
  }
  p {
    font-size: ${Clamp(20, 32, 30)};
    &:not(:last-of-type){
      margin-bottom: 1rem;
    }
  }
  .cta {
    margin-top: ${Clamp(24, 48, 48, "px")};
  }
  .img {
    max-width: 700px;
    margin-left: auto;
  }
  @media (max-width: 1409px){
    grid-template-columns: 1fr;
    header {
      max-width: unset;
    }
    .img {
      margin-left: 0;
    }
  }
  @media (max-width: 1189px){
    margin-top: ${Clamp(48, 128, 128, "px")};
  }
`
 
export default HeroTwoColumns;