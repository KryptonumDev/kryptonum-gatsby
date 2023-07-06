import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions'
import CuriosityEntry from "../organisms/CuriosityEntry";

const LatestCuriosityEntries = ({ heading, exclude=null }) => {
  let { curiosityEntries } = useStaticQuery(graphql`
    query {
      curiosityEntries: allSanityCuriosityEntries(limit: 4, sort: {_createdAt: DESC}) {
        nodes {
          title
          subtitle
          slug {
            current
          }
          categories {
            name
            slug {
              current
            }
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 688)
            }
          }
          _createdAt(formatString: "D MMMM Y", locale: "pl")
        }
      }
    }
  `);

  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading || `Spieszysz się? Skubnij **ciekawostkę** na raz!`}</DecorativeHeading>
        <p>Oto nasz TOP3:</p>
      </header>
      <div className="wrapper">
        {curiosityEntries.nodes.filter(entry => entry.slug.current !== exclude).map((entry, i) => (
          i < 3 && (
            <CuriosityEntry data={entry} key={i} />
          )
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    display: grid;
    grid-template-columns: auto auto;
    @media (max-width: 849px){
      grid-template-columns: 1fr;
    }
    justify-content: space-between;
    align-items: end;
    gap: 24px 32px;
    margin-bottom: ${Clamp(28, 48, 72)};
    h2 {
      max-width: ${686/16}rem;
    }
    p {
      font-size: ${Clamp(16, 22, 22)};
    }
  }
`
 
export default LatestCuriosityEntries;