import * as React from "react"
import { graphql } from "gatsby"
import { SEO } from "../../../components/global/Seo";
import Team from "../../../components/sections/Team";
import Hero from "../../../components/sections/Team/Hero";
import Testimonials from "../../../components/sections/Team/Testimonials";
import CtaSection from '../../../components/sections/CtaSection';
import Attitude from "../../../components/sections/Team/Attitude";
import SmallCtaSection from "../../../components/sections/Team/SmallCtaSection";
import LatestCuriosityEntries from "../../../components/sections/LatestCuriosityEntries";

const TeamPage = ({
  data: { page : {
    hero_Heading,
    hero_Paragraph,
    hero_Column,
    smallCta_Heading,
    smallCta_Cta,
    smallCta_Heading2,
    smallCta_Cta2,
    testimonials_Heading,
    testimonials_List,
    team_Heading,
    team_Paragraph,
    attitude_Heading,
    attitude_Paragraph,
    attitude_Claim,
    attitude_Img,
    ctaSection,
    curiosityEntries_Heading
  }
  }
}) => {
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Paragraph,
        hero_Column,
      }} />
      <SmallCtaSection data={{
        smallCta_Heading,
        smallCta_Cta,
        smallCta_Heading2,
        smallCta_Cta2,
      }} />
      <Testimonials data={{
        testimonials_Heading,
        testimonials_List,
      }} />
      <Team
        heading={team_Heading}
        paragraph={team_Paragraph}
      />
      <Attitude data={{
        attitude_Heading,
        attitude_Paragraph,
        attitude_Claim,
        attitude_Img,
      }} />
      <CtaSection data={ctaSection} />
      <LatestCuriosityEntries heading={curiosityEntries_Heading} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityTeam {
      # Hero
      hero_Heading
      hero_Paragraph
      hero_Column {
        title
        description
      }
      # Small CTA Seciton
      smallCta_Heading
      smallCta_Cta {
        theme
        text
        href
      }
      smallCta_Heading2
      smallCta_Cta2 {
        theme
        text
        href
      }
      # Testimonails
      testimonials_Heading
      testimonials_List
      # Team
      team_Heading
      team_Paragraph
      # Attitude
      attitude_Heading
      attitude_Paragraph
      attitude_Claim
      attitude_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # CTA Section
      ctaSection {
        heading
        cta {
          theme
          text
          href
        }
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 700)
          }
        }
      }
      # Curiosity Entries
      curiosityEntries_Heading
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export default TeamPage

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/zespol'
  />
)