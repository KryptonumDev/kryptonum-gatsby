import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Tiles = ({ heading, list, annotation }) => {
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
      {annotation && (
        <ReactMarkdown className="annotation">{annotation}</ReactMarkdown>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .wrapper {
    margin: 32px 0;
    display: grid;
    gap: 16px 32px;
    grid-template-columns: 1fr 1fr;
    list-style-type: none;
    li {
      border: 1px solid var(--neutral-800);
      padding: ${Clamp(16, 24, 32, 'px')};
      font-size: ${Clamp(16, 22, 22)};
      p:first-child {
        font-size: ${Clamp(20, 32, 30)};
      }
      p:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
  .annotation {
    max-width: ${627/16}rem;
    margin-left: auto;
    text-align: right;
    font-size: ${Clamp(20, 32, 30)};
  }
  @media (max-width: 999px){
    .wrapper {
      grid-template-columns: 1fr;
    }
    .annotation {
      margin-left: 0;
      text-align: left;
    }
  }
`

export default Tiles;