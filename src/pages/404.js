import * as React from "react"
import { graphql } from "gatsby"
import HeroTwoColumns from "../components/sections/HeroTwoColumns"
import CtaSection from "../components/sections/CtaSection";

const NotFoundPage = ({data}) => {
  const { notFound: {
    hero_Heading,
    hero_Subheading,
    hero_Cta,
    hero_Img,
    ctaSection_Heading,
    ctaSection_Cta,
    ctaSection_Img
  } } = data;
  console.log(data);
  return (
    <>
      <HeroTwoColumns
        heading={hero_Heading}
        subheading={hero_Subheading.data.childMarkdownRemark.rawMarkdownBody}
        cta={hero_Cta}
        img={hero_Img}
      />
      <CtaSection
        heading={ctaSection_Heading}
        cta={ctaSection_Cta}
        img={ctaSection_Img}
      />
    </>
  )
}

export const query = graphql`
  query {
    notFound: strapiNotFound {
      hero_Heading
      hero_Subheading {
        data {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      hero_Cta {
        theme
        text
        href
      }
      hero_Img {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 700)
          }
        }
      }
      ctaSection_Heading
      ctaSection_Cta {
        theme
        text
        href
      }
      ctaSection_Img {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 700)
          }
        }
      }
    }
  }
`

export default NotFoundPage

export const Head = () => <title>Not found</title>
