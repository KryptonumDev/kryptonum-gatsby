import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions';

const CtaSection = ({
  data: {
    heading,
    cta,
    img
  },
  lighter=false
}) => {
  return (
    <Wrapper className='ctaSection' data-lighter={lighter}>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
      </header>
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img"
        objectFit="contain"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--neutral-900);
  &[data-lighter="true"]{
    border: 1px solid var(--neutral-700, #5B5F67);
    background-color: var(--neutral-950);
  }
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: ${Clamp(24, 48, 72, "px")} ${Clamp(16, 32, 72, "px")};
  border-radius: 2px;
  h2 {
    font-size: ${Clamp(28, 40, 48)};
    margin-bottom: ${Clamp(40, 40, 48, "px")};
  }
  position: relative;
  margin-top: 55px;
  .img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: calc(100% + 55px);
  }
  @media (max-width: 1289px){
    grid-template-columns: 1fr;
    margin-top: min(80%, 300px);
    .img {
      right: 50%;
      top: 0px;
      transform: translate(50%, -100%);
      bottom: unset;
      max-width: 80%;
      width: 100%;
      height: unset;
      max-height: 300px;
    }
  }
  @media (max-width: 767px){
    margin-left: calc(var(--pageMargin) * -1);
    margin-right: calc(var(--pageMargin) * -1);
  }
`
 
export default CtaSection;