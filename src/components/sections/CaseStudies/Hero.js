import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Hero = ({
  data: {
    heading,
    paragraph,
    paragraph2,
    categories_Paragraph,
    categories,
    img,
  }
}) => {
  return (
    <Wrapper>
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img"
        loading="eager"
      />
      <header>
        <DecorativeHeading className="heading">{heading}</DecorativeHeading>
        <div className="categories">
          <p>{categories_Paragraph}</p>
          <ul>
            {categories.map((category, i) => (
              <li key={i}>{category.name}</li>
            ))}
          </ul>
        </div>
      </header>
      <div className="column">
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
        <ReactMarkdown className="paragraph2">{paragraph2}</ReactMarkdown>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 32px;
    margin: ${Clamp(48, 48, 96, 'px')} 0;
    h1 {
      font-size: ${Clamp(28, 50, 48)};
    }
  }
  @media (max-width: 1600px){
    .img {
      margin: 0 calc(var(--pageMargin) * -1);
    }
  }
  .column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .paragraph {
    font-size: ${Clamp(22, 32, 30)};
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
  }
  .categories {
    p {
      font-size: ${Clamp(22, 32, 30)};
      margin-bottom: 24px;
    }
    ul {
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
  @media (max-width: 1149px){
    header {
      grid-template-columns: 1fr;
    }
    .column {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
`

export default Hero;