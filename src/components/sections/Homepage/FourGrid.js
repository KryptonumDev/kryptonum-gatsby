import React from "react";
import ReactMarkdown from 'react-markdown'
import styled from "styled-components";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from '../../../utils/functions';

const FourGrid = ({ heading, claim, paragraph, secondClaim, cta }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ReactMarkdown>{claim}</ReactMarkdown>
      <p>{paragraph}</p>
      <div>
        <ReactMarkdown>{secondClaim}</ReactMarkdown>
        <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
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
 
export default FourGrid;