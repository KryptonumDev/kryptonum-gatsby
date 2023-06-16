import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp, removeMarkdown } from '../../utils/functions'
import Button from '../atoms/Button';

const CuriosityEntries = ({ data }) => {
  let { curiosityEntries } = useStaticQuery(graphql`
    query {
      curiosityEntries: allSanityCuriosityEntries(sort: {_createdAt: DESC}) {
        nodes {
          title
          subtitle
          slug {
            current
          }
          categories {
            name
            slug {
              current
            }
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 688)
            }
          }
          _createdAt(formatString: "D MMMM Y", locale: "pl")
        }
      }
    }
  `);

  curiosityEntries = data ? data : curiosityEntries;

  return (
    <Wrapper>
      <DecorativeHeading type="h2">{`Arena **ciekawostek** (${curiosityEntries.nodes.length})`}</DecorativeHeading>
      <div className="wrapper">
        {curiosityEntries.nodes.map((entry, i) => (
          <div className="entry" key={i}>
            <Link to={`/pl/akademia/${entry.slug.current}`} aria-label={removeMarkdown(entry.title)} className="link"></Link>
            <GatsbyImage
              image={entry.img.asset.gatsbyImageData}
              alt={entry.img.asset.altText || ''}
              className="img"
            />
            <div className="copy">
              <div className="categories">
                {entry.categories.map((category, i) => (
                  <Link to={`/pl/akademia/kategoria/${category.slug.current}`} key={i}>{category.name}</Link>
                ))}
              </div>
              <h3 className="title">{removeMarkdown(entry.title)}</h3>
              <p className="subtitle">{removeMarkdown(entry.subtitle)}</p>
              <Button theme="secondary" to={`/pl/akademia/${entry.slug.current}`}>Czytaj więcej</Button>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    max-width: ${686/16}rem;
    margin-bottom: ${Clamp(28, 48, 72)};
  }
  .entry {
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
    .img {
      max-width: 516px;
    }
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 32px;
    align-items: center;
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
  }
  @media (max-width: 768px){
    .entry {
      .img {
        max-width: unset;
      }
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }
`
 
export default CuriosityEntries;