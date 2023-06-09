import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../atoms/DecorativeHeading';
import { Clamp } from '../../utils/functions';
import SimpleCtaSection from "./SimpleCtaSection";

const HeroServices = ({
  data: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    hero_Nav,
    hero_simpleCtaSection,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading
        components={{em: ({...props}) => <sup {...props} />}}
      >{hero_Heading}</DecorativeHeading>
      <GatsbyImage
        image={hero_Img.asset.gatsbyImageData}
        alt={hero_Img.asset.altText || ''}
        className="img"
      />
      <div className="copy">
        {hero_Annotation && (
          <ReactMarkdown
            className="annotation"
            components={{
              em: ({...props}) => <sup {...props} />
            }}
          >{hero_Annotation}</ReactMarkdown>
        )}
        <ReactMarkdown className="paragraph">{hero_Paragraph}</ReactMarkdown>
        <ReactMarkdown className="secondParagraph">{hero_SecondParagraph}</ReactMarkdown>
      </div>
      {hero_Nav && (
        <nav className="nav">
          {hero_Nav.map((item, i) => (
            <Link to={item.href} className="item" key={i}>
              <ReactMarkdown components={{ p: 'h3' }}>
                {item.title}
              </ReactMarkdown>
              <p>{item.description}</p>
            </Link>
          ))}
        </nav>
      )}
      {(hero_simpleCtaSection) && (
        <SimpleCtaSection data={hero_simpleCtaSection} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h1 {
    margin-bottom: 32px;
  }
  h1, .annotation {
    sup {
      color: var(--primary-400);
      background-image: var(--gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .copy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px 32px;
    margin-top: ${Clamp(28, 32, 64)};
    .annotation {
      grid-column: 3/-2;
    }
    .annotation, .secondParagraph {
      font-size: ${Clamp(16, 22, 22)};
    }
    .paragraph {
      font-size: ${Clamp(22, 32, 30)};
    }
    .secondParagraph {
      font-size: ${Clamp(16, 22, 22)};
      p:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
  .nav {
    margin-top: ${Clamp(24, 32, 48, "px")};
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
      var(--gradient) border-box;
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
  @media (max-width: 1199px){
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 16px;
    }
    .img {
      order: -1;
      margin-bottom: ${Clamp(24, 48, 48, "px")};
    }
    .copy {
      grid-template-columns: 1fr;
      gap: 0;
      margin-top: 0;
      .annotation {
        grid-column: unset;
        margin-bottom: 32px;
      }
      .paragraph {
        margin-bottom: 16px;
      }
    }
  }
`
 
export default HeroServices;