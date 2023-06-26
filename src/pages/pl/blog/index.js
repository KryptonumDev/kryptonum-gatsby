import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../../components/global/Seo";
import HeroTwoColumns from "../../../components/sections/HeroTwoColumns";
import CtaSection from "../../../components/sections/CtaSection";
import BlogEntries from "../../../components/sections/BlogEntries";
import Faq from "../../../components/sections/Faq";
import Categories from "../../../components/sections/Academy/Categories";
import CuriosityEntries from "../../../components/sections/CuriosityEntries";

const BlogPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Paragraph,
      hero_Img,
      ctaSection,
    },
    blogCategories
  }
}) => {
  return (
    <>
      <HeroTwoColumns
        heading={hero_Heading}
        paragraph={hero_Paragraph}
        img={hero_Img}
      />
      <Categories slug="/pl/blog/kategoria/" categories={blogCategories} />
      <BlogEntries />
      <CtaSection data={ctaSection} />
      <CuriosityEntries />
      <Faq />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityBlog {
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
    blogCategories: allSanityBlogCategories {
      nodes {
        name
        slug {
          current
        }
      }
    }
  }
`

export default BlogPage;

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