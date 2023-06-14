import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import SimpleCtaSection from "../components/sections/SimpleCtaSection";
import BlogEntries from "../components/sections/BlogEntries";
import CaseStudies from "../components/sections/CaseStudies";
import CtaSection from "../components/sections/CtaSection";
import Audit from "../components/sections/GraphicsDesign/Audit";
import List from "../components/sections/GraphicsDesign/List";

const GraphicsPage = ( { data} ) => {
  const { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    hero_Nav,
    audit_Paragraph,
    audit_Paragraph2,
    audit_Paragraph3,
    audit_Cta,
    audit_Img,
    simpleCtaSection,
    digital_Heading,
    digital_Paragraph,
    digital_Paragraph2,
    digital_List,
    simpleCtaSection2,
    phisical_Heading,
    phisical_Paragraph,
    phisical_Paragraph2,
    phisical_List,
    simpleCtaSection3,
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
        hero_Nav
      }} />
      <Audit data={{
        audit_Paragraph,
        audit_Paragraph2,
        audit_Paragraph3,
        audit_Cta,
        audit_Img
      }} />
      <SimpleCtaSection data={simpleCtaSection} />
      <List
        heading={digital_Heading}
        paragraph={digital_Paragraph}
        paragraph2={digital_Paragraph2}
        list={digital_List}
      />
      <SimpleCtaSection data={simpleCtaSection2} />
      <List
        heading={phisical_Heading}
        paragraph={phisical_Paragraph}
        paragraph2={phisical_Paragraph2}
        list={phisical_List}
      />
      <SimpleCtaSection data={simpleCtaSection3} />
      <CaseStudies heading={caseStudies_Heading} />
      <CtaSection data={ctaSection} />
      <BlogEntries heading={blogEntries_Heading} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityGraphicsDesign {
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
      hero_Nav {
        title
        description
        href
      }
      # Audit
      audit_Paragraph
      audit_Paragraph2
      audit_Paragraph3
      audit_Cta {
        theme
        text
        href
      }
      audit_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 516)
        }
      }
      # Simple CTA Section
      simpleCtaSection {
        heading
        cta {
          theme
          href
          text
        }
      }
      # Digital products
      digital_Heading
      digital_Paragraph
      digital_Paragraph2
      digital_List
      # Second Simple CTA Section
      simpleCtaSection2 {
        heading
        cta {
          theme
          href
          text
        }
      }
      # Digital products
      phisical_Heading
      phisical_Paragraph
      phisical_Paragraph2
      phisical_List
      # Third Simple CTA Section
      simpleCtaSection3 {
        heading
        cta {
          theme
          href
          text
        }
      }
      # Case Studies
      caseStudies_Heading
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
      # Blog entries
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

export default GraphicsPage;

export const Head = () => (
  <SEO
    title="Usługi graficzne: identyfikacja wizualna, design i kreacja | Kryptonum"
    description="Kompleksowe usługi w zakresie kreacji, projektowania wizerunku marki, identyfikacji wizualnej, designu i tworzenia dedykowanych projektów graficznych!"
  />
)