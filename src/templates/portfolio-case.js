import * as React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components";
import { SEO } from "../components/global/Seo";
import Hero from "../components/sections/CaseStudies/Hero";
import CtaSection from "../components/sections/CtaSection";
import Participated from "../components/sections/CaseStudies/Participated";
import Text from "../components/sections/CaseStudies/Text";
import Image from "../components/sections/CaseStudies/Image";
import Showcase from "../components/sections/CaseStudies/Showcase";
import Logo from "../components/sections/CaseStudies/Logo";
import { Clamp } from "../utils/functions";
import Stylescape from "../components/sections/CaseStudies/Stylescape";
import Feautures from "../components/sections/CaseStudies/Feautures";
import Testimonial from "../components/sections/CaseStudies/Testimonial";
import Slider from "../components/sections/CaseStudies/Slider";

const CaseStudyPage = ({
  data: {
    caseStudy : {
      heading,
      paragraph,
      paragraph2,
      categories_Paragraph,
      categories,
      img,
      content,
    },
  },
  pageContext,
}) => {
  return (
    <>
      <GlobalStyle />
      <Hero
        data={{
          heading,
          paragraph,
          paragraph2,
          categories_Paragraph,
          categories,
          img,
        }}
        pageContext={pageContext}
      />
      {content.map((component, i) => {
        switch (component._type) {
          case 'caseStudy_Participated':
            return (
              <Participated key={i} data={component} />
            );
          case 'caseStudy_Text':
            return (
              <Text key={i} data={component} />
            );
          case 'caseStudy_Image':
            return (
              <Image key={i} data={component} />
            );
          case 'caseStudy_Showcase':
            return (
              <Showcase key={i} data={component} />
            );
          case 'caseStudy_Logo':
            return (
              <Logo key={i} data={component} />
            );
          case 'caseStudy_Stylescape':
            return (
              <Stylescape key={i} data={component} />
            );
          case 'caseStudy_Feautures':
            return (
              <Feautures key={i} data={component} />
            );
          case 'ctaSection':
            return (
              <CtaSection key={i} data={component} lighter={true} />
            );
          case 'testimonials':
            return (
              <Testimonial key={i} data={component} />
            );
          case 'caseStudy_Slider':
            return (
              <Slider key={i} data={component} />
            );
          default:
            break;
        }
      })}
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    caseStudy: sanityCaseStudyEntries(id: {eq: $id}) {
      name
      slug {
        current
      }
      heading
      categories_Paragraph
      categories {
        name
      }
      img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      content {
        ... on SanityCaseStudyParticipated {
          _type
          heading
          paragraph
          people {
            name
            slug {
              current
            }
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED, width: 106, height: 106)
              }
            }
          }
        }
        ... on SanityCaseStudyText {
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
        ... on SanityCaseStudyImage {
          _type
          isMockup
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        ... on SanityCaseStudyShowcase {
          _type
          images {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        ... on SanityCaseStudyLogo {
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
        ... on SanityCaseStudyStylescape {
          _type
          heading
          paragraph
          stylescapes {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          elements {
            title
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
        ... on SanityCaseStudyFeautures {
          _type
          heading
          feautures {
            title
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
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
        ... on SanityTestimonials {
          _type
          name
          text
          cta {
            theme
            text
            href
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 156)
            }
          }
        }
        ... on SanityCaseStudySlider {
          _type
          heading
          slides {
            title
            description
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED, width: 40, height: 40)
              }
            }
          }
        }
      }
      seo {
        title
        description
      }
      ogImage: img {
        asset {
          resize(width: 1200) {
            src
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default CaseStudyPage

export const Head = ({
  data: {
    caseStudy: {
      seo,
      slug,
      ogImage,
    },
    site: { siteMetadata: { siteUrl } }
  }
}) => {
  return (
    <SEO
      title={seo?.title}
      description={seo?.description}
      url={`/pl/portfolio/${slug.current}`}
      ogImage={`${siteUrl}${ogImage.asset.resize.src}`}
    />
  )
}

const GlobalStyle = createGlobalStyle`
  main {
    padding-top: 0;
  }
  h2 {
    font-size: ${Clamp(20, 28, 28)};
  }
`