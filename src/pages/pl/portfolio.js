import * as React from "react"
import { graphql } from "gatsby"
import { SEO } from "../../components/global/Seo";
import Hero from "../../components/sections/Homepage/Hero";

const PortfolioPage = ({
  data: { page : {
    hero_Heading,
    hero_Subheading,
    hero_Cta,
  }
  }
}) => {
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Subheading,
        hero_Cta,
      }} />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityHomepage {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Cta {
        theme
        text
        href
      }
    }
  }
`

export default PortfolioPage

export const Head = () => (
  <SEO
    title="Kryptonum case studies -  niesamowite porftolio projektów www"
    description="Zobacz portolio projektów z obszaru web developmentu, grafiki, UX i UI designu, copywritingu i SXO. Poznaj jakość idącą za realizacjami Kryptonum!"
  />
)