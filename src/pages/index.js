import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Homepage/Hero";
import Conquest from "../components/sections/Homepage/Conquest";
import Challange from "../components/sections/Homepage/Challenge";
import Services from "../components/sections/Homepage/Services";
import Creativity from "../components/sections/Homepage/Creativity";
import Roadmap from "../components/sections/Homepage/Roadmap";
import Team from "../components/sections/Homepage/Team";
import Testimonials from "../components/sections/Testimonials";

const IndexPage = ({data:
  {
    homepage
  }
}) => {
  return (
    <>
      <Hero data={homepage} />
      <Services data={homepage} />
      <Conquest data={homepage} />
      <Challange data={homepage} />
      <Creativity data={homepage} />
      <Roadmap data={homepage} />
      <Team data={homepage} />
      <Testimonials />
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
      # Services
      services_Heading
      services_List {
        title
        description
      }
      # Creativity
      creativity {
        data {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      # Roadmap
      roadmap_Heading
      roadmap_Process {
        title
        description
      }
      roadmap_Cta {
        theme
        text
        href
      }
      # Team
      team_Heading
      team_Text
      team_Cta {
        theme
        text
        href
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Kryptonum</title>
