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
              <li key={i}>{subheading.text}</li>
            ))}
          </ol>
        </div>
        <div className="cta-wrapper">
          {hero_Cta.map((cta, i) => (
            <Button
              text={cta.text}
              to={cta.href}
              theme={cta.theme}
              key={i}
            />
          ))}
        </div>
      </header>
      {hero_CaseStudies.map((caseStudy, i) => (
        <div className="caseStudy" key={i}>
          <GatsbyImage key={i} image={caseStudy.thumbnail.localFile.childImageSharp.gatsbyImageData} alt={caseStudy.thumbnail.alternativeText || ''} className="img" />
          <Button
            text={`${hero_CaseStudiesLink} ${caseStudy.name}`}
            to={`projekty/${caseStudy.slug}`}
            aria-label={caseStudy.name}
          />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    display: grid;
    align-items: flex-end;
    grid-template-columns: 1fr auto;
    margin: ${40/16}rem 0 ${172/16}rem;
    .copy {
      max-width: ${739/16}rem;
      h1 {
        margin-bottom: ${Clamp(28, 40, 72)};
      }
      ol {
        margin-left: calc(${Clamp(24, 40, 48)} + 8px);
        counter-reset: counter;
        li {
          counter-increment: counter;
          list-style-type: none;
          font-size: ${Clamp(20, 32, 28)};
          display: grid;
          grid-template-columns: 32px auto;
          column-gap: ${Clamp(12, 16, 32)};
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
      margin: ${Clamp(48, 128, 128)} 0 ${Clamp(96, 144, 144)};
      grid-template-columns: 1fr;
      .cta-wrapper {
        margin-top: ${Clamp(64, 96, 96)};
        margin-left: calc(${Clamp(24, 40, 48)} + 8px);
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
      margin-bottom: ${48/16}rem;
    }
    .cta {
      margin-top: ${24/16}rem;
    }
  }
`
 
export default Hero;