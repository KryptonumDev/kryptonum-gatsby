import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from "../../utils/functions";

const CaseStudies = ({heading}) => {
  const { caseStudies } = useStaticQuery(graphql`
    query {
      caseStudies: allSanityCaseStudies(limit: 3) {
        nodes {
          name
          slug {
            current
          }
          thumbnail {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 456)
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      {heading && (
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      )}
      <div className="wrapper">
        {caseStudies.nodes.map((caseStudy, i) => (
          <div className="caseStudy" key={i}>
            <GatsbyImage key={i} image={caseStudy.thumbnail.asset.gatsbyImageData} alt={caseStudy.thumbnail.asset.altText || ''} className="img" />
            <Button to={`projekty/${caseStudy.slug.current}`} aria-label={`Sprawdź projekt ${caseStudy.name}`}>Sprawdź projekt</Button>
          </div>
        ))}
      </div>
      <Button theme="secondary" to="/projekty">Wszystkie projekty</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin: 0 auto ${Clamp(28, 72, 72)};
    text-align: left;
  }
  > a {
    margin-top: 48px;
  }
  text-align: center;
  @media (min-width: 500px){
    .caseStudy {
      overflow: hidden;
      position: sticky;
      top: 0;
      height: 100vh;
      height: 100dvh;
      .img {
        width: 100%;
        height: 100%;
      }
      .cta {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6), rgba(0,0,0,0));
        width: 100%;
        padding: 50% 0;
      }
    }
  }
  @media (max-width: 1189px){
    .caseStudy {
      margin: 0 calc(var(--pageMargin) * -1);
    }
  }
  @media (max-width: 499px){
    .caseStudy {
      &:not(:last-child){
        margin-bottom: 48px;
      }
      .cta {
        margin-top: 24px;
      }
    }
  }
`
 
export default CaseStudies;