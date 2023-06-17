import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";

const MasonryList = ({ heading, paragraph, paragraph2, list}) => {
  return (
    <Wrapper> 
      <DecorativeHeading type="h2" className="heading">{heading}</DecorativeHeading>
      {(paragraph && paragraph2) && (
        <>
          <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
          <ReactMarkdown className="paragraph2">{paragraph2}</ReactMarkdown>
        </>
      )}
      <ul className="wrapper">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  .heading {
    margin-bottom: ${Clamp(28, 48, 72, 'px')};
    max-width: ${734/16}rem;
  }
  .paragraph, .wrapper {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
    p {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
  .heading, .wrapper {
    grid-column: 3/1;
  }
  .paragraph2 + .wrapper {
    margin-top: ${Clamp(32, 48, 64, 'px')};
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: ${Clamp(16, 24, 32, 'px')};
    counter-reset: counter;
    li {
      flex-grow: 1;
      padding: ${Clamp(20, 32, 32, 'px')};
      border: 1px solid var(--neutral-800);
      counter-increment: counter;
      min-width: 25%;
      &::before {
        content: "/" counter(counter);
        font-size: ${Clamp(16, 22, 22)};
        margin-bottom: ${Clamp(16, 32, 32, 'px')};
        display: block;
      }
      &:nth-child(-n+9)::before {
        content: "/0" counter(counter);
      }
    }
  }
  @media (max-width: 849px){
    grid-template-columns: 1fr;
    .heading, .wrapper {
      grid-column: unset;
    }
    .paragraph {
      margin-bottom: 16px;
    }
  }
`

export default MasonryList;