import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp, removeMarkdown } from '../../utils/functions'
import { Clock } from "../atoms/Icons";
import Button from '../atoms/Button';

const BlogEntries = ({ data, heading }) => {
  let { blogEntries } = useStaticQuery(graphql`
    query {
      blogEntries: allSanityBlogEntries(limit: 3, sort: {_createdAt: DESC}) {
        nodes {
          title
          subtitle
          slug {
            current
          }
          author {
            name
            slug {
              current
            }
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED, width: 48, height: 48)
              }
            }
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
              gatsbyImageData(placeholder: BLURRED, width: 230, height: 230)
            }
          }
          _createdAt(formatString: "D MMMM Y", locale: "pl")
        }
      }
    }
  `);

  blogEntries = data ? data : blogEntries;

  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading || `**Najświeższe** artykuły (${blogEntries.nodes.length})`}</DecorativeHeading>
      <div className="wrapper">
        {blogEntries.nodes.map((entry, i) => (
          <div className="entry" key={i}>
            <GatsbyImage
              image={entry.img.asset.gatsbyImageData}
              alt={entry.img.asset.altText || ''}
              className={`img${i % 2 === 0 ? ' even' : ''}`}
            />
            <Link to={`/pl/blog/${entry.slug.current}`} className="link" aria-label={removeMarkdown(entry.title)}></Link>
            <h3 className="title">{removeMarkdown(entry.title)}</h3>
            <p className="subtitle">{removeMarkdown(entry.subtitle)}</p>
            <Link to={entry.author[0].slug.current} className="author">
              <GatsbyImage
                image={entry.author[0].img.asset.gatsbyImageData}
                alt={entry.author[0].img.asset.altText || ''}
                className="person-border"
              />
              <span>{entry.author[0].name}</span>
            </Link>
            <div className="categories">
              {entry.categories.slice(0, 3).map((category, i) => (
                <Link to={category.slug.current} key={i}>{category.name}</Link>
              ))}
            </div>
            <div className="estimatedTime">
              <Clock />
              <span>6 min. czytania</span>
            </div>
            <span className="createdAt">{entry._createdAt}</span>
          </div>
        ))}
      </div>
      <Button theme="secondary" to='/blog' className='cta'>Przejdź do bloga</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    max-width: ${686/16}rem;
    margin-bottom: ${Clamp(28, 48, 72)};
  }
  .entry {
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
        &.even {
          transform: translate(-50%, -50%) rotate(-13deg);
        }
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
    .estimatedTime {
      grid-area: e;
      justify-self: flex-end;
      height: 48px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .createdAt {
      grid-area: f;
      justify-self: flex-end;
    }
  }
  .cta {
    display: flex;
    width: fit-content;
    margin: 32px auto 0;
  }
  @media (max-width: 849px){
    .entry {
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
      .estimatedTime {
        font-size: 14px;
      }
    }
  }
`
 
export default BlogEntries;