import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const UnorderedList = ({ data }) => {
  return (
    <Wrapper className="unorderedList">
      {data.map((item, i) => (
        <li key={i}>
          <div>
            {item.icon}
            <p className="title">{item.title}</p>
          </div>
          <p className="description">{item.description}</p>
        </li>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px !important;
  font-size: ${Clamp(16, 22, 22)};
  .img {
    width: 48px;
    height: 48px;
    img {
      padding: 12px;
    }
    border-radius: 50%;
    background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                var(--gradient) border-box;
    border: 1px solid transparent;
  }
  li {
    > div {
      display: grid;
      grid-template-columns: 48px 1fr;
      gap: 16px;
      align-items: center;
      margin-bottom: 8px;
    }
    .description {
      padding-left: 64px;
    }
  }

`

export default UnorderedList;