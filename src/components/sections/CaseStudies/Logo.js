import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const Logo = ({ paragraph, showcase }) => {
  return (
    <Wrapper>
      <div className="wrapper">
        {showcase.map((img, i) => (
          <GatsbyImage
            key={i}
            image={img.asset.gatsbyImageData}
            alt={img.asset.altText || ''}
            className="img"
          />
        ))}
      </div>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${Clamp(16, 16, 32, 'px')};
    @media (max-width: 499px){
      grid-template-columns: 1fr;
    }
  }
  p {
    margin-top: ${Clamp(16, 32, 48, 'px')};
    text-align: center;
    font-size: ${Clamp(20, 40, 40)};
  }
`

export default Logo;