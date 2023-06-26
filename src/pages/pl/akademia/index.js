import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../../components/global/Seo";
import HeroTwoColumns from "../../../components/sections/HeroTwoColumns";
import CtaSection from "../../../components/sections/CtaSection";
import BlogEntries from "../../../components/sections/BlogEntries";
import Faq from "../../../components/sections/Faq";
import Categories from "../../../components/sections/Academy/Categories";
import CuriosityEntries from "../../../components/sections/CuriosityEntries";

const AcademyPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Paragraph,
      hero_Img,
      ctaSection,
    },
    curiosityCategories
  }
}) => {
  return (
    <>
      <HeroTwoColumns
        heading={hero_Heading}
        paragraph={hero_Paragraph}
        img={hero_Img}
      />
      <Categories data={{
        curiosityCategories,
      }} />
      <CuriosityEntries />
      <CtaSection data={ctaSection} />
      <BlogEntries />
      <Faq />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityAcademy {
      # Hero
      hero_Heading
      hero_Paragraph
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
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
      # SEO
      seo {
        title
        description
      }
    }
    curiosityCategories: allSanityCuriosityCategories {
      nodes {
        name
        slug {
          current
        }
      }
    }
  }
`

export default AcademyPage;

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