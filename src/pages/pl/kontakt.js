import React from "react";
import { graphql } from "gatsby";
import { SEO } from "../../components/global/Seo";
import Hero from "../../components/sections/Contact/Hero";

const ContactPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
  }}
}) => {
  return (
    <>
      <Hero
        heading={hero_Heading}
        subheading={hero_Subheading}
      />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityContact {
      hero_Heading
      hero_Subheading
      hero_Contact {
        title
        person {
          name
          email
          tel
          img {
            asset {
              altText
              gatsbyImageData
            }
          }
        }
      }
      seo {
        title
        description
      }
    }
  }
`

export default ContactPage

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/konatkt'
  />
)
