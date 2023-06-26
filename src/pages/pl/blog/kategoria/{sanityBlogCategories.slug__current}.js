import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../../../components/global/Seo";
import CtaSection from "../../../../components/sections/CtaSection";
import BlogEntries from "../../../../components/sections/BlogEntries";
import Faq from "../../../../components/sections/Faq";
import Categories from "../../../../components/sections/Academy/Categories";
import CuriosityEntries from "../../../../components/sections/CuriosityEntries";

const BlogCategoryPage = ({
  data: {
    page: {
      ctaSection,
    },
    blogCategories,
    blogEntries
  }
}) => {
  return (
    <>
      <Categories slug="/pl/blog/kategoria/" categories={blogCategories} />
      <BlogEntries data={blogEntries} />
      <CtaSection data={ctaSection} />
      <CuriosityEntries />
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
    blogEntries: allSanityBlogEntries(filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
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
        cover {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 230, height: 230)
          }
        }
        _createdAt(formatString: "D MMMM Y", locale: "pl")
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