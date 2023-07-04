import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import HeroServices from "../components/sections/HeroServices";
import QuickForm from "../components/sections/QuickForm";
import CaseStudies from "../components/sections/CaseStudies";
import CtaSection from "../components/sections/CtaSection";
import Process from "../components/sections/WebDevelopment_Ecom/Process";
import Develop from "../components/sections/WebDevelopment_Ecom/Develop";
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
    process_Claim,
    process_List,
    quickForm,
    caseStudies_Heading,
    develop_Paragraph1,
    develop_Paragraph2,
    develop_Paragraph3,
    develop_Paragraph4,
    ctaSection,
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
        process_Claim,
        process_List,
      }} />
      <QuickForm data={quickForm} />
      <CaseStudies heading={caseStudies_Heading} />
      <Develop data={{
        develop_Paragraph1,
        develop_Paragraph2,
        develop_Paragraph3,
        develop_Paragraph4,
      }} />
      <CtaSection data={ctaSection} />
      <LatestBlogEntries heading={blogEntries_Heading} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityWebDevelopmentEcom {
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
      process_Claim
      process_List {
        heading
        subheading
        paragraph
        secondParagraph
        secondHeading
        cta {
          theme
          text
          href
        }
      }
      # Quick Form
      quickForm {
        heading
        subheading
        cta
      }
      # Case Studies
      caseStudies_Heading
      # Develop
      develop_Paragraph1
      develop_Paragraph2
      develop_Paragraph3
      develop_Paragraph4
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
    url='/pl/web-development-sklepy-internetowe'
  />
)