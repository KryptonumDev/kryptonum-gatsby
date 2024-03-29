import * as React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components";
import { SEO } from "../components/global/Seo";
import Hero from "../components/sections/CaseStudies/Hero";
import CtaSection from "../components/sections/CtaSection";
import Participated from "../components/sections/CaseStudies/Participated";
import { Clamp } from "../utils/functions";
import Stylescape from "../components/sections/CaseStudies/Stylescape";
import Testimonial from "../components/sections/CaseStudies/Testimonial";
import Slider from "../components/sections/CaseStudies/Slider";
import ImageShowcase from "../components/sections/ImageShowcase";
import TextComponent from "../components/sections/TextComponent";
import ImageComponent from "../components/sections/ImageComponent";
import Feautures from "../components/sections/CaseStudies/Feautures";
import LogoShowcase from "../components/sections/LogoShowcase";

const CaseStudyPage = ({
  data: {
    caseStudy : {
      heading,
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
              <TextComponent key={i} data={component} />
            );
          case 'caseStudy_Image':
            return (
              <ImageComponent key={i} data={component} />
            );
          case 'ImageShowcase':
            return (
              <ImageShowcase key={i} data={component} />
            );
          case 'LogoShowcase':
            return (
              <LogoShowcase key={i} data={component} />
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
              <CtaSection key={i} data={component} />
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