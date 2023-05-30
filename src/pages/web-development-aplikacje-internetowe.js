import { graphql } from "gatsby";
import * as React from "react"
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";

const WebDevelopmentPWAsPage = ({ data }) => {
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