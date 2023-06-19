import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../components/global/Seo";
import HeroServices from "../../components/sections/HeroServices";
import SimpleCtaSection from "../../components/sections/SimpleCtaSection";
import ListSection from '../../components/sections/ListSection';
import QuickForm from "../../components/sections/QuickForm";
import CaseStudies from "../../components/sections/CaseStudies";
import CtaSection from "../../components/sections/CtaSection";
import Audit from "../../components/sections/AgencyCare/Audit";
import Copy from "../../components/sections/AgencyCare/Copy";
import Protection from "../../components/sections/AgencyCare/Protection";

const AgencyCarePage = ( { data} ) => {
  const { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    simpleCtaSection,
    services_Heading,
    services_Paragraph,
    services_Paragraph2,
    services_Title,
    services_List,
    audit_Heading,
    audit_Paragraph,
    audit_Paragraph2,
    audit_Title,
    audit_List,
    audit_Paragraph3,
    audit_Paragraph4,
    quickForm,
    caseStudies_Heading,
    ctaSection,
    protection_Heading,
    protection_Paragraph,
    protection_Paragraph2,
    protection_Paragraph3,
    protection_List,
    copy_Heading,
    copy_Paragraph,
    copy_Paragraph2,
    copy_Paragraph3,
    copy_Img,
    copy_Cta,
    copy_Headline,
    copy_List,
    secondSimpleCtaSection,
  } } = data;
  return (
    <>
      <HeroServices data={{
        hero_Heading,
        hero_Annotation,
        hero_Paragraph,
        hero_SecondParagraph,
        hero_Img,
      }} />
      <SimpleCtaSection data={simpleCtaSection} />
      <ListSection
        heading={services_Heading}
        paragraph={services_Paragraph}
        secondParagraph={services_Paragraph2}
        title={services_Title}
        list={services_List}
      />
      <Audit data={{
        audit_Heading,
        audit_Paragraph,
        audit_Paragraph2,
        audit_Title,
        audit_List,
        audit_Paragraph3,
        audit_Paragraph4,
      }} />
      <QuickForm data={quickForm} />
      <CaseStudies heading={caseStudies_Heading} />
      <CtaSection data={ctaSection} />
      <Protection data={{
        protection_Heading,
        protection_Paragraph,
        protection_Paragraph2,
        protection_Paragraph3,
        protection_List,
      }} />
      <Copy data={{
        copy_Heading,
        copy_Paragraph,
        copy_Paragraph2,
        copy_Paragraph3,
        copy_Img,
        copy_Cta,
        copy_Headline,
        copy_List,
      }} />
      <SimpleCtaSection data={secondSimpleCtaSection} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityAgency {
      # Hero
      hero_Heading
      hero_Annotation
      hero_Paragraph
      hero_SecondParagraph
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # Simple CTA Section
      simpleCtaSection {
        heading
        cta {
          theme
          href
          text
        }
      }
      # Services
      services_Heading
      services_Paragraph
      services_Paragraph2
      services_Title
      services_List {
        title
        description
      }
      # Audit
      audit_Heading
      audit_Paragraph
      audit_Paragraph2
      audit_Title
      audit_List
      audit_Paragraph3
      audit_Paragraph4
      # Quick Form
      quickForm {
        heading
        subheading
        cta
      }
      # Case Studies
      caseStudies_Heading
      # Call To Action
      ctaSection {
        heading
        cta {
          theme
          text
          href
        }
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 700)
          }
        }
      }
      # Protection
      protection_Heading
      protection_Paragraph
      protection_Paragraph2
      protection_Paragraph3
      protection_List
      # Copy 
      copy_Heading
      copy_Paragraph
      copy_Paragraph2
      copy_Paragraph3
      copy_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 520)
        }
      }
      copy_Cta {
        theme
        text
        href
      }
      copy_Headline
      copy_List {
        title
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 630)
          }
        }
      }
      # Second Simple CTA Section
      secondSimpleCtaSection {
        heading
        cta {
          theme
          href
          text
        }
      }
      # Scroll To Next
      scrollToNext {
        heading
        paragraph
        title
        link {
          text
          href
        }
      }
    }
  }
`

export default AgencyCarePage;

export const Head = () => (
  <SEO
    title="Opieka agencyjna, utrzymanie i zabezpieczenie stron www | Kryptonum"
    description="Czy Twoja strona została zainfekowana przez złośliwe oprogramowanie? Potrzebujesz nowszych technologii i zabezpieczeń? Zamów serwis Kryptonum!"
  />
)