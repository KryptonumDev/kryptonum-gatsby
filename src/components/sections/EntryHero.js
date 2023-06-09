import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../atoms/DecorativeHeading';
import { Clamp } from '../../utils/functions';
import { Link } from "gatsby";

const EntryHero = ({
  title,
  subtitle,
  categories,
  categorySlug,
  _createdAt,
  img,
  author
}) => {
  return (
    <Wrapper>
      <header className={author ? 'hasAuthor' : ''}>
        <DecorativeHeading className="title">{title}</DecorativeHeading>
        <ReactMarkdown className="subtitle">{subtitle}</ReactMarkdown>
        {author && (
          <Link to={`/pl/zespol/${author[0].slug.current}`} className="author">
            <GatsbyImage
              image={author[0].img.asset.gatsbyImageData}
              alt={author[0].img.asset.altText || ''}
              className="person-border"
            />
            <span>{author[0].name}</span>
          </Link>
        )}
        <div className="categories">
          {categories.map((category, i) => (
            <Link key={i} to={`${categorySlug}${category.slug.current}`}>{category.name}</Link>
          ))}
        </div>
        <p className="createdAt">{_createdAt}</p>
      </header>
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        objectFit="contain"
        className="img"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  gap: 48px 32px;
  header {
    max-width: ${739/16}rem;
    display: grid;
    grid-template-columns: 1fr auto;
    &.hasAuthor {
      grid-template-columns: auto 1fr auto;
    }
    align-items: center;
    column-gap: 32px;
    .title, .subtitle {
      grid-column: 4/1;
    }
    .subtitle {
      margin: ${Clamp(28, 32, 32, "px")} 0 ${Clamp(24, 48, 48, "px")};
      font-size: ${Clamp(20, 32, 30)};
      p:not(:last-of-type){
        margin-bottom: 1rem;
      }
    }
    .author {
      display: grid;
      grid-template-columns: 48px auto;
      align-items: center;
      gap: 8px;
    }
    .categories {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      a {
        padding: 4px 16px;
        background-color: var(--neutral-900);
        border-radius: 2px;
      }
    }
    @media (max-width: 599px){
      grid-template-columns: 1fr;
      &.hasAuthor {
        grid-template-columns: 1fr;
      }
      .title, .subtitle {
        grid-column: unset;
      }
      .categories {
        margin: 24px 0;
      }
    }
  }
  .img {
    max-width: 600px;
    max-height: 600px;
    margin: 0 auto;
    border: 1px solid var(--neutral-800);
  }
  @media (max-width: 1199px){
    grid-template-columns: 1fr;
    header {
      max-width: unset;
    }
    .img {
      order: -1;
    }
  }
`
 
export default EntryHero;