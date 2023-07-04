import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp, removeMarkdown } from "../../utils/functions";
import ReadingTime from "../atoms/ReadingTime";

const BlogEntry = ({ data }) => {
  return (
    <Wrapper className="entry">
      <GatsbyImage
        image={data.img.asset.gatsbyImageData}
        alt={data.img.asset.altText || ''}
        className="img"
      />
      <Link to={`/pl/blog/${data.slug.current}`} className="link" aria-label={removeMarkdown(data.title)}></Link>
      <h3 className="title">{removeMarkdown(data.title)}</h3>
      <p className="subtitle">{removeMarkdown(data.subtitle)}</p>
      <Link to={`/pl/zespol/${data.author[0].slug.current}`} className="author">
        <GatsbyImage
          image={data.author[0].img.asset.gatsbyImageData}
          alt={data.author[0].img.asset.altText || ''}
          className="person-border"
        />
        <span>{data.author[0].name}</span>
      </Link>
      <div className="categories">
        {data.categories.slice(0, 3).map((category, i) => (
          <Link to={`/pl/blog/kategoria/${category.slug.current}`} key={i}>{category.name}</Link>
        ))}
      </div>
      <ReadingTime content={data._rawContent} />
      <span className="createdAt">{data._createdAt}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid var(--neutral-800);
  border-left: none;
  border-right: none;
  &:not(:last-child) {
    margin-bottom: ${Clamp(24, 32, 32, "px")};
  }
  padding: ${Clamp(16, 24, 32, "px")} 16px;
  display: grid;
  column-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "c e . f" ". . d d" "a a b b";
  align-items: flex-start;
  position: relative;
  .img {
    position: absolute;
    left: 50%;
    top: 100%;
    z-index: 2;
    transform: translate(-75%, -50%) rotate(0) scale(.8);
    pointer-events: none;
    opacity: 0;
    transition: transform .3s, opacity .3s;
  }
  &:hover {
    .img {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(13deg);
    }
  }
  &:nth-child(even):hover {
    .img {
      transform: translate(-50%, -50%) rotate(-13deg);
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
    grid-area: a;
    font-size: ${Clamp(20, 32, 30)};
    margin-top: 16px;
  }
  .subtitle {
    margin-top: 16px;
    grid-area: b;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${Clamp(16, 22, 22)};
  }
  .author {
    grid-area: c;
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      font-size: ${Clamp(16, 20, 20)};
    }
  }
  .categories {
    grid-area: d;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    a {
      padding: 4px 16px;
      background-color: var(--neutral-900);
    }
  }
  .readingTime {
    grid-area: e;
    justify-self: flex-end;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
  }
  .createdAt {
    grid-area: f;
    justify-self: flex-end;
  }
  @media (max-width: 849px){
    column-gap: 16px;
    padding: ${Clamp(16, 24, 32, "px")} 0;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "c e" "a a" "b b" "d d" "f f";
    .subtitle {
      margin-top: 20px;
      display: block;
    }
    .categories {
      margin: 24px 0;
    }
    .readingTime {
      font-size: 14px;
    }
  }
  @media (max-width: 349px){
    column-gap: 8px;
  }
`

export default BlogEntry;