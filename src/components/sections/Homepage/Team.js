import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";

const Team = ({data}) => {
  const {team_Heading, team_Text, team_Cta} = data;
  const { team } = useStaticQuery(graphql`
    query {
      team: allSanityTeam {
        nodes {
          name
          slug {
            current
          }
          img {
            alt
            source {
              asset {
                gatsbyImageData(placeholder: DOMINANT_COLOR, width: 268)
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{team_Heading}</DecorativeHeading>
      <div className="wrapper">
        {team.nodes.map((person, i) => (
          <Link to={`/zespol/${person.slug.current}`} key={i} aria-label={person.name}>
            <GatsbyImage image={person.img.source.asset.gatsbyImageData} alt={person.img.alt || ''}  className="img person-border" />
          </Link>
        ))}
      </div>
      <div className="copy">
        <ReactMarkdown>{team_Text}</ReactMarkdown>
        <Button to={team_Cta.href} theme={team_Cta.theme}>{team_Cta.text}</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin: 0 auto ${Clamp(32, 32, 48, "px")};
  }
  .wrapper {
    text-align: center;
    display: grid;
    grid-template-columns: auto auto auto;
    width: fit-content;
    margin: 0 auto;
    gap: 1rem;
  }
  .copy {
    text-align: center;
    max-width: 858px;
    margin: 0 auto;
    margin-top: 2rem;
    p {
      font-size: ${Clamp(20, 32, 30)};
      &:not(:last-of-type){
        margin-bottom: ${Clamp(16,32,32, "px")};
      }
    }
    a {
      margin-top: 2rem;
    }
  }
`
 
export default Team;