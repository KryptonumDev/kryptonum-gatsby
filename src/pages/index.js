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
import { SEO } from "../components/global/Seo";
import BlogEntries from "../components/sections/BlogEntries";

const IndexPage = ({
  data: {
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
      <BlogEntries />
    </>
  )
}

export const query = graphql`
  query {
    homepage: sanityHomepage {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Cta {
        theme
        text
        href
      }
      hero_CaseStudies {
        name
        slug {
          current
        }
        thumbnail {
          alt
          source {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      hero_CaseStudiesLink
      # Conquest
      conquest_Heading
      conquest_Claim
      conquest_Paragraph
      conquest_SecondClaim
      conquest_Cta {
        theme
        text
        href
      }
      # Challange
      challenge_Heading
      challenge_Claim
      challenge_Paragraph
      challenge_SecondClaim
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
      creativity_Heading
      creativity_Paragraph
      creativity_SecondParagraph
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

export const Head = () => (
  <SEO
    title="Agencja interaktywna Kryptonum - partner biznesu online"
    description="Kryptonum, to agencja interaktywna kompleksowo wspierająca Twój biznes online. Partner technologiczny na każdym etapie obecności firmy w internecie."
  />
)