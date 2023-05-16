import React from "react";
import ReactMarkdown from 'react-markdown'
import styled from "styled-components";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from '../../../utils/functions';

const Challange = ({data}) => {
  const {challenge_Heading, challenge_Claim, challenge_Paragraph, challenge_SecondClaim, challenge_Cta} = data;
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{challenge_Heading}</DecorativeHeading>
      <ReactMarkdown>{challenge_Claim}</ReactMarkdown>
      <p>{challenge_Paragraph}</p>
      <div>
        <ReactMarkdown>{challenge_SecondClaim.data.childMarkdownRemark.rawMarkdownBody}</ReactMarkdown>
        <Button theme={challenge_Cta.theme} to={challenge_Cta.href}>{challenge_Cta.text}</Button>
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
      font-size: ${Clamp(20, 32, 32)};
    }
    &:nth-of-type(2) {
      font-size: ${Clamp(20, 22, 30)};
    }
  }
  div {
    font-size: ${Clamp(16, 22, 22)};
    p:last-of-type {
      margin-top: ${12/16}rem;
    }
    em {
      color: var(--neutral-700);
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
 
export default Challange;