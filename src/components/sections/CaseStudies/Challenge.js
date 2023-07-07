import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Star } from "../../atoms/Icons";

const Challenge = ({ heading, paragraph, claim }) => {
  return (
    <>
      <Wrapper>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <ReactMarkdown
          className="paragraph"
          components={{
            li: ({ children }) => <li><Star /><span>{children}</span></li>
          }}
        >{paragraph}</ReactMarkdown>
      </Wrapper>
      <Claim components={{ 'p': 'h3' }}>{claim}</Claim>
    </>
  );
}

const Wrapper = styled.section`
  padding: ${Clamp(24, 40, 64, 'px')} ${Clamp(0, 40, 110, 'px')};
  background-color: var(--neutral-900);
  border-radius: 2px;
  h2 {
    margin-bottom: ${Clamp(32, 48, 48, 'px')};
  }
  .paragraph {
    font-size: ${Clamp(16, 22, 30)};
    p:not(:last-child) {
      margin-bottom: 16px;
    }
    ul {
      list-style-type: none;
      li {
        display: grid;
        grid-template-columns: 32px 1fr;
        align-items: baseline;
        &:not(:last-child){
          margin-bottom: 16px;
        }
      }
    }
  }
  @media (max-width: 499px){
    margin: 0 calc(var(--pageMargin) * -1);
    padding-inline: var(--pageMargin);
  }
`

const Claim = styled(ReactMarkdown)`
  @media (min-width: 599px){
    text-align: center;
  }
  h3 {
    font-size: ${Clamp(28, 46, 60)};
  }
`

export default Challenge;