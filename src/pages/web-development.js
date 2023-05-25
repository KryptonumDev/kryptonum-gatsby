import { graphql } from "gatsby";
import * as React from "react"
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";

const WebDevelopmentPage = ({ data: { webDevelopment } }) => {
  return (
    <HeroServices
      title={webDevelopment.hero_Heading}
      img={webDevelopment.hero_Img}
      claim={webDevelopment.hero_Claim}
      paragraph={webDevelopment.hero_Paragraph}
      secondParagraph={webDevelopment.hero_SecondParagraph}
      nav={webDevelopment.hero_Nav}
    />
  );
}

export const query = graphql`
  query {
    webDevelopment: sanityWebDevelopment {
      # Hero
      hero_Heading
      hero_Claim
      hero_Paragraph
      hero_SecondParagraph
      hero_Img {
        alt
        source {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      hero_Nav {
        title
        description
        href
      }
    }
  }
`

export default WebDevelopmentPage;

export const Head = () => (
  <SEO
    title="Web development, e-commerce, usługi internetowe | Oferta Kryptonum"
    description="Usługi internetowe szyte na miarę: od strategii web i identyfikacji wizualnej, przez chwytliwe treści www, do zaawansowanych stron i sklepów online."
  />
)