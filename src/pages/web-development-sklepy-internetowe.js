import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import QuickForm from "../components/sections/QuickForm";
import CaseStudies from "../components/sections/CaseStudies";
import BlogEntries from "../components/sections/BlogEntries";
import CtaSection from "../components/sections/CtaSection";
import Process from "../components/sections/WebDevelopment_Ecom/Process";

const WebDevelopmentPWAsPage = ({ data }) => {
  const { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    hero_CtaHeading,
    hero_Cta,
    process_Heading,
    process_Claim,
    process_List,
    form_Heading,
    form_Subheading,
    form_Cta,
    caseStudies_Heading,
    ctaSection,
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
        hero_CtaHeading,
        hero_Cta
      }} />
      <Process data={{
        process_Heading,
        process_Claim,
        process_List,
      }} />
      <QuickForm
        heading={form_Heading}
        subheading={form_Subheading}
        cta={form_Cta}
      />
      <CaseStudies heading={caseStudies_Heading} />
      <CtaSection data={ctaSection} />
      <BlogEntries heading={blogEntries_Heading} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityWebDevelopmentEcom {
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
      hero_CtaHeading
      hero_Cta {
        theme
        text
        href
      }
      # Process
      process_Heading
      process_Claim
      process_List {
        heading
        subheading
        paragraph
        secondParagraph
        secondHeading
        cta {
          theme
          text
          href
        }
      }
      # Quick Form
      form_Heading
      form_Subheading
      form_Cta
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
    title="Profesjonalne sklepy internetowe na zamówienie | Kryptonum"
    description="W Kryptonum tworzymy profesjonalne sklepy internetowe z kluczowymi funkcjonalnościami: szybkie płatności, dostawy, opinie. Indywidualny e-commerce!"
  />
)