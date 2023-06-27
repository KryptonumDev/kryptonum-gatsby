import React from "react";
import { graphql } from "gatsby";

const ContactPage = ({ data }) => {
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

export default ContactPage

export const Head = () => (
  <SEO
    title="Agencja interaktywna Kryptonum - partner biznesu online"
    description="Kryptonum, to agencja interaktywna kompleksowo wspierająca Twój biznes online. Partner technologiczny na każdym etapie obecności firmy w internecie."
  />
)
