import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Quote } from "../../atoms/Icons";

const heading = "**Opinia** klienta";

const Testimonial = ({ data: { name, text, cta, img }}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <div className="hr"></div>
      <div className="author">
        <GatsbyImage
          image={img.asset.gatsbyImageData}
          alt={img.asset.altText || ''}
          className="img"
          objectFit="contain"
          objectPosition='top'
        />
        <div>
          <h3>{name}</h3>
          <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
        </div>
      </div>
      <div className="content">
        <Quote />
        <p>{text}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr auto auto 2fr;
  align-items: center;
  .hr {
    height: 100%;
    min-height: 550px;
    width: 1px;
    margin: 0 ${Clamp(48, 64, 120, 'px')};
    background-color: var(--neutral-700);
  }
  .author {
    .img {
      width: ${Clamp(96, 144, 156, 'px')};
      height: ${Clamp(96, 144, 156, 'px')};
      border: 1px solid var(--neutral-200);
      border-radius: 50%;
      img {
        padding: 4px;
        border-radius: inherit;
      }
    }
    text-align: center;
    h3 {
      font-size: ${Clamp(16, 18, 18)};
      margin: ${Clamp(12, 24, 24, 'px')} auto ${Clamp(4, 12, 12, 'px')};
    }
    a {
      font-size: ${Clamp(16, 18, 18)};
    }
  }
  .content {
    margin-left: ${Clamp(48, 64, 120, 'px')};
    svg {
      width: ${Clamp(24, 48, 48, 'px')};
      height: ${Clamp(24, 48, 48, 'px')};
      margin-bottom: 16px;
    }
    p {
      font-size: ${Clamp(16, 18, 18)};
    }
  }
  @media (max-width: 999px){
    grid-template-columns: 1fr 2fr;
    h2 {
      margin: 0 auto;
      grid-column: 3/1;
    }
    .hr {
      height: 1px;
      min-height: unset;
      width: 100%;
      margin: ${Clamp(16, 32, 32, 'px')} 0 ${Clamp(32, 32, 72, 'px')};
      grid-column: 3/1;
    }
  }
  @media (max-width: 499px){
    grid-template-columns: 1fr;
    h2 {
      grid-column: unset;
    }
    .hr {
      height: 1px;
      min-height: unset;
      width: 100%;
      margin: ${Clamp(16, 32, 32, 'px')} 0 ${Clamp(32, 32, 72, 'px')};
      grid-column: unset;
    }
    .author {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 16px;
      text-align: left;
      align-items: center;
      h3 {
        margin: 0 0 4px 0;
      }
    }
    .content {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`

export default Testimonial;