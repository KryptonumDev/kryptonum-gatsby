import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from "../../utils/functions";

const CaseStudies = ({ data, heading, eagerLoading=false }) => {
  let { caseStudies } = useStaticQuery(graphql`
    query {
      caseStudies: allSanityCaseStudyEntries(limit: 3) {
        nodes {
          name
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  if(data){
    caseStudies = data;
  }
  return (
    <Wrapper>
      {heading && (
        <header>
          <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        </header>
      )}
      <div className="wrapper">
        {caseStudies.nodes.map((caseStudy, i) => (
          <div className="caseStudy" key={i}>
            <GatsbyImage
              key={i}
              image={caseStudy.img?.asset.gatsbyImageData}
              alt={caseStudy.img?.asset.altText || ''}
              className="img"
              loading={(eagerLoading && i == 0) ? 'eager' : 'lazy'}
            />
            <Button
              to={`/pl/portfolio/${caseStudy.slug.current}`}
              aria-label={`Sprawdź projekt ${caseStudy.name}`}
              theme="primary"
            >
              Sprawdź projekt
            </Button>
          </div>
        ))}
      </div>
      {!data && (
        <Button theme="secondary" to="/pl/portfolio">Wszystkie projekty</Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    max-width: calc(846rem/16);
    margin: 0 auto;
  }
  h2 {
    margin: 0 auto ${Clamp(28, 72, 72)};
    font-size: ${Clamp(18, 28, 28)};
    text-align: left;
  }
  > a {
    margin-top: ${Clamp(24, 48, 48, 'px')};
  }
  text-align: center;
  .caseStudy {
    position: relative;
    overflow: hidden;
    .cta {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      max-width: 80%;
    }
    @media (max-width: 1189px){
      margin: 0 calc(var(--pageMargin) * -1);
    }
    @media (min-width: 500px){
      position: sticky;
      top: 0;
      max-height: 100vh;
      max-height: 100dvh;
    }
    @media (max-width: 499px){
      &:not(:last-child){
        margin-bottom: 48px;
      }
    }
  }
`
 
export default CaseStudies;