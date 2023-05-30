import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../atoms/DecorativeHeading';
import { Clamp } from '../../utils/functions';

const HeroServices = ({ title, img, claim, paragraph, secondParagraph, nav }) => {
  return (
    <Wrapper>
      <DecorativeHeading>{title}</DecorativeHeading>
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img"
      />
      <div className="copy">
        <ReactMarkdown className="claim">{claim}</ReactMarkdown>
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
        <ReactMarkdown className="secondParagraph">{secondParagraph}</ReactMarkdown>
      </div>
      {nav && (
        <nav className="nav">
          {nav.map((item, i) => (
            <Link to={item.href} className="item" key={i}>
              <ReactMarkdown
                components={{ p: 'h3' }}
              >
                {item.title}
              </ReactMarkdown>
              <p>{item.description}</p>
            </Link>
          ))}
        </nav>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h1 {
    margin-bottom: 32px;
  }
  .copy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px 32px;
    margin-top: ${Clamp(28, 32, 64)};
    .claim {
      grid-column: 3 / 1;
      font-size: ${Clamp(20, 32, 30)};
    }
    .paragraph {
      font-size: ${Clamp(20, 32, 30)};
    }
    .secondParagraph {
      font-size: ${Clamp(16, 22, 22)};
      p:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
  .nav {
    margin-top: ${Clamp(16, 24, 48, "px")};
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr 1fr;
    .item {
      padding: 72px 24px 24px 24px;
      border: 1px solid var(--neutral-800);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      h3 {
        font-size: ${Clamp(20, 32, 32)};
        margin-bottom: 16px;
        text-decoration: underline;
      }
      p {
        font-size: ${Clamp(16, 22, 22)};
      }
    }
    .item:first-child {
      background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
      linear-gradient(90deg, #90F4E8, #2DD282) border-box;
      border: 1px solid transparent;
      grid-row: 3/1;
    }
    @media (max-width: 1099px){
      grid-template-columns: 1fr 1fr;
      .item {
        padding: 32px 24px;
        justify-content: flex-start;
      }
      .item:first-child {
        grid-row: unset;
        grid-column: 3/1;
      }
    }
    @media (max-width: 549px){
      grid-template-columns: 1fr;
      gap: 16px;
      .item {
        padding: 16px;
      }
      .item:first-child {
        grid-row: unset;
        grid-column: unset;
      }
    }
  }
  @media (max-width: 999px){
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 0;
    }
    .img {
      order: -1;
      margin-bottom: ${Clamp(24, 48, 48, "px")};
    }
    .copy {
      grid-template-columns: 1fr;
      gap: 0;
      .claim {
        grid-column: unset;
        margin-bottom: 16px;
      }
    }
  }
`
 
export default HeroServices;