import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import ListSection from "../components/sections/ListSection";
import SimpleCtaSection from "../components/sections/SimpleCtaSection";
import Why from "../components/sections/Workshop/Why";
import Document from "../components/sections/Workshop/Document";

const WorkshopPage = ( { data} ) => {
  const { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    simpleCtaSection,
    process_Heading,
    process_List,
    why_Heading,
    why_Paragraph,
    why_SecondParagraph,
    why_ThirdParagraph,
    why_FourthParagraph,
    why_Cta,
    document_Heading,
    document_Paragraph,
    document_Paragraph2,
    document_Images,
    document_SimpleCtaSection,
  } } = data;
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
      <ListSection heading={process_Heading} list={process_List} />
      <Why data={{
        why_Heading,
        why_Paragraph,
        why_SecondParagraph,
        why_ThirdParagraph,
        why_FourthParagraph,
        why_Cta,
      }} />
      <Document data={{
        document_Heading,
        document_Paragraph,
        document_Paragraph2,
        document_Images,
      }} />
      <SimpleCtaSection data={document_SimpleCtaSection} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityWorkshop {
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
      # Process
      process_Heading
      process_List {
        title
        description
      }
      # Why 
      why_Heading
      why_Paragraph
      why_SecondParagraph
      why_ThirdParagraph
      why_FourthParagraph
      why_Cta {
        theme
        text
        href
      }
      # Document
      document_Heading
      document_Paragraph
      document_Paragraph2
      document_Images {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 1000)
        }
      }
      document_SimpleCtaSection {
        heading
        cta {
          theme
          text
          href
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
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export default WorkshopPage;

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/warsztaty-discovery'
  />
)