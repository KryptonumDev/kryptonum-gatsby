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
        image={img.localFile.childImageSharp.gatsbyImageData}
        alt={img.alternativeText || ''}
        objectFit="contain"
        className="img"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: ${40/16}rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${32/16}rem;
  header {
    max-width: ${683/16}rem;
  }
  h1 {
    margin-bottom: ${Clamp(28, 32, 32)};
  }
  p {
    font-size: ${Clamp(20, 32, 30)};
    &:not(:last-of-type){
      margin-bottom: 1rem;
    }
  }
  .cta {
    margin-top: ${Clamp(24, 48, 48)};
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
    margin-top: ${Clamp(48, 128, 128)};
  }
`
 
export default HeroTwoColumns;