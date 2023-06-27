import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp, removeMarkdown } from "../../utils/functions";

const EntryCard = ({ data }) => {
  return (
    <Wrapper className="entry">
      <Link to={`/pl/blog/${data.slug.current}`} className="link" aria-label={removeMarkdown(data.title)} />
      <GatsbyImage
        image={data.img.asset.gatsbyImageData}
        alt={data.img.asset.altText || ''}
        className="img"
      />
      <div>
        <div className="flex">
          <Link to={`/pl/zespol/${data.author[0].slug.current}`} className="author">
            <GatsbyImage
              image={data.author[0].img.asset.gatsbyImageData}
              alt={data.author[0].img.asset.altText || ''}
              className="person-border"
            />
            <span>{data.author[0].name}</span>
          </Link>
          <span className="createdAt">{data._createdAt}</span>
        </div>
        <h3 className="title">{removeMarkdown(data.title)}</h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: ${Clamp(24, 32, 32, "px")};
  }
  column-gap: 32px;
  position: relative;
  display: grid;
  grid-template-columns: 127px 1fr;
  align-items: flex-start;
  gap: 12px;
  max-width: 408px;

  @media (max-width: 962px) {
    max-width: 686px;
  }

  @media (max-width: 420px){
    display: flex;  
    flex-direction: column;
  }

  .img{
    width: 127px;
    height: 127px;
    
    @media (max-width: 420px){
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;
    }
  }

  .flex{
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;

    @media (max-width: 420px){
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .link {
    position: absolute;
    inset: 0;
  }
  a {
    position: relative;
    z-index: 1;
  }
  .title {
    font-size:  ${Clamp(14, 22, 16)};
    margin-top: 16px;

    @media (max-width: 962px) {
      font-size:  ${Clamp(14, 22, 22)};
    }
  }
  .author {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      font-size: ${Clamp(16, 20, 20)};
    }
  }
  .createdAt {
    justify-self: flex-end;
  }
  @media (max-width: 849px){
    .subtitle {
      margin-top: 20px;
      display: block;
    }
    .categories {
      margin: 24px 0;
    }
    .estimatedTime {
      font-size: 14px;
    }
  }
`

export default EntryCard;