import * as React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/global/Seo";
import Hero from "../components/sections/Homepage/Hero";
import Services from "../components/sections/Homepage/Services";
import Creativity from "../components/sections/Homepage/Creativity";
import Roadmap from "../components/sections/Roadmap";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";
import FourGrid from "../components/sections/Homepage/FourGrid";
import LatestBlogEntries from "../components/sections/LatestBlogEntries";

const IndexPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Cta,
      services_Heading,
      services_List,
      conquest_Heading,
      conquest_Claim,
      conquest_Paragraph,
      conquest_SecondClaim,
      conquest_Cta,
      challenge_Heading,
      challenge_Claim,
      challenge_Paragraph,
      challenge_SecondClaim,
      challenge_Cta,
      creativity_Heading,
      creativity_Paragraph,
      creativity_SecondParagraph,
      roadmap_Heading,
      roadmap_Process,
      roadmap_Cta,
      team_Heading,
      team_Text,
      team_Cta,
    },
    webDevelopment,
    workshop,
    agency,
    graphicsAndDesign,
  },
  pageContext
}) => {
  pageContext = 'ABRAKADABRA'
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Subheading,
        hero_Cta,
      }} />
      <Services data={{
        services_Heading,
        services_List,
        webDevelopment,
        workshop,
        agency,
        graphicsAndDesign,
      }} />
      <FourGrid
        heading={conquest_Heading}
        claim={conquest_Claim}
        paragraph={conquest_Paragraph}
        secondClaim={conquest_SecondClaim}
        cta={conquest_Cta}
      />
      <FourGrid
        heading={challenge_Heading}
        claim={challenge_Claim}
        paragraph={challenge_Paragraph}
        secondClaim={challenge_SecondClaim}
        cta={challenge_Cta}
      />
      <Creativity data={{
        creativity_Heading,
        creativity_Paragraph,
        creativity_SecondParagraph,
      }} />
      <Roadmap
        heading={roadmap_Heading}
        list={roadmap_Process}
        cta={roadmap_Cta}
      />
      <Team
        heading={team_Heading}
        paragraph={team_Text}
        cta={team_Cta}
      />
      <Testimonials />
      <LatestBlogEntries />
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
      # Services
      services_Heading
      services_List {
        title
        description
        href
      }
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
      # SEO
      seo {
        title
        description
      }
    }
    webDevelopment: sanityWebDevelopment {
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
        }
      }
    }
    workshop: sanityWorkshop {
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
        }
      }
    }
    agency: sanityAgency {
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
        }
      }
    }
    graphicsAndDesign: sanityGraphicsDesign {
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 200, height: 200)
        }
      }
    }
  }
`

export default IndexPage

export const Head = ({
  data: { page: { seo: {
    title,
    description
  } } }
}) => (
  <SEO
    title={title}
    description={description}
    url=''
  />
)