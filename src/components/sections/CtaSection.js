import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions';

const CtaSection = ({heading, cta, img}) => {
  console.log(cta);
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
      </header>
      <GatsbyImage
        image={img.localFile.childImageSharp.gatsbyImageData}
        alt={img.alternativeText || ''}
        className="img"
        objectFit="contain"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--neutral-900);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: ${32/16}rem;
  padding: ${Clamp(24, 48, 72)} ${Clamp(16, 32, 72)};
  h2 {
    font-size: ${Clamp(28, 40, 48)};
    margin-bottom: ${Clamp(40, 40, 48)};
  }
  position: relative;
  .img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 55%;
  }
  @media (max-width: 1289px){
    grid-template-columns: 1fr;
    margin-top: min(80%, 500px);
    .img {
      right: 50%;
      top: 0px;
      transform: translate(50%, -100%);
      bottom: unset;
      width: 80%;
      max-width: 500px;
    }
  }
  @media (max-width: 767px){
    margin-left: calc(var(--pageMargin) * -1);
    margin-right: calc(var(--pageMargin) * -1);
  }
`
 
export default CtaSection;