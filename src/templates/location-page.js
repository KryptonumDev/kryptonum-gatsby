import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import CtaSection from "../components/sections/CtaSection";
import ImageShowcase from "../components/sections/ImageShowcase";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";
import Hero from "../components/sections/LocationPage/Hero";

const LocationPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_List,
      content,
    },
  }
}) => {
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Subheading,
        hero_List,
      }} />
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
          case 'TeamSection':
            return (
              <Team
                key={i}
                heading={component?.heading}
                paragraph={component?.paragraph}
                cta={component?.cta}
              />
            );
          case 'LatestTestimonials':
            return (
              <Testimonials
                key={i}
                heading={component?.heading}
              />
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
      hero_Heading
      hero_Subheading
      hero_List
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
        ... on SanityTeamSection {
          _type
          heading
          paragraph
          cta {
            theme
            href
            text
          }
        }
        ... on SanityLatestTestimonials {
          _type
          heading
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