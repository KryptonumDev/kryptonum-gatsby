import * as React from "react"
import { graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { SEO } from "../components/global/Seo";
import Hero from "../components/sections/TeamMember/Hero";
import Bio from "../components/sections/TeamMember/Bio";
import Skills from "../components/sections/TeamMember/Skills";
import Tools from "../components/sections/TeamMember/Tools";
import Benefits from "../components/sections/TeamMember/Benefits";
import Links from "../components/sections/TeamMember/Links";
import AfterWork from "../components/sections/TeamMember/AfterWork";
import Hobbies from "../components/sections/TeamMember/Hobbies";
import Inspirations from "../components/sections/TeamMember/Inspirations";
import DecorativeHeading from "../components/atoms/DecorativeHeading";
import { Clamp, removeMarkdown } from "../utils/functions";
import CaseStudies from "../components/sections/CaseStudies";
import LatestBlogEntries from "../components/sections/LatestBlogEntries";

const truncateText = (text, limit = 140) => {
  text = removeMarkdown(text).replace(/[\r\n]+/gm, " ");
  if (text.length > limit) {
    text = text.slice(0, limit - 3) + "...";
  }
  return text;
}

const TeamMemberPage = ({
  data: {
    page : {
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
    },
    participatedProjects,
    blogEntries
  }
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
      {participatedProjects.nodes.length >= 1 && (
        <CaseStudies
          heading="Mam swój **udział** w…"
          data={participatedProjects}
        />
      )}
      {blogEntries.nodes.length >= 1 && (
        <LatestBlogEntries
          heading="Tutaj dzielę się **wiedzą**"
          data={blogEntries}
          smallEntry={true}
        />
      )}
      {email && (
        <div className="contact">
          <DecorativeHeading type="h2">A może **pogadamy**?</DecorativeHeading>
          <p><a href={`mailto:${email}`}>{email}</a></p>
        </div>
      )}
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
    page: sanityTeamMember(id: {eq: $id}) {
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
    participatedProjects: allSanityCaseStudyEntries(filter: {participated: {elemMatch: {id: {eq: $id}}}}) {
      nodes {
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        slug {
          current
        }
      }
    }
    blogEntries: allSanityBlogEntries(filter: {author: {elemMatch: {id: {eq: $id}}}}, limit: 3) {
      nodes {
        title
        subtitle
        slug {
          current
        }
        author {
          name
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 48, height: 48)
            }
          }
        }
        categories {
          name
          slug {
            current
          }
        }
        _rawContent
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 230, height: 230)
          }
        }
        _createdAt(formatString: "D MMMM Y", locale: "pl")
      }
    }
    scrollToText_TeamPerson: allSanityTeamMember(sort: {_createdAt: ASC}) {
      nodes {
        name
        cryptonym
        slug {
          current
        }
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 180, height: 180)
          }
        }
      }
    }
  }
`

export default TeamMemberPage;

export const Head = ({
  data: { page : {
    name,
    cryptonym,
    slug,
    bio
  }}
}) => (
  <SEO
    title={`${name} - ${cryptonym} w Kryptonum`}
    description={truncateText(bio)}
    url={`/pl/zespol/${slug.current}`}
  />
)