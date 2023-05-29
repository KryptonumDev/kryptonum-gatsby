import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Flexibility = ({
  data: {
    flexibility_Heading,
    flexibility_Claim,
    flexibility_Paragraph,
    flexibility_SecondParagraph,
    flexibility_Cta
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{flexibility_Heading}</DecorativeHeading>
      <ReactMarkdown className="claim">{flexibility_Claim}</ReactMarkdown>
      <ReactMarkdown className="paragraph">{flexibility_Paragraph}</ReactMarkdown>
      <ReactMarkdown className="secondParagraph">{flexibility_SecondParagraph}</ReactMarkdown>
      <div className="cta-wrapper">
        {flexibility_Cta.map((cta, i) => (
          <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 32px;
  h2 {
    grid-column: 1/3;
    max-width: ${835/16}rem;
  }
  .claim {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph {
    grid-column: 2/-1;
    font-size: ${Clamp(16, 22, 22)};
  }
  .secondParagraph {
    grid-column: 2/-1;
    font-size: ${Clamp(16, 22, 22)};
  }
  .cta-wrapper {
    grid-column: 2/-1;
    width: fit-content;
  }
  @media (max-width: 859px){
    grid-template-columns: 1fr;
    gap: 0;
    h2 {
      grid-column: unset;
      margin-bottom: ${Clamp(16, 32, 32)};
    }
    .paragraph {
      grid-column: unset;
      margin: 16px 0 32px 0;
    }
    .secondParagraph {
      grid-column: unset;
    }
    .cta-wrapper {
      margin-top: ${Clamp(32, 40, 40)};
      grid-column: unset;
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
`

export default Flexibility;