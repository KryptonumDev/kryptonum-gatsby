import React from "react";
import ReactMarkdown from 'react-markdown'
import styled from "styled-components";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from '../../../utils/functions';

const Conquest = ({data}) => {
  const {conquest_Heading, conquest_Claim, conquest_Paragraph, conquest_SecondClaim, conquest_Cta} = data;
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{conquest_Heading}</DecorativeHeading>
      <ReactMarkdown>{conquest_Claim}</ReactMarkdown>
      <p>{conquest_Paragraph}</p>
      <div>
        <ReactMarkdown>{conquest_SecondClaim.data.childMarkdownRemark.rawMarkdownBody}</ReactMarkdown>
        <Button theme={conquest_Cta.theme} to={conquest_Cta.href}>{conquest_Cta.text}</Button>
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
      margin-top: 12px;
      font-size: ${14/16}em;
    }
    em {
      color: var(--neutral-600);
      font-style: normal;
    }
    .cta {
      margin-top: 48px;
    }
  }
  @media (max-width: 1149px){
    grid-template-columns: 1fr;
    gap: 0;
    h2 {
      margin-bottom: 32px;
    }
    > p {
      &:nth-of-type(1) {
        margin-bottom: 24px;
      }
      &:nth-of-type(2) {
        margin-bottom: 1rem;
      }
    }
    div {
      .cta {
        margin-top: 32px;
      }
    }
  }
`
 
export default Conquest;