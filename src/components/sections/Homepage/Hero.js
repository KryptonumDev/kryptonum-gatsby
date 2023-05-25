import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from '../../atoms/Button';
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from '../../../utils/functions';

const Hero = ({data}) => {
  const {hero_Heading, hero_Subheading, hero_Cta, hero_CaseStudies, hero_CaseStudiesLink} = data;
  return (
    <Wrapper>
      <header>
        <div className="copy">
          <DecorativeHeading type="h1">{hero_Heading}</DecorativeHeading>
          <ol>
            {hero_Subheading.map((subheading, i) => (
              <li key={i}>{subheading}</li>
            ))}
          </ol>
        </div>
        <div className="cta-wrapper">
          <Button to={hero_Cta.href} theme={hero_Cta.theme}>{hero_Cta.text}</Button>
        </div>
      </header>
      {hero_CaseStudies.map((caseStudy, i) => (
        <div className="caseStudy" key={i}>
          <GatsbyImage key={i} image={caseStudy.thumbnail.source.asset.gatsbyImageData} alt={caseStudy.thumbnail.alt || ''} className="img" />
          <Button to={`projekty/${caseStudy.slug.current}`} aria-label={caseStudy.name}>{`${hero_CaseStudiesLink} ${caseStudy.name}`}</Button>
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    display: grid;
    align-items: flex-end;
    grid-template-columns: ${740/16}rem auto;
    margin-bottom: 172px;
    .copy {
      max-width: ${740/16}rem;
      h1 {
        margin-bottom: ${Clamp(28, 40, 72, "px")};
      }
      ol {
        margin-left: calc(${Clamp(24, 40, 48, "px")} + 8px);
        counter-reset: counter;
        li {
          counter-increment: counter;
          list-style-type: none;
          font-size: ${Clamp(20, 32, 28)};
          display: grid;
          grid-template-columns: 32px auto;
          column-gap: ${Clamp(12, 16, 32, "px")};
          align-items: baseline;
          &:not(:last-child){
            margin-bottom: .5rem;
          }
          &::before {
            content: "/0" counter(counter);
            display: inline-block;
            font-size: 1rem;
          }
        }
      }
    }
    .cta-wrapper {
      align-items: flex-end;
    }
  }
  @media (min-width: 500px){
    .caseStudy {
      overflow: hidden;
      position: sticky;
      top: 0;
      height: 100vh;
      height: 100dvh;
      .img {
        width: 100%;
        height: 100%;
      }
      .cta {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6), rgba(0,0,0,0));
        width: 100%;
        padding: 50% 0;
      }
    }
  }
  @media (max-width: 1189px){
    header {
      margin-bottom: ${Clamp(96, 144, 144, "px")};
      grid-template-columns: 1fr;
      .cta-wrapper {
        margin-top: ${Clamp(64, 96, 96, "px")};
        margin-left: calc(${Clamp(24, 40, 48, "px")} + 8px);
        align-items: flex-start;
        flex-direction: column-reverse;
      }
    }
    .caseStudy {
      margin: 0 calc(var(--pageMargin) * -1);
    }
  }
  @media (max-width: 499px){
    header {
      .copy {
        ol {
          margin-left: 0;
        }
      }
      .cta-wrapper {
        margin-left: 0;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .caseStudy {
    text-align: center;
    &:not(:last-child){
      margin-bottom: 48px;
    }
    .cta {
      margin-top: 24px;
    }
  }
`
 
export default Hero;