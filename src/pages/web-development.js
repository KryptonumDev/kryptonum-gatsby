import { graphql } from "gatsby";
import * as React from "react"
import { SEO } from "../components/global/Seo";
import CaseStudies from "../components/sections/CaseStudies";
import CtaSection from "../components/sections/CtaSection";
import HeroServices from "../components/sections/HeroServices";
import Testimonials from "../components/sections/Testimonials";
import Advantages from "../components/sections/WebDevelopment/Advantages";
import Flexibility from "../components/sections/WebDevelopment/Flexibility";
import Process from "../components/sections/WebDevelopment/Process";

const WebDevelopmentPage = ({ data }) => {
  const { page: {
    hero_Heading,
    hero_Img,
    hero_Claim,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Nav,
    advantages_Heading,
    advantages_Array,
    advantages_CtaHeading,
    advantages_Cta,
    flexibility_Heading,
    flexibility_Claim,
    flexibility_Paragraph,
    flexibility_SecondParagraph,
    flexibility_Cta,
    process_Heading,
    process_Claim,
    process_Paragraph,
    process_List,
    caseStudies_Heading,
    ctaSection_Heading,
    ctaSection_Cta,
    ctaSection_Img,
  } } = data;
  return (
    <>
      <HeroServices
        title={hero_Heading}
        img={hero_Img}
        claim={hero_Claim}
        paragraph={hero_Paragraph}
        secondParagraph={hero_SecondParagraph}
        nav={hero_Nav}
      />
      <Advantages
        heading={advantages_Heading}
        advantages={advantages_Array}
        ctaHeading={advantages_CtaHeading}
        cta={advantages_Cta}
      />
      <Process data={{
        process_Heading,
        process_Claim,
        process_Paragraph,
        process_List,
      }} />
      <Flexibility data={{
        flexibility_Heading,
        flexibility_Claim,
        flexibility_Paragraph,
        flexibility_SecondParagraph,
        flexibility_Cta
      }} />
      <Testimonials />
      <CaseStudies
        heading={caseStudies_Heading}
      />
      <CtaSection
        heading={ctaSection_Heading}
        cta={ctaSection_Cta}
        img={ctaSection_Img}
      />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityWebDevelopment {
      # Hero
      hero_Heading
      hero_Claim
      hero_Paragraph
      hero_SecondParagraph
      hero_Img {
        alt
        source {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      hero_Nav {
        title
        description
        href
      }
      # Advantages
      advantages_Heading
      advantages_Array {
        title
        description
        img {
          alt
          source {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      advantages_CtaHeading
      advantages_Cta {
        theme
        text
        href
      }
      # Flexibility
      flexibility_Heading
      flexibility_Claim
      flexibility_Paragraph
      flexibility_SecondParagraph
      flexibility_Cta {
        theme
        text
        href
      }
      # Process
      process_Heading
      process_Claim
      process_Paragraph
      process_List {
        title
        description
      }
      # Case Studies
      caseStudies_Heading
      # Call To Action
      ctaSection_Heading
      ctaSection_Cta {
        theme
        text
        href
      }
      ctaSection_Img {
        alt
        source {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 700)
          }
        }
      }
      # Scroll To Next
      scrollToNext {
        heading
        paragraph
        title
        link {
          text
          href
        }
      }
    }
  }
`

export default WebDevelopmentPage;

export const Head = () => (
  <SEO
    title="Web development, e-commerce, usługi internetowe | Oferta Kryptonum"
    description="Usługi internetowe szyte na miarę: od strategii web i identyfikacji wizualnej, przez chwytliwe treści www, do zaawansowanych stron i sklepów online."
  />
)