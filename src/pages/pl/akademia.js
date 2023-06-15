import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../components/global/Seo";
import HeroTwoColumns from "../../components/sections/HeroTwoColumns";
import CtaSection from "../../components/sections/CtaSection";

const AcademyPage = ({
  data: { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Img,
    ctaSection,
  }}
}) => {
  return (
    <>
      <HeroTwoColumns
        heading={hero_Heading}
        paragraph={hero_Paragraph}
        img={hero_Img}
      />
      <CtaSection data={ctaSection} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityAcademy {
      # Hero
      hero_Heading
      hero_Paragraph
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
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
    }
  }
`

export default AcademyPage;

export const Head = () => (
  <SEO
    title="Akademia Kryptonum - ekspercka wiedza z cyfrowego świata"
    description="Tutoriale, insighty, case studies i porady z obszaru web developmentu, designu, UX, UI, copywritingu i SEO. W Akademii Kryptonum każdy znajdzie coś dla siebie."
  />
)