import React from "react";
import { graphql } from "gatsby";
import Hero from "../../components/sections/Contact/Hero";
import { SEO } from "../../components/global/Seo";

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

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/konatkt'
  />
)
