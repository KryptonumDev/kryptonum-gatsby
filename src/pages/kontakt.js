import * as React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/global/Seo";
import Hero from "../components/sections/Contact/Hero";

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero />
    </>
  )
}

export const query = graphql`
  query {
    sanityGlobal {
      id
    }
  }
`

export default IndexPage

export const Head = () => (
  <SEO
    title="Agencja interaktywna Kryptonum - partner biznesu online"
    description="Kryptonum, to agencja interaktywna kompleksowo wspierająca Twój biznes online. Partner technologiczny na każdym etapie obecności firmy w internecie."
  />
)