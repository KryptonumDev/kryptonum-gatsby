import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../components/global/Seo";
import HeroTwoColumns from "../../components/sections/HeroTwoColumns";
import SimpleCtaSection from "../../components/sections/SimpleCtaSection";

const PrivacyPolicyPage = ({
  data: { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Img,
    simpleCtaSection
  }}
}) => {
  return (
    <>
      <HeroTwoColumns
        heading={hero_Heading}
        paragraph={hero_Paragraph}
        img={hero_Img}
      />
      <SimpleCtaSection data={simpleCtaSection} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityPrivacyPolicy {
      # Hero
      hero_Heading
      hero_Paragraph
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # Content
      content {
        style
        children {
          text
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
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export default PrivacyPolicyPage;

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/polityka-prywatnosci'
  />
)