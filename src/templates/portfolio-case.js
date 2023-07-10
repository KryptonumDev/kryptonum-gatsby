import * as React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components";
import { SEO } from "../components/global/Seo";
import Hero from "../components/sections/CaseStudies/Hero";
import CtaSection from "../components/sections/CtaSection";
import Challenge from "../components/sections/CaseStudies/Challenge";
import Testimonial from "../components/sections/CaseStudies/Testimonial";
import Process from "../components/sections/CaseStudies/Process";
import ImageAndStandout from "../components/sections/ImageAndStandout";
import Summary from "../components/sections/CaseStudies/Summary";
import Technologies from "../components/sections/CaseStudies/Technologies";
import ProcessKeyElements from "../components/sections/CaseStudies/Process_KeyElements";

const CaseStudyPage = ({
  data: { caseStudy : {
    heading,
    paragraph,
    paragraph2,
    categories_Paragraph,
    categories,
    img,
    content,
    ctaSection,
  }}, pageContext
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
          case 'standout':
            return (
              <ImageAndStandout
                key={i}
                heading={component.heading}
                paragraph={component.paragraph}
                standout={component.standout}
                img={component.img}
                reversed={component.reversed}
              />
            );
          case 'caseStudy_Highlight':
            return (
              <Challenge
                key={i}
                heading={component.heading}
                paragraph={component.paragraph}
                claim={component.claim}
              />
            );
          case 'caseStudy_ProcessArray':
            return (
              <Process
                key={i}
                data={component.array}
              />
            );
          case 'caseStudy_Testimonial':
            return (
              <Testimonial
                key={i}
                heading={component.heading}
                testimonial={component.testimonial}
                paragraph={component.paragraph}
                secondParagraph={component.secondParagraph}
              />
            );
          case 'caseStudy_Summary':
            return (
              <Summary
                key={i}
                paragraph={component.paragraph}
                secondParagraph={component.paragraph2}
              />
            );
          case 'caseStudy_Technology':
            return (
              <Technologies
                key={i}
                heading={component.paragraph}
                technologies={component.technologies}
              />
            );
          case 'process_KeyElementsWrapper':
            return (
              <ProcessKeyElements
                key={i}
                isHeading={true}
                paragraph={component.paragraph}
                list={component.list}
              />
            );
          default:
            break;
        }
      })}
      <CtaSection data={ctaSection} />
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
      paragraph
      paragraph2
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
        ... on SanityStandout {
          _type
          heading
          paragraph
          standout
          img {
            asset {
              altText
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
          reversed
        }
        ... on SanityCaseStudyHighlight {
          _type
          heading
          paragraph
          claim
        }
        ... on SanityCaseStudyProcessArray {
          _type
          array {
            ... on SanityCaseStudyProcess {
              _type
              img {
                asset {
                  altText
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
              }
              heading
              subheading
              paragraph
              paragraph2
              principles_Paragraph
              principles_List
              keyElements {
                paragraph
                list {
                  img {
                    asset {
                      altText
                      gatsbyImageData(placeholder: DOMINANT_COLOR)
                    }
                  }
                  heading
                  paragraph
                }
              }
            }
            ... on SanityCaseStudyTechnology {
              _type
              paragraph
              technologies {
                img {
                  asset {
                    altText
                    gatsbyImageData(placeholder: DOMINANT_COLOR)
                  }
                }
              }
            }
            ... on SanityCaseStudyVisualIdentification {
              _type
              images {
                asset {
                  altText
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
              }
              paragraph
              paragraph2
            }
            ... on SanityCaseStudyLogo {
              _type
              images {
                asset {
                  altText
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
              }
              paragraph
            }
          }
        }
        ... on SanityCaseStudyTestimonial {
          _type
          heading
          testimonial {
            name
            text
            img {
              asset {
                altText
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
            cta {
              theme
              text
              href
            }
          }
        }
        ... on SanityCaseStudySummary {
          _type
          paragraph
          paragraph2
        }
        ... on SanityCaseStudyTechnology {
          _type
          paragraph
          technologies {
            img {
              asset {
                altText
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
        ... on SanityProcessKeyElementsWrapper {
          _type
          paragraph
          list {
            heading
            paragraph
            img {
              asset {
                altText
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
      # Call To Action Section
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
      seo {
        title
        description
      }
    }
  }
`

export default CaseStudyPage

export const Head = ({
  data: { caseStudy: {
    seo,
    slug
  }}
}) => {
  return (
    <SEO
      title={seo?.title}
      description={seo?.description}
      url={`/pl/portfolio/${slug.current}`}
    />
  )
}

const GlobalStyle = createGlobalStyle`
  main {
    padding-top: 0;
  }
`