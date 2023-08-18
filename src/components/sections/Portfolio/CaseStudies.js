import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp, removeMarkdown } from "../../../utils/functions";
import { Link } from "gatsby";

const CaseStudies = ({ data }) => {
  return (
    <Wrapper>
      {data.map((caseStudy, i) => (
        <Link className="item" key={i} to={`/pl/portfolio/${caseStudy.slug.current}`}>
          <GatsbyImage
            image={caseStudy.img.asset.gatsbyImageData}
            alt={caseStudy.img.altText || ''}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="img"
          />
          <div className="copy">
            <h3>{caseStudy.name}</h3>
            <ul className="categories">
              {caseStudy.categories.map((category, i) => (
                <li key={i}>{category.name}</li>
              ))}
            </ul>
          </div>
          <h2>{removeMarkdown(caseStudy.heading)}</h2>
        </Link>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .item {
    &:hover {
      .img img {
        transform: scale(1.03);
      }
    }
    .img {
      img {
        transition: transform .5s var(--easing);
      }
    }
    &:not(:last-child){
      margin-bottom: ${Clamp(64, 64, 172, 'px')};
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 32px;
    .img {
      grid-column: 3/1;
    }
    h3 {
      font-size: ${Clamp(20, 32, 30)};
      margin-bottom: 24px;
    }
    h2 {
      font-size: ${Clamp(16, 22, 22)};
    }
    .categories {
      display: flex;
      flex-wrap: wrap;
      gap: 16px 12px;
      list-style-type: none;
      li {
        font-size: ${Clamp(14, 16, 18)};
        padding: 6px 32px;
        background-color: var(--neutral-900);
      }
    }
  }
  @media (max-width: 1059px){
    .item {
      grid-template-columns: 1fr;
      .img {
        grid-column: unset;
      }
      .categories {
        display: flex;
        flex-wrap: wrap;
        gap: 16px 12px;
        list-style-type: none;
        li {
          padding: 6px 32px;
          background-color: var(--neutral-900);
        }
      }
    }

  }
`

export default CaseStudies;