import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const KeyElements = ({ heading, list }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ol className="wrapper">
        {list.map((item, i) => (
          <li className="item" key={i}>
            <ReactMarkdown>{item}</ReactMarkdown>
          </li>
        ))}
      </ol>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin-bottom: ${Clamp(28, 48, 72, 'px')};
    max-width: ${734/16}rem;
  }
  .wrapper {
    display: grid;
    gap: 32px;
    @media (min-width: 899px){
      grid-template-columns: 1fr 1fr;
      gap: 64px 32px;
    }
    list-style-type: none;
    font-size: ${Clamp(16, 22, 22)};
    counter-reset: counter;
    li {
      counter-increment: counter;
      &::before {
        content: "/" counter(counter);
        display: inline-block;
        margin-bottom: ${Clamp(12, 16, 24, 'px')};
      }
      &:nth-child(-n+9)::before {
        content: "/0" counter(counter);
      }
    }
  }
`

export default KeyElements;