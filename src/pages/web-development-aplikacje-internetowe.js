import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import Process from "../components/sections/WebDevelopment_Pwa/Process";
import CtaSection from "../components/sections/CtaSection";
import CaseStudies from "../components/sections/CaseStudies";
import BlogEntries from '../components/sections/BlogEntries';

const WebDevelopmentPWAsPage = ({ data }) => {
  const { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    talk_Heading,
    talk_Cta,
    process_Heading,
    process_Paragraph,
    process_SecondParagraph,
    process_List,
    ctaSection,
    caseStudies_Heading,
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
        
        talk_Heading,
        talk_Cta
      }} />
      <Process data={{
        process_Heading,
        process_Paragraph,
        process_SecondParagraph,
        process_List
      }} />
      <CtaSection data={ctaSection} />
      <CaseStudies heading={caseStudies_Heading} />
      <BlogEntries heading={blogEntries_Heading} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityWebDevelopmentPwa {
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
      # Talk section
      talk_Heading
      talk_Cta {
        theme
        text
        href
      }
      # Process
      process_Heading
      process_Paragraph
      process_SecondParagraph
      process_List {
        heading
        subheading
        paragraph
        secondParagraph
        img {
          asset {
            altText
            gatsbyImageData
          }
        }
      }
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
      # Case Studies
      caseStudies_Heading
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

export default WebDevelopmentPWAsPage;

export const Head = () => (
  <SEO
    title="Web development, e-commerce, usługi internetowe | Oferta Kryptonum"
    description="Usługi internetowe szyte na miarę: od strategii web i identyfikacji wizualnej, przez chwytliwe treści www, do zaawansowanych stron i sklepów online."
  />
)