import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import CtaSection from "../components/sections/CtaSection";
import ImageShowcase from "../components/sections/ImageShowcase";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";
import Hero from "../components/sections/LocationPage/Hero";
import CaseStudies from "../components/sections/CaseStudies";
import SimpleCtaSection from "../components/sections/SimpleCtaSection";
import TextComponent from "../components/sections/TextComponent";
import ImageComponent from "../components/sections/ImageComponent";
import TilesComponent from "../components/sections/TilesComponent";
import CenteredHeading from "../components/sections/CenteredHeading";
import TextColumnComponent from "../components/sections/TextColumnComponent";
import Process from "../components/sections/Process";
import LargeListWithImg from "../components/sections/LargeListWithImg";
import LogoShowcase from "../components/sections/LogoShowcase";
import GridFloatingImg from "../components/sections/GridFloatingImg";
import ListWithOverflowIcon from "../components/sections/ListWithOverflowIcon";

const LocationPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_List,
      hero_Cta,
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
        hero_Cta,
      }} />
      {content.map((component, i) => {
        switch (component._type) {
          case 'CaseStudies':
            return <CaseStudies key={i} heading={component?.heading} eagerLoading={true} />
          case 'ctaSection':
            return <CtaSection key={i} data={component} />
          case 'ImageShowcase':
            return <ImageShowcase key={i} data={component} />
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
            return <Testimonials key={i} heading={component?.heading} />
          case 'simpleCtaSection':
            return <SimpleCtaSection key={i} data={component} />
          case 'TextComponent':
            return <TextComponent key={i} data={component} />
          case 'TextColumnComponent':
            return <TextColumnComponent key={i} data={component} />
          case 'ImageComponent':
            return <ImageComponent key={i} data={component} />
          case 'TilesComponent':
            return <TilesComponent key={i} data={component} />
          case 'CenteredHeading':
            return <CenteredHeading key={i} data={component} />
          case 'ListWithOverflowIcon_Array':
            return <ListWithOverflowIcon key={i} data={component} />
          case 'Process':
            return <Process key={i} data={component} />
          case 'LargeList':
            return <LargeListWithImg key={i} data={component} />
          case 'LogoShowcase':
            return <LogoShowcase key={i} data={component} />
          case 'GridFloatingImg':
            return <GridFloatingImg key={i} data={component} />
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
      hero_Cta {
        theme
        text
        href
      }
      slug {
        current
      }
      content {
        ... on SanityCaseStudies {
          _type
          heading
        }
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
        ... on SanitySimpleCtaSection {
          _type
          heading
          cta {
            theme
            href
            text
          }
        }
        ... on SanityTextComponent {
          _type
          heading
          blocks {
            icon {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED, width: 106, height: 106)
              }
            }
            title
            description
          }
        }
        ... on SanityTextColumnComponent {
          _type
          heading
          items: blocks
        }
        ... on SanityImageComponent {
          _type
          isMockup
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        ... on SanityTilesComponent {
          _type
          heading
          list {
            icon {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            title
            description
          }
        }
        ... on SanityCenteredHeading {
          _type
          heading
          paragraph
        }
        ... on SanityListWithOverflowIconArray {
          _type
          blocks {
            icon {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            title
            description
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
        ... on SanityProcess {
          _type
          heading
          blocks {
            title
            description
          }
        }
        ... on SanityLargeList {
          _type
          heading
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          list {
            title
            description
          }
        }
        ... on SanityLogoShowcase {
          _type
          heading
          paragraph
          proposals {
            title
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
        ... on SanityGridFloatingImg {
          _type
          heading
          list {
            title
            description
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED, width: 320)
              }
            }
            href
          }
        }
      }
      seo {
        title
        description
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