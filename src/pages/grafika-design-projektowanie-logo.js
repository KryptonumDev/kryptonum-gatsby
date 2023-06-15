import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import SimpleCtaSection from "../components/sections/SimpleCtaSection";
import QuickForm from "../components/sections/QuickForm";
import BlogEntries from "../components/sections/BlogEntries";
import CaseStudies from "../components/sections/CaseStudies";
import CtaSection from "../components/sections/CtaSection";
import Showcase from "../components/sections/GraphicsAndDesign_Logo/Showcase";
import ListSection from "../components/sections/ListSection";

const LogoPage = ({
  data: { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    simpleCtaSection,
    showcase_Heading,
    showcase_Paragraph,
    showcase_List,
    showcase_SummaryLeft,
    showcase_SummaryRight,
    quickForm,
    process_Heading,
    process_Paragraph,
    process_Title,
    process_List,
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
      <Showcase data={{
        showcase_Heading,
        showcase_Paragraph,
        showcase_List,
        showcase_SummaryLeft,
        showcase_SummaryRight,
      }} />
      <QuickForm data={quickForm} />
      <ListSection
        heading={process_Heading}
        paragraph={process_Paragraph}
        title={process_Title}
        list={process_List}
      />
      <CaseStudies heading={caseStudies_Heading} />
      <CtaSection data={ctaSection} />
      <BlogEntries heading={blogEntries_Heading} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityGraphicsDesignLogo {
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
      # Showcase
      showcase_Heading
      showcase_Paragraph
      showcase_List {
        title
        description
      }
      showcase_SummaryLeft
      showcase_SummaryRight
      # Quick Form
      quickForm {
        heading
        subheading
        cta
      }
      # Process
      process_Heading
      process_Paragraph
      process_Title
      process_List {
        title
        description
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

export default LogoPage;

export const Head = () => (
  <SEO
    title="Projektowanie logo dla firm i profesjonalistów | Kryptonum"
    description="Postaw na profesjonalne logo dla swojej firmy! Zaprojektujemy dla Ciebie wizualną wizytówkę - esencję Twojej marki, która zapadnie w pamięć. Sprawdź!"
  />
)