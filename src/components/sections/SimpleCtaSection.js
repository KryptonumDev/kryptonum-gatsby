import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions';

const SimpleCtaSection = ({ data: { heading, cta } }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2" decoration={false}>{heading}</DecorativeHeading>
      <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: ${Clamp(80, 144, 144, "px")};
  h2 {
    max-width: ${1280/16}rem;
    margin: 0 auto ${Clamp(32, 40, 48, "px")};
    font-size: ${Clamp(28, 46, 60)};
  }
  text-align: center;
  justify-content: center;
`
 
export default SimpleCtaSection;