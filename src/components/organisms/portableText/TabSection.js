import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const TabSection = ({ blocks }) => {
  return (
    <Wrapper>
      {blocks.map(({ title, description }, i) => (
        <div className="item" key={i}>
          <ReactMarkdown className='title'>{title}</ReactMarkdown>
          <ReactMarkdown className='description'>{description}</ReactMarkdown>
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 24px 0;
  .item {
    .title {
      border-bottom: 1px solid var(--primary-400);
      padding: 0 12px 12px;
      text-align: center;
      margin-bottom: ${Clamp(16, 24, 32, 'px')};
      font-size: ${Clamp(24, 24, 30)};
    }
    .description {
      p:not(:last-child){
        margin-bottom: 12px;
      }
    }
    &:not(:last-child){
      margin-bottom: ${Clamp(32, 48, 64, 'px')};
    }
  }
`

export default TabSection;