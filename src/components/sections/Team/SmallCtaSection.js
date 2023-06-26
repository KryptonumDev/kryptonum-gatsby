import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";

const SmallCtaSection = ({
  data: {
    smallCta_Heading,
    smallCta_Cta,
    smallCta_Heading2,
    smallCta_Cta2,
  }
}) => {
  return (
    <Wrapper>
      <ReactMarkdown components={{'p': 'h3'}} className="heading">{smallCta_Heading}</ReactMarkdown>
      <Button theme={smallCta_Cta.theme} to={smallCta_Cta.href} className="cta1">{smallCta_Cta.text}</Button>
      <ReactMarkdown components={{'p': 'h3'}} className="heading2">{smallCta_Heading2}</ReactMarkdown>
      <Button theme={smallCta_Cta2.theme} to={smallCta_Cta2.href} className="cta2">{smallCta_Cta2.text}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "heading heading2" "cta1 cta2";
  justify-content: space-between;
  gap: ${Clamp(24, 40, 48, 'px')} 32px;
  h3 {
    font-size: ${Clamp(20, 30, 32)};
    max-width: ${350/16}rem;
  }
  .heading { grid-area: heading }
  .cta1 { grid-area: cta1 }
  .heading2 {
    grid-area: heading2;
    text-align: right;
  }
  .cta2 {
    grid-area: cta2;
    justify-self: end;
  }
  @media (max-width: 899px){
    max-width: ${600/16}rem;
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-template-areas: unset;
    gap: 0;
    text-align: center;
    h3 {
      max-width: unset;
      margin-bottom: 24px;
    }
    .heading { grid-area: unset; }
    .cta1 { grid-area: unset; }
    .heading2 {
      grid-area: unset;
      text-align: center;
      margin-top: ${Clamp(48, 72, 72, 'px')};
    }
    .cta2 {
      grid-area: unset;
      justify-self: center;
    }

  }
`

export default SmallCtaSection;