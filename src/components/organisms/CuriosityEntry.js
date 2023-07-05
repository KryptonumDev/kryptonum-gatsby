import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp, removeMarkdown } from "../../utils/functions";
import Button from "../atoms/Button";

const CuriosityEntry = ({ data }) => {
  return (
    <Wrapper className="entry">
      <Link to={`/pl/akademia/${data.slug.current}`} aria-label={removeMarkdown(data.title)} className="link" tabIndex='-1'></Link>
      <GatsbyImage
        image={data.img.asset.gatsbyImageData}
        alt={data.img.asset.altText || ''}
        className="img"
      />
      <div className="copy">
        <div className="categories">
          {data.categories.map((category, i) => (
            <Link to={`/pl/akademia/kategoria/${category.slug.current}`} key={i}>{category.name}</Link>
          ))}
        </div>
        <h3 className="title">{removeMarkdown(data.title)}</h3>
        <p className="subtitle">{removeMarkdown(data.subtitle)}</p>
        <Button theme="secondary" to={`/pl/akademia/${data.slug.current}`}>Czytaj więcej</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  &:not(:last-child){
    margin-bottom: ${Clamp(32, 48, 48, 'px')};
  }
  position: relative;
  .link {
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  .cta, .categories a {
    z-index: 2;
  }
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 32px;
  align-items: center;
  .img {
    border: 1px solid var(--neutral-800);
  }
  .copy {
    padding: 16px 0;
    .categories {
      margin-bottom: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      a {
        background-color: var(--neutral-900);
        border-radius: 2px;
        font-size: ${Clamp(14, 16, 16)};
        padding: 4px 16px;
      }
    }
    .title {
      font-size: ${Clamp(20, 32, 30)};
      margin-bottom: 12px;
    }
    .subtitle {
      font-size: ${Clamp(16, 22, 22)};
      margin-bottom: ${Clamp(24, 32, 32, 'px')};
    }
  }
  @media (max-width: 989px){
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export default CuriosityEntry;