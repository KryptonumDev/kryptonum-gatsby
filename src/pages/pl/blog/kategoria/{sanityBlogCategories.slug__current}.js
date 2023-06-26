import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../../../components/global/Seo";
import CtaSection from "../../../../components/sections/CtaSection";
import BlogEntries from "../../../../components/sections/BlogEntries";
import Faq from "../../../../components/sections/Faq";
import Categories from "../../../../components/sections/Academy/Categories";

const BlogCategoryPage = ({
  data: {
    page: {
      ctaSection,
    },
    blogCategories,
  }
}) => {
  return (
    <>
      <Categories slug="/pl/blog/kategoria/" categories={blogCategories} />
      <CtaSection data={ctaSection} />
      <BlogEntries />
      <Faq />
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    page: sanityBlog {
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
    blogCategory: sanityBlogCategories(id: {eq: $id}) {
      name
      slug {
        current
      }
    }
  }
`

export default BlogCategoryPage;

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }},
  blogCategory: {
    slug
  }
}}) => (
  <SEO
    title={title}
    description={description}
    url={`/pl/blog/kategoria/${slug.current}`}
  />
)