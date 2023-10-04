import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import CtaSection from "../components/sections/CtaSection";
import ImageShowcase from "../components/sections/ImageShowcase";

const LocationPage = ({
  data: {
    page: {
      content,
    },
  }
}) => {
  return (
    <>
      {content.map((component, i) => {
        switch (component._type) {
          case 'ctaSection':
            return (
              <CtaSection key={i} data={component} />
            );
          case 'ImageShowcase':
            return (
              <ImageShowcase key={i} data={component} />
            );
          default:
            break;
        }
      })}
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    page: sanityLocationPage(id: {eq: $id}) {
      content {
        ... on SanityCtaSection {
          _type
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
        ... on SanityImageShowcase {
          _type
          images {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          cta {
            theme
            href
            text
          }
        }
      }
    }
  }
`

export const Head = ({
  data: { page: {
    slug,
    seo
  }}
}) => (
  <SEO
    title={seo?.title}
    description={seo?.description}
    url={`/pl/${slug?.current}`}
  />
)

export default LocationPage;