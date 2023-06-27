import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions'
import CuriosityEntry from "../organisms/CuriosityEntry";

const LatestCuriosityEntries = ({ heading }) => {
  let { curiosityEntries } = useStaticQuery(graphql`
    query {
      curiosityEntries: allSanityCuriosityEntries(sort: {_createdAt: DESC}) {
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
      <DecorativeHeading type="h2">{heading || `Arena **ciekawostek** (${curiosityEntries.nodes.length})`}</DecorativeHeading>
      <div className="wrapper">
        {curiosityEntries.nodes.map((entry, i) => (
          <CuriosityEntry data={entry} key={i} />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    max-width: ${686/16}rem;
    margin-bottom: ${Clamp(28, 48, 72)};
  }
`
 
export default LatestCuriosityEntries;