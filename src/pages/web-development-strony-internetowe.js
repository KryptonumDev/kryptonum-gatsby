import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import QuickForm from "../components/sections/QuickForm";
import CaseStudies from "../components/sections/CaseStudies";
import BlogEntries from "../components/sections/BlogEntries";
import CtaSection from "../components/sections/CtaSection";
import SimpleCtaSection from "../components/sections/SimpleCtaSection";

const WebDevelopmentWebsitesPage = ({ data }) => {
  const { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    hero_CtaHeading,
    hero_Cta,
    quickForm,
    caseStudies_Heading,
    ctaSection,
    simpleCtaSection_Heading,
    simpleCtaSection_Cta,
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
      <CtaSection data={ctaSection} />
      <QuickForm data={quickForm} />
      <CaseStudies heading={caseStudies_Heading} />
      <SimpleCtaSection heading={simpleCtaSection_Heading} cta={simpleCtaSection_Cta} />
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
      hero_CtaHeading
      hero_Cta {
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
      simpleCtaSection_Heading
      simpleCtaSection_Cta {
        theme
        href
        text
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