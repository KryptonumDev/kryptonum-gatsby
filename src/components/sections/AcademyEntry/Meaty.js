import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Meaty = ({ heading, list }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ul className="wrapper">
        {list.map((item, i) => (
          <li key={i}>
            <ReactMarkdown>{item}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin-bottom: ${Clamp(28, 48, 72, 'px')}
  }
  .wrapper {
    display: grid;
    gap: 32px;
    @media (min-width: 999px) {
      grid-template-columns: 1fr 1fr;
      gap: 72px 32px;
    }
    list-style-type: none;
    counter-reset: counter;
    li {
      counter-increment: counter;
      &::before {
        content: "/0" counter(counter);
        display: inline-block;
        font-size: ${Clamp(16, 22, 22)};
        margin-bottom: ${Clamp(12, 16, 24, 'px')};
      }
      font-size: ${Clamp(16, 32, 30)};
    }
  }
`

export default Meaty;