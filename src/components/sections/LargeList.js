import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";

const LargeList = ({ isHeading, title, list, paragraph, paragraph2 }) => {
  return (
    <Wrapper>
      {isHeading ? (
        <DecorativeHeading type="h3" className="title heading">{title}</DecorativeHeading>
      ) : (
        <ReactMarkdown className="title titleParagraph">{title}</ReactMarkdown>
      )}
      <ul className="wrapper">
        {list.map((item, i) => (
          <li className="item" key={i}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {paragraph2 ? (
        <div className="copy">
          <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
          <ReactMarkdown className="paragraph2">{paragraph2}</ReactMarkdown>
        </div>
      ) : (
        <ReactMarkdown className="paragraph singleParagraph">{paragraph}</ReactMarkdown>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .title {
    margin: ${Clamp(32, 64, 96, 'px')} auto ${Clamp(28, 48, 64, 'px')};
    &:not(.heading){
      text-align: center;
      font-size: ${Clamp(20, 32, 30)};
    }
  }
  .wrapper {
    counter-reset: counter;
    margin-bottom: ${Clamp(28, 48, 64, 'px')};
    .item {
      font-size: ${Clamp(20, 32, 30)};
      list-style-type: none;
      border-top: 1px solid var(--neutral-800);
      border-bottom: 1px solid var(--neutral-800);
      padding: ${Clamp(24, 40, 48, 'px')} 0;
      &:not(:last-child){
        margin-bottom: ${Clamp(32, 48, 64, 'px')};
      }
      counter-increment: counter;
      display: grid;
      span {
        display: grid;
        max-width: ${840/16}rem;
        margin: 0 auto;
        grid-template-columns: auto 1fr;
        column-gap: ${Clamp(8, 16, 32, 'px')};
        &::before {
          content: "/" counter(counter);
          display: inline-block;
          width: ${Clamp(55, 90, 160, 'px')};
          font-size: ${Clamp(28, 46, 60)};
          color: var(--primary-400);
          background-image: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      &:nth-child(even) span::before {
        order: 1;
      }
      &:nth-child(-n+9) span::before {
        content: "/0" counter(counter);
      }
    }
  }
  .copy {
    display: grid;
    gap: 16px 32px;
    p:not(:last-child){
      margin-bottom: 16px;
    }
    @media (min-width: 949px){
      grid-template-columns: 1fr 1fr;
    }
  }
  .paragraph {
    font-size: ${Clamp(20, 32, 30)};
    &.singleParagraph {
      max-width: ${840/16}rem;
      margin: 0 auto;
    }
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
  }
`

export default LargeList;