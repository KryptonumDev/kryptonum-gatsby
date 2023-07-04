import React from "react";
import { graphql } from "gatsby";
import { SEO } from "../components/global/Seo";
import Hero from "../components/sections/Contact/Hero";
import ContactUs from "../components/sections/Contact/ContactUs";
import Pricing from "../components/sections/Contact/Pricing";
import Team from "../components/sections/Team";
import Faq from "../components/sections/Faq";
import Helpdesk from "../components/sections/Contact/Helpdesk";

const ContactPage = ({
  data: { page: {
    hero_Heading,
    hero_Subheading,
    hero_Contact,
    contact_Email,
    contact_Tel,
    contact_Address,
    contact_Img,
    pricing_Paragraph,
    pricing_Paragraph2,
    pricing_Cta,
    helpDesk_Heading,
    helpDesk_Subheading,
    helpDesk_Paragraph,
    helpDesk_FormTitle,
  }}
}) => {
  return (
    <>
      <Hero
        heading={hero_Heading}
        subheading={hero_Subheading}
        contact={hero_Contact}
      />
      <ContactUs data={{
        contact_Email,
        contact_Tel,
        contact_Address,
        contact_Img,
      }} />
      <Pricing data={{
        pricing_Paragraph,
        pricing_Paragraph2,
        pricing_Cta,
      }} />
      <Helpdesk data={{
        helpDesk_Heading,
        helpDesk_Subheading,
        helpDesk_Paragraph,
        helpDesk_FormTitle,
      }} />
      <Team />
      <Faq />
    </>
  )
}

export const query = graphql`
  query {
    page: sanityContact {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Contact {
        title
        person {
          email
          tel
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 160, height: 160)
            }
          }
        }
      }
      # Contact
      contact_Email
      contact_Tel
      contact_Address
      contact_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # Pricing
      pricing_Paragraph
      pricing_Paragraph2
      pricing_Cta {
        theme
        text
        href
      }
      # Help Desk
      helpDesk_Heading
      helpDesk_Subheading
      helpDesk_Paragraph
      helpDesk_FormTitle
      # Seo
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
    url='/pl/kontakt'
  />
)
