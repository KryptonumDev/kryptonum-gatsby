import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const SimpleGridList2Columns = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item, i) => (
        <li className="item" key={i}>
          <ReactMarkdown>{item}</ReactMarkdown>
        </li>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  margin: 32px 0 24px;
  list-style-type: none;
  display: grid;
  gap: ${Clamp(16, 20, 24, 'px')};
  @media (min-width: 600px){
    grid-template-columns: 1fr 1fr;
  }
  .item {
    padding: ${Clamp(16, 24, 24, 'px')};
    border: 1px solid var(--neutral-800);
    &:first-child {
      border: 1px solid var(--primary-400);
      background: linear-gradient(266deg, #0B0F0D, #12211F);
    }
  }
`

export default SimpleGridList2Columns;