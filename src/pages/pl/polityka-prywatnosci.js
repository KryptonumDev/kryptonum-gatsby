import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../components/global/Seo";

const PrivacyPolicyPage = ( { data } ) => {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Img,
  } } = data;
  return (
    <>
      <h1>HEJ</h1>
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
  />
)