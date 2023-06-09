import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import CaseStudies from "../components/sections/CaseStudies";
import BlogEntries from "../components/sections/BlogEntries";
import CtaSection from "../components/sections/CtaSection";
import SimpleCtaSection from "../components/sections/SimpleCtaSection";
import Pricing from "../components/sections/WebDevelopment_Site/Pricing";
import Process from "../components/sections/WebDevelopment_Site/Process";
import Technology from "../components/sections/WebDevelopment_Site/Technology";
import Faq from "../components/sections/Faq";

const WebDevelopmentWebsitesPage = ({ data }) => {
  const { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    hero_simpleCtaSection,
    pricing_Heading,
    pricing_Plans,
    process_Heading,
    process_List,
    roadmap_Heading,
    roadmap_List,
    roadmap_Cta,
    quickForm,
    technology_Heading,
    technology_Paragraph,
    technology_Content,
    technology_Img,
    caseStudies_Heading,
    ctaSection,
    simpleCtaSection,
    blogEntries_Heading,
  } } = data;
  return (
    <>
      <HeroServices data={{
        hero_Heading,
        hero_Annotation,
        hero_Paragraph,
        hero_SecondParagraph,
        hero_Img,
        hero_simpleCtaSection,
      }} />
      <Pricing data={{
        pricing_Heading,
        pricing_Plans
      }} />
      <Faq />
      <CtaSection data={ctaSection} />
      <Process data={{
        process_Heading,
        process_List,
        roadmap_Heading,
        roadmap_List,
        roadmap_Cta,
        quickForm,
      }} />
      <Technology data={{
        technology_Heading,
        technology_Paragraph,
        technology_Content,
        technology_Img,
      }} />
      <CaseStudies heading={caseStudies_Heading} />
      <SimpleCtaSection data={simpleCtaSection} />
      <BlogEntries heading={blogEntries_Heading} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityWebDevelopmentSite {
      # Hero
      hero_Heading
      hero_Annotation
      hero_Paragraph
      hero_SecondParagraph
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      hero_simpleCtaSection {
        heading
        cta {
          theme
          text
          href
        }
      }
      # Pricing
      pricing_Heading
      pricing_Plans {
        title
        description
        subpages
        price
        cta {
          theme
          text
          href
        }
        benefits {
          name
          highlighted
        }
        hint
        mostPopular
      }
      # Process
      process_Heading
      process_List {
        claim
        heading
        subheading
        paragraph
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 700)
          }
        }
      }
      # Roadmap
      roadmap_Heading
      roadmap_List {
        title
        description
      }
      roadmap_Cta {
        theme
        text
        href
      }
      # Quick Form
      quickForm {
        heading
        subheading
        cta
      }
      # Technology 
      technology_Heading
      technology_Paragraph
      technology_Content
      technology_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 250)
        }
      }
      # Case Studies
      caseStudies_Heading
      # Call To Action
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
      # Simple CTA Section
      simpleCtaSection {
        heading
        cta {
          text
          theme
          href
        }
      }
      # Blog Entries
      blogEntries_Heading
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

export default WebDevelopmentWebsitesPage;

export const Head = () => (
  <SEO
    title="Profesjonalne strony internetowe na zamówienie | Kryptonum"
    description="Stworzymy dla Ciebie stronę internetową, która nie tylko zachwyci wyglądem, będzie też funkcjonalna, szybka i zoptymalizowana."
  />
)