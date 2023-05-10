import React from "react";
import ReactMarkdown from 'react-markdown'
import styled from "styled-components";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Conquest = ({data}) => {
  const {conquest_Heading, conquest_Claim, conquest_Paragraph, conquest_SecondClaim, conquest_Cta} = data;
  return (
    <Wrapper>
      <DecorativeHeading type="h2" text={conquest_Heading} />
      <ReactMarkdown
        children={conquest_Claim}
      />
      <p>{conquest_Paragraph}</p>
      <div>
        <ReactMarkdown
          children={conquest_SecondClaim.data.childMarkdownRemark.rawMarkdownBody}
        />
        <Button
          theme={conquest_Cta.theme}
          text={conquest_Cta.text}
          to={conquest_Cta.href}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 80px 32px;
  > p {
    &:nth-of-type(1) {
      font-size: clamp(${20/16}rem, ${32/7.68}vw, ${32/16}rem);
    }
    &:nth-of-type(2) {
      font-size: clamp(${20/16}rem, ${22/7.68}vw, ${30/16}rem);
    }
  }
  div {
    font-size: clamp(1rem, ${22/7.68}vw, ${22/16}rem);
    p:last-of-type {
      margin-top: ${12/16}rem;
      font-size: ${14/16}em;
    }
    em {
      color: var(--neutral-600);
      font-style: normal;
    }
    .cta {
      margin-top: ${48/16}rem;
    }
  }
  @media (max-width: 1149px){
    grid-template-columns: 1fr;
    gap: 0;
    h2 {
      margin-bottom: ${32/16}rem;
    }
    > p {
      &:nth-of-type(1) {
        margin-bottom: ${24/16}rem;
      }
      &:nth-of-type(2) {
        margin-bottom: 1rem;
      }
    }
    div {
      .cta {
        margin-top: ${32/16}rem;
      }
    }
  }
`
 
export default Conquest;