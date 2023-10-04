import React from "react";
import styled from "styled-components";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from '../../../utils/functions';

const Hero = ({
  data: {
    hero_Heading,
    hero_Subheading,
    hero_List,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h1">{hero_Heading}</DecorativeHeading>
      <div>
        <DecorativeHeading type="h2">{hero_Subheading}</DecorativeHeading>
        <ol>
          {hero_List.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h1 {
    font-size: ${Clamp(22, 36, 36)};
  }
  h2 {
    font-size: ${Clamp(18, 28, 28)};
    margin-bottom: ${Clamp(24, 24, 72, 'px')};
  }
  display: grid;
  @media (min-width: 1200px){
    grid-template-columns: 1.2fr 1fr;
  }
  gap: ${Clamp(48, 72, 72, 'px')} ${Clamp(72, 72, 144, 'px')};
  ol {
    @media (min-width: 600px){
      margin-left: ${Clamp(32, 32, 82, 'px')};
    }
    font-size: ${Clamp(16, 18, 18)};
    counter-reset: counter;
    li {
      &:not(:last-child){
        margin-bottom: 8px;
      }
      counter-increment: counter;
      list-style-type: none;
      display: grid;
      align-items: flex-end;
      grid-template-columns: 32px 1fr;
      gap: ${Clamp(8, 32, 32, 'px')};
      &::before {
        content: "/" counter(counter);
        display: block;
      }
      &:nth-child(-n+9)::before {
        content: "/0" counter(counter);
      }
    }
  }
`

export default Hero;