import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const Tiles = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item, i) => (
        <div className="item" key={i}>
          <ReactMarkdown className="paragraph">{item.heading}</ReactMarkdown>
          <ReactMarkdown className="list">{item.list}</ReactMarkdown>
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 32px 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  .item {
    padding: ${Clamp(16, 24, 24, 'px')};
    border: 1px solid var(--neutral-800);
    .paragraph {
      font-size: ${Clamp(20, 32, 30)};
      margin-bottom: ${Clamp(32, 64, 96, 'px')};
    }
    ol {
      margin-bottom: 0;
    }
  }
  @media (max-width: 1299px){
    grid-template-columns: 1fr;
  }
  @media (max-width: 1099px){
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 899px){
    grid-template-columns: 1fr;
  }
`

export default Tiles;