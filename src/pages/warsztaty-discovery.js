import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";

const WorkshopPage = ( { data} ) => {
  const { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
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