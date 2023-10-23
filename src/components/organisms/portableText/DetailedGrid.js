import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import { ImageComponent } from "../PortableContent";

const DetailedGrid = ({ blocks }) => {
  return (
    <Wrapper>
      {blocks.map(({ img, title, description }, i) => (
        <div className="item" key={i}>
          <ImageComponent value={img} key={i} />
          <ReactMarkdown className='title'>{title}</ReactMarkdown>
          <ReactMarkdown className='description'>{description}</ReactMarkdown>
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 24px 0;
  display: grid;
  @media (min-width: 500px){
    grid-template-columns: 1fr 1fr;
  }
  gap: 32px;
  .item {
    .img {
      margin-bottom: ${Clamp(16, 24, 24, 'px')};
    }
    .title {
      margin-bottom: ${Clamp(12, 16, 16, 'px')};
    }
    .description {
      p:not(:last-child){
        margin-bottom: 12px;
      }
    }
  }
`

export default DetailedGrid;