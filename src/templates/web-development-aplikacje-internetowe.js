import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import Process from "../components/sections/WebDevelopment_Pwa/Process";
import CtaSection from "../components/sections/CtaSection";
import CaseStudies from "../components/sections/CaseStudies";
import QuickForm from "../components/sections/QuickForm";
import Customer from "../components/sections/WebDevelopment_Pwa/Customer";
import LatestBlogEntries from "../components/sections/LatestBlogEntries";

const WebDevelopmentPWAsPage = ({ data }) => {
  const { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    hero_CtaHeading,
    hero_Cta,
    process_Heading,
    process_Paragraph,
    process_SecondParagraph,
    process_List,
    quickForm,
    customer_Heading,
    customer_WhatHeading,
    customer_WhatList,
    customer_WhatParagraph,
    customer_WhatSecondParagraph,
    customer_WhoHeading,
    customer_WhoList,
    customer_WhoAnnotation,
    ctaSection,
    caseStudies_Heading,
    blogEntries_Heading,
  } } = data;
  return (
    <>
      <HeroServices data={{
        hero_Heading,
        hero_Annotation,
        hero_Paragraph,
        hero_SecondParagraph,
        hero_Img,
        hero_CtaHeading,
        hero_Cta
      }} />
      <Process data={{
        process_Heading,
        process_Paragraph,
        process_SecondParagraph,
        process_List
      }} />
      <QuickForm data={quickForm} />
      <Customer data={{
        customer_Heading,
        customer_WhatHeading,
        customer_WhatList,
        customer_WhatParagraph,
        customer_WhatSecondParagraph,
        customer_WhoHeading,
        customer_WhoList,
        customer_WhoAnnotation,
      }} />
      <CtaSection data={ctaSection} />
      <CaseStudies heading={caseStudies_Heading} />
      <LatestBlogEntries heading={blogEntries_Heading} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityWebDevelopmentPwa {
      # Hero
      hero_Heading
      hero_Annotation
      hero_Paragraph
      hero_SecondParagraph
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      hero_CtaHeading
      hero_Cta {
        theme
        text
        href
      }
      # Process
      process_Heading
      process_Paragraph
      process_SecondParagraph
      process_List {
        heading
        subheading
        paragraph
        secondParagraph
        img {
          asset {
            altText
            gatsbyImageData
          }
        }
      }
      # Quick Form
      quickForm {
        heading
        subheading
        cta
      }
      # Customer
      customer_Heading
      customer_WhatHeading
      customer_WhatList {
        title
      }
      customer_WhatParagraph
      customer_WhatSecondParagraph
      customer_WhoHeading
      customer_WhoList {
        title
      }
      customer_WhoAnnotation
      # Call To Action
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
      # Case Studies
      caseStudies_Heading
      # Blog Entries
      blogEntries_Heading
      # Scroll To Next
      scrollToNext {
        heading
        paragraph
        title
        link {
          text
          href
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

export default WebDevelopmentPWAsPage;

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/web-development-aplikacje-internetowe'
  />
)