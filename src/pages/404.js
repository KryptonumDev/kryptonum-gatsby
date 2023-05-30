import * as React from "react"
import { graphql } from "gatsby"
import HeroTwoColumns from "../components/sections/HeroTwoColumns"
import CtaSection from "../components/sections/CtaSection";
import { SEO } from "../components/global/Seo";

const NotFoundPage = ({data}) => {
  const { notFound: {
    hero_Heading,
    hero_Subheading,
    hero_Cta,
    hero_Img,
    ctaSection,
  } } = data;
  return (
    <>
      <HeroTwoColumns
        heading={hero_Heading}
        subheading={hero_Subheading}
        cta={hero_Cta}
        img={hero_Img}
      />
      <CtaSection data={ctaSection} />
    </>
  )
}

export const query = graphql`
  query {
    notFound: sanityNotFound {
      hero_Heading
      hero_Subheading
      hero_Cta {
        theme
        text
        href
      }
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 700)
        }
      }
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

export default NotFoundPage

export const Head = () => (
  <SEO
    title="Wystrzeliło Cię w kosmos!"
  />
)