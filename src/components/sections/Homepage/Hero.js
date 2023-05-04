import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { transformBToStrong } from "../../../utils/functions";
import { HeadingDecoration, ArrowTopRight } from "../../atoms/Icons";

const Hero = ({homepage}) => {
  const {heroHeading, heroSubheading, heroCta, heroImg} = homepage;
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
            <Link
              className={`cta ${cta.theme}`}
              key={i}
              to={cta.href}
              data-text={cta.theme === "secondary" ? cta.text : undefined}
            >
              <span>{cta.text}</span>
              <ArrowTopRight />
            </Link>
          ))}
        </div>
      </header>
      <div className="hero-img">
        {heroImg.map((img, i) => (
          <GatsbyImage key={i} image={img.localFile.childImageSharp.gatsbyImageData} alt={img.alternativeText || ''} />
        ))}
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: flex-end;
    .copy {
      max-width: ${739/16}rem;
      h1 {
        margin: ${40/16}rem 0 ${72/16}rem;
        display: flex;
        align-items: baseline;
        svg {
          width: clamp(24px, ${40/7.68}vw, 48px);
          flex-shrink: 0;
          margin-right: 12px;
        }
      }
      ol {
        margin-left: clamp(24px, ${40/7.68}vw, 48px);
        padding-left: 12px;
        counter-reset: ol;
        li {
          counter-increment: ol;
          list-style-type: none;
          font-size: clamp(${20/16}rem, ${32/7.68}vw, ${28/16}rem);
          &::before {
            content: "/0" counter(ol);
            width: 2rem;
            display: inline-block;
            font-size: 1rem;
            margin-right: clamp(${12/16}rem, ${16/7.68}vw, ${32/16}rem);
            line-height: 1;
          }
        }
      }
    }
  }
  .hero-img {
    margin-top: 89px;
    img {
      width: 100%;
    }
  }
`
 
export default Hero;