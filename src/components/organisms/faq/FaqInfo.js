import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const FaqInfo = ({
  data: {
    paragraph,
    firstHeading,
    firstList,
    secondHeading,
    secondList,
    thirdHeading,
    thirdList,
    summary,
  }
}) => {
  return (
    <Wrapper className="answer">
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      <DecorativeHeading className="listHeading" type="h3">{firstHeading}</DecorativeHeading>
      <ul className="list">
        {firstList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <DecorativeHeading className="listHeading" type="h3">{secondHeading}</DecorativeHeading>
      <ul className="list">
        {secondList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <DecorativeHeading className="listHeading" type="h3">{thirdHeading}</DecorativeHeading>
      <ul className="list">
        {thirdList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ReactMarkdown className="summary">{summary}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .paragraph, .listHeading, .summary {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph {
    max-width: ${970/16}rem;
    margin-bottom: ${Clamp(40, 40, 74, 'px')};
  }
  .listHeading {
    margin-bottom: ${Clamp(24, 32, 48, 'px')};
    &:not(:first-of-type) {
      margin-top: ${Clamp(40, 48, 64, 'px')};
    }
  }
  .list {
    font-size: ${Clamp(16, 22, 22)};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    counter-reset: counter;
    li {
      list-style-type: none;
      padding: ${Clamp(20, 32, 32, 'px')};
      border: 1px solid var(--neutral-800);
      counter-increment: counter;
      &::before {
        content: "/0" counter(counter);
        display: block;
        margin-bottom: ${Clamp(8, 16, 32, "px")};
      }
    }
  }
  .summary {
    max-width: ${1000/16}rem;
    text-align: center;
    margin: 48px auto 0;
  }
  @media (max-width: 749px){
    .list {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
`

export default FaqInfo;