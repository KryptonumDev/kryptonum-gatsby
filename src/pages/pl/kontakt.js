import * as React from "react"
import { graphql } from "gatsby"
import { SEO } from "../../components/global/Seo";
import Kontakt from "../../components/sections/ExtendedContact";
import Hero from "../../components/sections/ExtendedContactHero";

const ContactPage = ({ data }) => {
  return (
    <>
      <Hero />
      <Kontakt />
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

export default ContactPage

export const Head = () => (
  <SEO
    title="Agencja interaktywna Kryptonum - partner biznesu online"
    description="Kryptonum, to agencja interaktywna kompleksowo wspierająca Twój biznes online. Partner technologiczny na każdym etapie obecności firmy w internecie."
  />
)