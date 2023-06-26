import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../../atoms/DecorativeHeading';
import Button from '../../atoms/Button';
import { Clamp } from '../../../utils/functions';
import { Link } from "gatsby";

const Hero = ({
  title,
  subtitle,
  categories,
  _createdAt,
  img,
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading className="title">{title}</DecorativeHeading>
        <ReactMarkdown className="subtitle">{subtitle}</ReactMarkdown>
        <div className="categories">
          {categories.map((category, i) => (
            <Link key={i} to={`/pl/blog/kategoria/${category.slug.current}`}>{category.name}</Link>
          ))}
        </div>
        <p className="createdAt">{_createdAt}</p>
      </header>
      {img?.asset.gatsbyImageData && (
        <GatsbyImage
          image={img.asset.gatsbyImageData}
          alt={img.asset.altText || ''}
          objectFit="contain"
          className="img"
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px 32px;
  header {
    max-width: ${739/16}rem;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    column-gap: 32px;
    .title, .subtitle {
      grid-column: 3/1;
    }
    .subtitle {
      margin: ${Clamp(28, 32, 32, "px")} 0 ${Clamp(24, 48, 48, "px")};
      font-size: ${Clamp(20, 32, 30)};
      p:not(:last-of-type){
        margin-bottom: 1rem;
      }
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
  }
  .img {
    max-width: 600px;
    max-height: 600px;
    margin: 0 auto;
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
 
export default Hero;