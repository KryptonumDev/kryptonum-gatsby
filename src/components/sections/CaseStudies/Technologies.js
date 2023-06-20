import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Technologies = ({ heading, technologies }) => {
  return (
    <Wrapper>
      <p>{heading}</p>
      <div className="wrapper">
        {technologies.map((technology, i) => (
          <GatsbyImage
            key={i}
            image={technology.img.asset.gatsbyImageData}
            alt={technology.img.asset.altText || ''}
            className="img"
            objectFit="contain"
            title={technology.name}
          />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: ${768/16}rem;
  margin: 0 auto;
  text-align: center;
  p {
    margin-bottom: 32px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px 0;
    .img {
      width: calc(25% - 16px);
      @media (max-width: 599px){
        width: calc(50% - 16px);
      }
      &:nth-child(odd){
        transform: rotate(8deg);
      }
      &:nth-child(even){
        transform: rotate(-8deg);
      }
      border-radius: 2px;
    }
  }
`

export default Technologies;