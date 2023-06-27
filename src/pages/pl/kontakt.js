import React from "react";
import { graphql } from "gatsby";
import Hero from "../../components/sections/Contact/Hero";

const ContactPage = ({ data }) => {
  return (
    <>
      <Hero />
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

// export const Head = () => (
//   <SEO
//     title="Agencja interaktywna Kryptonum - partner biznesu online"
//     description="Kryptonum, to agencja interaktywna kompleksowo wspierająca Twój biznes online. Partner technologiczny na każdym etapie obecności firmy w internecie."
//   />
// )
