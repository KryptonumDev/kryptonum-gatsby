import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../../components/global/Seo";
import Hero from "../../../components/sections/BlogEntry/Hero";
import CuriosityEntries from "../../../components/sections/CuriosityEntries";
import Content from "../../../components/sections/BlogEntry/Content";


const BlogEntryPage = ({
  data: { page: {
    title,
    subtitle,
    categories,
    img,
    _createdAt,
    author,
    content
  }}
}) => {
  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        categories={categories}
        _createdAt={_createdAt}
        img={img}
      />
      <Content data={content} />
      <CuriosityEntries />
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
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      content {
        style
        children {
          _type
          text
          _key
          marks
        }
        list
        _type
        _rawChildren
        _key
      }
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