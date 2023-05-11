import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Homepage/Hero";
import Conquest from "../components/sections/Homepage/Conquest";
import Challange from "../components/sections/Homepage/Challenge";
import Services from "../components/sections/Homepage/Services";
import Creativity from "../components/sections/Homepage/Creativity";

const IndexPage = ({data:
  {
    homepage,
  }
}) => {
  return (
    <>
      <Hero data={homepage} />
      <Conquest data={homepage} />
      <Challange data={homepage} />
      <Services data={homepage} />
      <Creativity data={homepage} />
    </>
  )
}

export const query = graphql`
  query {
    homepage: strapiHomepage {
      # Hero
      hero_Heading
      hero_Subheading {
        text
      }
      hero_Cta {
        theme
        text
        href
        target
        isExternal
      }
      hero_CaseStudies {
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
      hero_CaseStudiesLink
      # Conquest
      conquest_Heading
      conquest_Claim
      conquest_Paragraph
      conquest_SecondClaim {
        data {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      conquest_Cta {
        theme
        text
        href
      }
      # Challange
      challenge_Heading
      challenge_Claim
      challenge_Paragraph
      challenge_SecondClaim {
        data {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      challenge_Cta {
        theme
        text
        href
      }
      #services
      services_Heading
      services_List {
        title
        description
      }
      #creativity
      creativity {
        data {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Kryptonum</title>
