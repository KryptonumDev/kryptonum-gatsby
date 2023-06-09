import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import Process from "../components/sections/Workshop/Process";
import SimpleCtaSection from "../components/sections/SimpleCtaSection";

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
      <Process data={{
        process_Heading,
        process_List
      }} />
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

export default WorkshopPage;

export const Head = () => (
  <SEO
    title="Warsztaty UX, product discovery i MVP | Kryptonum"
    description="Weź udział w warsztatach i wznieś swój produkt na wyżyny. Minimum viable product, product discovery, warsztaty UX, scrum w praktyce i więcej!"
  />
)