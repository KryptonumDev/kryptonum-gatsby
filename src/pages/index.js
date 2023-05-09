import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Homepage/Hero";

const IndexPage = ({data:
  {
    homepage
  }
}) => {
  return (
    <Hero homepage={homepage} />
  )
}

export const query = graphql`
  query {
    homepage: strapiHomepage {
      heroHeading
      heroSubheading {
        text
      }
      heroCta {
        theme
        text
        href
        target
        isExternal
      }
      heroCaseStudies {
        name
        slug
        thumbnail {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      heroCaseStudiesLink
    }
  }
`

export default IndexPage

export const Head = () => <title>Kryptonum</title>
