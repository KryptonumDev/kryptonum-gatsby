import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import SimpleCtaSection from "../components/sections/SimpleCtaSection";
import QuickForm from "../components/sections/QuickForm";
import BlogEntries from "../components/sections/BlogEntries";
import CaseStudies from "../components/sections/CaseStudies";
import CtaSection from "../components/sections/CtaSection";
import Audit from "../components/sections/GraphicsAndDesign_Audit/Audit";

const AuditPage = ({
  data: { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    simpleCtaSection,
    digitalAudit_Heading,
    digitalAudit_Headline,
    digitalAudit_Paragraph,
    digitalAudit_Paragraph2,
    digitalAudit_ListHeading,
    digitalAudit_List,
    uxAudit_Heading,
    uxAudit_Headline,
    uxAudit_Title,
    uxAudit_Paragraph,
    uxAudit_Paragraph2,
    uxAudit_Question,
    uxAudit_Answer,
    uxAudit_When,
    uxAudit_WhenList,
    uxAudit_ListHeading,
    uxAudit_List,
    quickForm,
    comboAudit_Heading,
    comboAudit_Paragraph,
    comboAudit_Paragraph2,
    comboAudit_ListHeading,
    comboAudit_List,
    caseStudies_Heading,
    ctaSection,
    blogEntries_Heading,
  }}
}) => {
  return (
    <>
      <HeroServices data={{
        hero_Heading,
        hero_Annotation,
        hero_Paragraph,
        hero_SecondParagraph,
        hero_Img,
      }} />
      <SimpleCtaSection data={simpleCtaSection} />
      <Audit data={{
        heading: digitalAudit_Heading,
        headline: digitalAudit_Headline,
        paragraph: digitalAudit_Paragraph,
        paragraph2: digitalAudit_Paragraph2,
        listHeading: digitalAudit_ListHeading,
        list: digitalAudit_List,
      }} />
      <Audit data={{
        heading: uxAudit_Heading,
        headline: uxAudit_Headline,
        paragraph: uxAudit_Paragraph,
        paragraph2: uxAudit_Paragraph2,
        listHeading: uxAudit_ListHeading,
        list: uxAudit_List,
        ux: {
          title: uxAudit_Title,
          question: uxAudit_Question,
          answer: uxAudit_Answer,
          when: uxAudit_When,
          whenList: uxAudit_WhenList,
        }
      }} />
      <QuickForm data={quickForm} />
      <Audit data={{
        heading: comboAudit_Heading,
        paragraph: comboAudit_Paragraph,
        paragraph2: comboAudit_Paragraph2,
        listHeading: comboAudit_ListHeading,
        list: comboAudit_List,
      }} />
      <CaseStudies heading={caseStudies_Heading} />
      <CtaSection data={ctaSection} />
      <BlogEntries heading={blogEntries_Heading} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityAudits {
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
      # Simple CTA Section
      simpleCtaSection {
        heading
        cta {
          theme
          href
          text
        }
      }
      # Digital Audit
      digitalAudit_Heading
      digitalAudit_Headline
      digitalAudit_Paragraph
      digitalAudit_Paragraph2
      digitalAudit_ListHeading
      digitalAudit_List
      # UX Audit
      uxAudit_Heading
      uxAudit_Headline
      uxAudit_Title
      uxAudit_Paragraph
      uxAudit_Paragraph2
      uxAudit_Question
      uxAudit_Answer
      uxAudit_When
      uxAudit_WhenList
      uxAudit_ListHeading
      uxAudit_List
      # Quick Form
      quickForm {
        heading
        subheading
        cta
      }
      # Combo Audit
      comboAudit_Heading
      comboAudit_Paragraph
      comboAudit_Paragraph2
      comboAudit_ListHeading
      comboAudit_List
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

export default AuditPage;

export const Head = () => (
  <SEO
    title="Usługi UX / UI: audyt wizualny, design, prototypowanie | Kryptonum"
    description="Zachwyć użytkowników funkcjonalnym interfejsem strony i zapewnij niepowtarzalne doświadczenia użytkownika. Usługi User Experience i User Interface"
  />
)