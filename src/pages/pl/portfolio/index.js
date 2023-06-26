import * as React from "react"
import { graphql } from "gatsby"
import { SEO } from "../../../components/global/Seo";
import HeroTwoColumns from "../../../components/sections/HeroTwoColumns";
import CaseStudies from "../../../components/sections/Portfolio/CaseStudies";
import QuickForm from "../../../components/sections/QuickForm";
import BlogEntries from "../../../components/sections/BlogEntries";

const PortfolioPage = ({
  data: { page : {
    hero_Heading,
    hero_Paragraph,
    caseStudies,
    quickForm,
    blogEntries_Heading
  }}
}) => {
  return (
    <>
      <HeroTwoColumns heading={hero_Heading} paragraph={hero_Paragraph} />
      <CaseStudies data={caseStudies} />
      <QuickForm data={quickForm} />
      <BlogEntries heading={blogEntries_Heading} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityPortfolio {
      # Hero
      hero_Heading
      hero_Paragraph
      # Case Studies
      caseStudies {
        name
        slug {
          current
        }
        heading
        categories {
          name
        }
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      # Quick Form
      quickForm {
        heading
        subheading
        cta
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

export default PortfolioPage

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
  />
)