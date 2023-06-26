import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Links = ({ data }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">**Zajrzyj** do mnie:</DecorativeHeading>
      <div className="wrapper">
        {data.map((link, i) => (
          <a href={link.href} target="_blank" rel="noreferrer" className="item" key={i}>
            <GatsbyImage
              image={link.img.asset.gatsbyImageData}
              alt={link.img.altText || ''}
              className="img"
            />
            <p>{link.text}</p>
          </a>
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
      width: calc(100% / 3 - 32px);
      @media (max-width: 899px){
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

export default Links;