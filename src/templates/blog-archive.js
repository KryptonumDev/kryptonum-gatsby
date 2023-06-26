import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "./../components/global/Seo";
import HeroTwoColumns from "./../components/sections/HeroTwoColumns";
import CtaSection from "./../components/sections/CtaSection";
import BlogEntries from "./../components/sections/BlogEntries";
import Faq from "./../components/sections/Faq";
import Categories from "./../components/sections/Categories";
import CuriosityEntries from "./../components/sections/CuriosityEntries";

const BlogPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Paragraph,
      hero_Img,
      ctaSection,
    },
    blogEntries,
    blogCategories
  },
  pageContext: { currentPage, totalCount, urlBasis }
}) => {
  return (
    <>
      {currentPage === 1 && (
        <HeroTwoColumns
          heading={hero_Heading}
          paragraph={hero_Paragraph}
          img={hero_Img}
        />
      )}
      <Categories slug="/pl/blog/kategoria/" categories={blogCategories} />
      <BlogEntries urlBasis={urlBasis} totalCount={totalCount} blogEntries={blogEntries} page={currentPage} />
      <CtaSection data={ctaSection} />
      <CuriosityEntries />
      <Faq />
    </>
  );
}

export const query = graphql`
  query($perPage: Int!, $skip: Int!) {
    blogEntries: allSanityBlogEntries(limit: $perPage, skip: $skip, sort: {_createdAt: DESC}) {
      totalCount
      nodes {
        title
        subtitle
        slug {
          current
        }
        author {
          name
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 48, height: 48)
            }
          }
        }
        categories {
          name
          slug {
            current
          }
        }
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 230, height: 230)
          }
        }
        _createdAt(formatString: "D MMMM Y", locale: "pl")
      }
    }
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
  } } }
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/blog'
  />
)