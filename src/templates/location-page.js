import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import Hero from "../components/sections/TeamMember/Hero";

const LocationPage = ({
  data: {
    page: {
      name,
      cryptonym,
      img,
    },
  }
}) => {
  return (
    <>
      <Hero name={name} cryptonym={cryptonym} img={img} />
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    page: sanityTeamMember(id: {eq: $id}) {
      _id
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

export const Head = ({
  data: { page: {
    slug,
    seo: {
      title,
      description
    }
  }}
}) => (
  <SEO
    title={title}
    description={description}
    url={`/pl/${slug?.current}`}
  />
)

export default LocationPage;