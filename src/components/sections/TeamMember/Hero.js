import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../../atoms/DecorativeHeading';
import { Clamp } from "../../../utils/functions";

const Hero = ({name, cryptonym, img}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading>{name}</DecorativeHeading>
        <h3 className="strong">{cryptonym}</h3>
      </header>
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img person-border"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: end;
  justify-content: center;
  gap: 32px;
  header {
    h1 {
      margin-bottom: 8px;
    }
    h3 {
      font-size: ${Clamp(16, 22, 22)};
      &::before {
        content: "01/";
        -webkit-text-fill-color: var(--neutral-200);
        margin-right: 16px;
      }
    }
  }
  .img {
    max-width: 356px;
  }
  @media (max-width: 549px){
    grid-template-columns: 1fr;
    .img {
      order: -1;
    }
  }
`

export default Hero;