import * as React from "react"
import { graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { SEO } from "../../../components/global/Seo";
import Hero from "../../../components/sections/TeamMember/Hero";
import Bio from "../../../components/sections/TeamMember/Bio";
import Skills from "../../../components/sections/TeamMember/Skills";
import Tools from "../../../components/sections/TeamMember/Tools";
import Benefits from "../../../components/sections/TeamMember/Benefits";
import Links from "../../../components/sections/TeamMember/Links";
import AfterWork from "../../../components/sections/TeamMember/AfterWork";
import Hobbies from "../../../components/sections/TeamMember/Hobbies";
import Inspirations from "../../../components/sections/TeamMember/Inspirations";
import DecorativeHeading from "../../../components/atoms/DecorativeHeading";
import { Clamp } from "../../../utils/functions";

const TeamMemberPage = ({
  data: { teamMember : {
    name,
    cryptonym,
    img,
    bio,
    skills,
    tools,
    benefits,
    links,
    afterWork,
    hobbies,
    inspirations,
    email,
  }}
}) => {
  return (
    <>
      <GlobalStyle />
      <Hero name={name} cryptonym={cryptonym} img={img} />
      <Bio data={bio} />
      <Skills data={skills} />
      <Tools data={tools} />
      <Benefits data={benefits} />
      {links.length >= 1 && (
        <Links data={links} />
      )}
      <AfterWork data={afterWork} />
      <Hobbies data={hobbies} />
      {inspirations.length >= 1 && (
        <Inspirations data={inspirations} />
      )}
      <div className="contact">
        <DecorativeHeading type="h2">A może **pogadamy**?</DecorativeHeading>
        <p><a href={`mailto:${email}`}>{email}</a></p>
      </div>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  main {
    max-width: ${768/16}rem;
  }
  h2 {
    margin: 0 auto ${Clamp(28, 48, 48, 'px')};
  }
  .contact p {
    font-size: ${Clamp(22, 50, 48)};
    text-align: center;
  }
`

export const query = graphql`
  query($id: String!) {
    teamMember: sanityTeamMember(id: {eq: $id}) {
      name
      cryptonym
      slug {
        current
      }
      img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 356, height: 356)
        }
      }
      bio
      skills
      tools {
        name
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 152, height: 152)
          }
        }
      }
      benefits
      links {
        href
        text
        img {
          asset {
            altText
            gatsbyImageData(placeholder: NONE, width: 56, height: 56)
          }
        }
      }
      afterWork
      hobbies
      inspirations
      email
    }
  }
`

export default TeamMemberPage;

export const Head = ({data: { teamMember : { name, cryptonym, slug } } }) => (
  <SEO
    title={`${name} - ${cryptonym} w Kryptonum`}
    description=""
    url={`/pl/zespol/${slug.current}`}
  />
)