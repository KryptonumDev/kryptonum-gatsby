import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp, removeMarkdown } from "../../utils/functions";

const AcademyEntrySmall = ({ data }) => {
  return (
    <Wrapper className="entry">
      <Link to={`/pl/akademia/${data.slug.current}`} className="link" aria-label={removeMarkdown(data.title)} />
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

  .img{
    width: 127px;
    height: 127px;
  }

  .flex{
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
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
    font-size: 1rem;
    margin-top: 16px;
  }
  .subtitle {
    margin-top: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${Clamp(16, 22, 22)};
  }
  .author {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      font-size: ${Clamp(16, 20, 20)};
    }
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    a {
      padding: 4px 16px;
      background-color: var(--neutral-900);
    }
  }
  .estimatedTime {
    justify-self: flex-end;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .createdAt {
    justify-self: flex-end;
  }
  @media (max-width: 849px){
    column-gap: 16px;
    padding: ${Clamp(16, 24, 32, "px")} 0;
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

export default AcademyEntrySmall;