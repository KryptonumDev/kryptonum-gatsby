import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "./../components/global/Seo";
import EntryHero from "../components/sections/EntryHero";
import Content from "./../components/sections/BlogEntry/Content";
import LatestCuriosityEntries from "../components/sections/LatestCuriosityEntries";
import LatestBlogEntries from "../components/sections/LatestBlogEntries";

const BlogEntryPage = ({
  data: { page: {
    _id,
    title,
    slug,
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
        categorySlug='/pl/blog/kategoria/'
        _createdAt={_createdAt}
        img={img}
      />
      <Content
        _rawContent={_rawContent}
        author={author}
        share={seo}
        _id={_id}
      />
      <LatestBlogEntries exclude={slug.current} />
      <LatestCuriosityEntries />
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    page: sanityBlogEntries(id: {eq: $id}) {
      _id
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
      ogImage: img {
        asset {
          url
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
  data: { page: {
    _createdAt,
    author: {
      name
    },
    seo: {
      title,
      description
    },
    ogImage,
    slug
  }}
}) => (
  <SEO
    title={title}
    description={description}
    url={`/pl/blog/${slug.current}`}
    ogImage={ogImage.asset.url}
    date={_createdAt}
    author={name}
  />
)