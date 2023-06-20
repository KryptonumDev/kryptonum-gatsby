import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Tools = ({ data }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">**Narzędzia**</DecorativeHeading>
      <div className="wrapper">
        {data.map((tool, i) => (
          <div className="item" key={i}>
            <GatsbyImage
              image={tool.img.asset.gatsbyImageData}
              alt={tool.img.altText || ''}
              className="img"
            />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  text-align: center;
  font-size: ${Clamp(16, 22, 22)};
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 72px 48px;
    .item {
      width: calc(100% / 4 - 36px);
      @media (max-width: 899px){
        width: calc(100% / 3 - 32px);
      }
      @media (max-width: 499px){
        width: calc(100% / 2 - 24px);
      }
      .img {
        border-radius: 2px;
      }
      p {
        margin-top: 10px;
      }
    }
  }
`

export default Tools;