import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from "../../utils/functions";
import Button from "../atoms/Button";

const Team = ({ heading, paragraph, cta }) => {
  const { team } = useStaticQuery(graphql`
    query {
      team: allSanityTeamMember(sort: {_createdAt: ASC}) {
        nodes {
          name
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 128)
            }
          }
          cryptonym
        }
      }
    }
  `);
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading || 'Kryptonum to **MY**!'}</DecorativeHeading>
      <div className="wrapper">
        {team.nodes.map((person, i) => (
          <Link to={`/pl/zespol/${person.slug.current}`} key={i}>
            <GatsbyImage
              image={person.img.asset.gatsbyImageData}
              alt={person.img.asset.altText || ''}
              className="img person-border"
            />
            <div className="info">
              <h3>{person.name}</h3>
              <p>{person.cryptonym}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="copy">
        <ReactMarkdown>{paragraph}</ReactMarkdown>
        {cta?.text && (
          <Button to={cta.href} theme={cta.theme}>{cta.text}</Button>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    font-size: ${Clamp(18, 28, 28)};
    margin: 0 auto ${Clamp(28, 48, 72, "px")};
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    @media (max-width: 1189px){
      grid-template-columns: 1fr 1fr;
      gap: 32px 24px;
    }
    @media (max-width: 699px){
      grid-template-columns: 1fr;
      gap: 28px;
    }
    a {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
      align-items: center;
      .img {
        width: 128px;
        height: 128px;
        img {
          transform-origin: bottom;
          transition: transform .5s var(--easing);
        }
      }
      &:hover {
        .img img {
          transform: scale(1.05);
        }
      }
      .info {
        h3 {
          font-size: ${Clamp(18, 18, 20)};
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }
  .copy {
    text-align: center;
    max-width: 633px;
    margin: 0 auto;
    margin-top: ${Clamp(28, 48, 48, 'px')};
    p {
      font-size: ${Clamp(16, 18, 18)};
      &:not(:last-of-type){
        margin-bottom: ${Clamp(16, 16, 24, "px")};
      }
    }
    a {
      margin-top: ${Clamp(28, 32, 32, 'px')};
    }
  }
  @media (max-width: 699px){
    h2 {
      margin-left: 0;
    }
    .copy {
      text-align: left;
    }
  }
`
 
export default Team;