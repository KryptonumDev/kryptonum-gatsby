import React from "react";
import styled from "styled-components";
import { HeadingDecoration } from "../../atoms/Icons";

const Hero = ({homepage}) => {
  const {heroHeading, heroSubheading, heroCtaprimary, heroCrasecondary, heroShowcase} = homepage;
  return (
    <StyledHero>
      <div className="max-width">
        <header>
          <h1>
            <HeadingDecoration />
            <span dangerouslySetInnerHTML={{__html: heroHeading}}></span>
          </h1>
          <ol>
            {heroSubheading.map((subheading, i) => (
              <li key={i}>{subheading.text}</li>
            ))}
          </ol>
        </header>
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  header {
    max-width: ${683/13.66}vw;
    h1 {
      margin: ${40/16}rem 0 ${72/16}rem;
      display: flex;
      align-items: baseline;
      svg {
        width: ${40/13.66}vw;
        height: auto;
        flex-shrink: 0;
        margin-right: 12px;
      }
    }
  }

`
 
export default Hero;