import * as React from "react"
import { graphql } from "gatsby"
import { SEO } from "../../components/global/Seo";
import Hero from "../../components/sections/Homepage/Hero";

const BlogPage = ({
  data: { page : {
    hero_Heading,
    hero_Subheading,
    hero_Cta,
  }
  }
}) => {
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Subheading,
        hero_Cta,
      }} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityHomepage {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Cta {
        theme
        text
        href
      }
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export default BlogPage

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
  />
)