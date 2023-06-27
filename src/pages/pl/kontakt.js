import React from "react";
import { graphql } from "gatsby";

export default function Kontakt({ data }) {
  return (
    <>
    </>
  )
}

export const query = graphql`
  query {
    page: sanitySitemap {
      seo {
        title
        description
      }
    }
  }
`