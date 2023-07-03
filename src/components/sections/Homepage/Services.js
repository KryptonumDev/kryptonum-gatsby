import React from "react";
import styled from "styled-components";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from "../../../utils/functions";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ArrowTopRight } from "../../atoms/Icons";

const Services = ({
  data: {
    services_Heading,
    services_List,
    webDevelopment,
    workshop,
    agency,
    graphicsAndDesign,
  }
}) => {
  const images = [webDevelopment.hero_Img, workshop.hero_Img, agency.hero_Img, graphicsAndDesign.hero_Img];
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{services_Heading}</DecorativeHeading>
      <div className="wrapper">
        {services_List.map((service, i) => (
          <Link to={service.href} className="item" key={i}>
            <GatsbyImage
              image={images[i].asset.gatsbyImageData}
              alt={images[i].asset.altText || ''}
              className="img"
            />
            <h3>
              <span>{service.title}</span>
              <ArrowTopRight />
            </h3>
            <p className="strong">{service.description}</p>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin: 0 auto ${Clamp(32, 64, 96, "px")};
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${Clamp(40, 54, 64, "px")} 32px;
    max-width: 1066px;
    margin: 0 auto;
    counter-reset: counter;
    .item {
      counter-increment: counter;
      position: relative;
      .img {
        opacity: 0;
        z-index: 2;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 100%;
        transform: translate(-50%, -50%);
        transition: transform .5s, opacity .3s;
        transition-timing-function: var(--easing);
      }
      &:hover {
        .img {
          opacity: 1;
          transform: rotate(13deg);
        }
        h3 svg {
          transform: translate(3px, -3px);
        }
      }
      &:nth-child(even):hover {
        .img {
          transform: rotate(-13deg);
        }
      }
      h3 {
        display: grid;
        grid-template-columns: ${Clamp(40, 72, 72, "px")} auto 1fr;
        gap: ${Clamp(8, 16, 16, "px")};
        font-size: ${Clamp(20, 32, 30)};
        margin-bottom: ${Clamp(8, 16, 32, "px")};
        &::before {
          content: "/0" counter(counter);
        }
        svg {
          align-self: center;
          transition: transform .3s;
        }
      }
      p {
        font-size: ${Clamp(16, 22, 22)};
      }
    }
  }
  @media (max-width: 999px){
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
`
 
export default Services;