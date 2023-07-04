import * as React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components";
import { SEO } from "../components/global/Seo";
import Hero from "../components/sections/CaseStudies/Hero";
import CtaSection from "../components/sections/CtaSection";
import ImageAndStanduout from "../components/sections/ImageAndStandout";
import Challenge from "../components/sections/CaseStudies/Challenge";
import Testimonial from "../components/sections/CaseStudies/Testimonial";
import Process from "../components/sections/CaseStudies/Process";

const CaseStudyPage = ({
  data: { caseStudy : {
    heading,
    paragraph,
    paragraph2,
    categories_Paragraph,
    categories,
    img,
    client_Heading,
    client_Paragraph,
    client_Standout,
    client_Img,
    challenge_Heading,
    challenge_Paragraph,
    process,
    logo_Images,
    logo_Paragraph,
    visualIdentification_Images,
    visualIdentification_Paragraph,
    visualIdentification_Paragraph2,
    testimonial_Heading,
    testimonial,
    testimonial_Paragraph,
    testimonial_Paragraph2,
    technologies_Paragraph,
    technologies,
    ctaSection,
  }}
}) => {
  return (
    <>
      <GlobalStyle />
      <Hero data={{
        heading,
        paragraph,
        paragraph2,
        categories_Paragraph,
        categories,
        img,
      }} />
      {client_Heading && client_Paragraph && client_Standout && client_Img.asset && (
        <ImageAndStanduout
          heading={client_Heading}
          paragraph={client_Paragraph}
          standout={client_Standout}
          img={client_Img}
          reversed={1}
        />
      )}
      <Challenge
        heading={challenge_Heading}
        paragraph={challenge_Paragraph}
      />
      <Process
        data={process}
        logo_Showcase={logo_Images}
        logo_Paragraph={logo_Paragraph}
        visualIdentification_Showcase={visualIdentification_Images}
        visualIdentification_Paragraph={visualIdentification_Paragraph}
        visualIdentification_SecondParagraph={visualIdentification_Paragraph2}
        technologies_Paragraph={technologies_Paragraph}
        technologies={technologies}
      />
      <Testimonial
        heading={testimonial_Heading}
        testimonial={testimonial}
        paragraph={testimonial_Paragraph}
        secondParagraph={testimonial_Paragraph2}
      />
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
      # Client
      client_Heading
      client_Paragraph
      client_Standout
      client_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # Challenge
      challenge_Heading
      challenge_Paragraph
      # Process
      process {
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        heading
        subheading
        paragraph
        paragraph2
        principles_Paragraph
        principles_List
        keyElements_Paragraph
        keyElements_List {
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          heading
          paragraph
        }
      }
      # Logo showcase
      logo_Images {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      logo_Paragraph
      # Visual Identification
      visualIdentification_Images {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      visualIdentification_Paragraph
      visualIdentification_Paragraph2
      # Testimonial
      testimonial_Heading
      testimonial {
        name
        text
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        cta {
          text
          theme
          href
        }
      }
      testimonial_Paragraph
      testimonial_Paragraph2
      # Technologies
      technologies_Paragraph
      technologies {
        name
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 152, height: 152)
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
    }
  }
`

export default CaseStudyPage

export const Head = ({
  data: { caseStudy: {
    name,
    slug,
    categories,
    technologies
  }}
}) => {
  const getCommaSeparatedNames = (json) => {
    const names = json.map(item => item.name).slice(0, 3);
    let commaSeparatedNames = names.join(", ");
    if (json.length > 3) {
      commaSeparatedNames += " i więcej...";
    }
    return commaSeparatedNames;
  }
  return (
    <SEO
      title={`${categories[0].name} dla ${name} | Kryptonum`}
      description={`Zobacz case study dla ${name}. ${categories[0].name}, którą zrealizowaliśmy wykorzystując ${getCommaSeparatedNames(technologies)}`}
      url={`/pl/portfolio/${slug.current}`}
    />
  )
}

const GlobalStyle = createGlobalStyle`
  main {
    padding-top: 0;
  }
`