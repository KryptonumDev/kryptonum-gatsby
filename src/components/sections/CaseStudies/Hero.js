import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import Breadcrumbs from "../../global/Breadcrumbs";

const Hero = ({
  data: {
    heading,
    categories_Paragraph,
    categories,
    img,
  },
  pageContext
}) => {
  return (
    <Wrapper>
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img"
        loading="eager"
      />
      <Breadcrumbs portfolio={true} data={pageContext.breadcrumbs} />
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    margin-top: ${Clamp(48, 48, 96, 'px')};
    h1 {
      width: 50%;
      font-size: ${Clamp(22, 36, 36)};
    }
    .categories {
      width: 45%;
      margin-left: auto;
      p {
        font-size: ${Clamp(22, 32, 30)};
        margin-bottom: ${Clamp(16, 32, 32, 'px')};
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: ${Clamp(8, 12, 16, 'px')};
        list-style-type: none;
        li {
          font-size: ${Clamp(14, 16, 18)};
          padding: ${Clamp(4, 14, 14, 'px')} ${Clamp(16, 24, 24, 'px')};
          background-color: var(--neutral-900);
        }
      }
    }
  }
  @media (max-width: 1600px){
    .img {
      margin: 0 calc(var(--pageMargin) * -1);
    }
  }
  @media (max-width: 1149px){
    header {
      h1 {
        width: 100%;
      }
      .categories {
        margin-top: ${Clamp(28, 42, 64, 'px')};
        width: 100%;
      }
    }
  }
`

export default Hero;