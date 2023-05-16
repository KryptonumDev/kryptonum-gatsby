import * as React from "react"
import { graphql } from "gatsby"
import HeroTwoColumns from "../components/sections/HeroTwoColumns"

const NotFoundPage = ({data}) => {
  const { notFound: {
    heading,
    subheading,
    cta,
    img
  } } = data;
  return (
    <HeroTwoColumns
      heading={heading}
      subheading={subheading.data.childMarkdownRemark.rawMarkdownBody}
      cta={cta}
      img={img}
    />
  )
}

export const query = graphql`
  query {
    notFound: strapiNotFound {
      heading
      subheading {
        data {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      cta {
        theme
        text
        href
      }
      img {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 700)
          }
        }
      }
    }
  }
`

export default NotFoundPage

export const Head = () => <title>Not found</title>
