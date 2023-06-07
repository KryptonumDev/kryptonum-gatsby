import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import { Star } from "../../atoms/Icons";

const FaqWhy = ({
  data: {
    heading,
    paragraph,
    list,
    summary,
  }
}) => {
  return (
    <Wrapper>
      <div className="copy">
        <ReactMarkdown className="heading">{heading}</ReactMarkdown>
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      </div>
      <ul className="list">
        {list.map((item, i) => (
          <li key={i}>
            <Star />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <ReactMarkdown className="summary">{summary}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .copy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .heading, .summary {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph, .list {
    font-size: ${Clamp(16, 22, 22)};
  }
  .list {
    margin: ${Clamp(24, 24, 64, 'px')} 0 ${Clamp(32, 48, 48, 'px')};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    li {
      list-style-type: none;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
    }
  }
  .summary {
    max-width: ${1000/16}rem;
    text-align: center;
    margin: 48px auto 0;
  }
  @media (max-width: 899px){
    .copy {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .list {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
`

export default FaqWhy;