import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "./../components/global/Seo";
import Content from "./../components/sections/BlogEntry/Content";
import LatestCuriosityEntries from "../components/sections/LatestCuriosityEntries";
import EntryHero from "../components/sections/EntryHero";

const BlogEntryPage = ({
  data: { page: {
    title,
    subtitle,
    author,
    categories,
    img,
    _createdAt,
    _rawContent,
    seo
  }}
}) => {
  return (
    <>
      <EntryHero
        title={title}
        subtitle={subtitle}
        categories={categories}
        _createdAt={_createdAt}
        img={img}
      />
      <Content
        _rawContent={_rawContent}
        author={author}
        share={seo}
      />
      <LatestCuriosityEntries />
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    page: sanityBlogEntries(id: {eq: $id}) {
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
            gatsbyImageData(placeholder: BLURRED, width: 156, height: 156)
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
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      _rawContent
      _createdAt(formatString: "D MMMM Y", locale: "pl")
      seo {
        title
        description
      }
    }
  }
`

export default BlogEntryPage;

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/blog'
  />
)