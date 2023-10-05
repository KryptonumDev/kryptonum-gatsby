import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions';

const SimpleCtaSection = ({ data: { heading, cta } }) => {
  return (
    <Wrapper className="simpleCtaSection">
      <DecorativeHeading type="h2" decoration={false}>{heading}</DecorativeHeading>
      {cta.href && (
        <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    max-width: ${800/16}rem;
    margin: 0 auto ${Clamp(32, 40, 48, "px")};
    font-size: ${Clamp(18, 28, 28)};
  }
  text-align: center;
  justify-content: center;
`
 
export default SimpleCtaSection;