import * as React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components";
import { SEO } from "../../../components/global/Seo";
import Hero from "../../../components/sections/CaseStudies/Hero";
import CtaSection from "../../../components/sections/CtaSection";
import ImageAndStanduout from "../../../components/sections/ImageAndStandout";
import Challenge from "../../../components/sections/CaseStudies/Challenge";
import Technologies from "../../../components/sections/CaseStudies/Technologies";

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
      <Technologies
        heading={technologies_Paragraph}
        technologies={technologies}
      />
      <CtaSection data={ctaSection} />
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    caseStudy: sanityCaseStudyEntries(id: {eq: $id}) {
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
    />
  )
}

const GlobalStyle = createGlobalStyle`
  main {
    padding-top: 0 !important;
  }
`