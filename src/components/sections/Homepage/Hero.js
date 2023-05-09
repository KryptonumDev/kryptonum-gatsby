import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { transformBToStrong } from "../../../utils/functions";
import { HeadingDecoration, ArrowTopRight } from "../../atoms/Icons";
import Button from '../../atoms/Button';

const Hero = ({homepage}) => {
  const {heroHeading, heroSubheading, heroCta, heroCaseStudies, heroCaseStudiesLink} = homepage;
  return (
    <StyledHero>
      <header>
        <div className="copy">
          <h1>
            <HeadingDecoration />
            <span dangerouslySetInnerHTML={{__html: transformBToStrong(heroHeading)}}></span>
          </h1>
          <ol>
            {heroSubheading.map((subheading, i) => (
              <li key={i}>{subheading.text}</li>
            ))}
          </ol>
        </div>
        <div className="cta-wrapper">
          {heroCta.map((cta, i) => (
            <Button
              text={cta.text}
              to={cta.href}
              theme={cta.theme}
              key={i}
            />
          ))}
        </div>
      </header>
      {heroCaseStudies.map((caseStudy, i) => (
        <div className="caseStudy">
          <GatsbyImage key={i} image={caseStudy.thumbnail.localFile.childImageSharp.gatsbyImageData} alt={caseStudy.thumbnail.alternativeText || ''} className="img" />
          <Button
            text={heroCaseStudiesLink}
            to={`projekty/${caseStudy.slug}`}
            aria-label={caseStudy.name}
          />
        </div>
      ))}
    </StyledHero>
  );
}

const StyledHero = styled.section`
  header {
    display: grid;
    align-items: flex-end;
    grid-template-columns: 1fr auto;
    margin: ${40/16}rem 0 ${172/16}rem;
    .copy {
      max-width: ${739/16}rem;
      h1 {
        margin-bottom: clamp(${28/16}rem, ${40/7.68}vw, ${72/16}rem);
        display: grid;
        grid-template-columns: auto auto;
        gap: 8px;
        svg {
          width: 0.86em;
          height: 0.86em;
          margin-top: 0.35em;
        }
      }
      ol {
        margin-left: calc(clamp(24px, ${40/7.68}vw, 48px) + 8px);
        counter-reset: ol;
        li {
          counter-increment: ol;
          list-style-type: none;
          font-size: clamp(${20/16}rem, ${32/7.68}vw, ${28/16}rem);
          display: grid;
          grid-template-columns: 32px auto;
          column-gap: clamp(${12/16}rem, ${16/7.68}vw, ${32/16}rem);
          align-items: baseline;
          &:not(:last-child){
            margin-bottom: .5rem;
          }
          &::before {
            content: "/0" counter(ol);
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
      margin: clamp(${48/16}rem, ${128/7.68}vw, ${128/16}rem) 0 clamp(${96/16}rem, ${144/7.68}vw, ${144/16}rem);
      grid-template-columns: 1fr;
      .cta-wrapper {
        margin-top: clamp(${64/16}rem, ${96/7.68}vw, ${96/16}rem);
        margin-left: calc(clamp(24px, ${40/7.68}vw, 48px) + 8px);
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
        .primary {
          width: 100%;
        }
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