import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../components/global/Seo";
import HeroServices from "../../components/sections/HeroServices";
import SimpleCtaSection from "../../components/sections/SimpleCtaSection";
import QuickForm from "../../components/sections/QuickForm";
import CaseStudies from "../../components/sections/CaseStudies";
import CtaSection from "../../components/sections/CtaSection";
import MasonryList from "../../components/sections/MasonryList";
import BrandbookTypes from "../../components/sections/GraphicsAndDesign_VisualIdentity/BrandbookTypes";
import ImageAndStandout from "../../components/sections/ImageAndStandout";
import LatestBlogEntries from "../../components/sections/LatestBlogEntries";

const VisualIdentityPage = ({
  data: { page: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    simpleCtaSection,
    brandbook_Heading,
    brandbook_Paragraph,
    brandbook_Standout,
    brandbook_Img,
    primaryBrandbook_Heading,
    primaryBrandbook_Paragraph,
    primaryBrandbook_List,
    extendedBrandbook_Heading,
    extendedBrandbook_Paragraph,
    extendedBrandbook_Annotation,
    extendedBrandbook_List,
    quickForm,
    who_Heading,
    who_List,
    caseStudies_Heading,
    ctaSection,
    blogEntries_Heading,
  }}
}) => {
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
      <ImageAndStandout
        heading={brandbook_Heading}
        paragraph={brandbook_Paragraph}
        standout={brandbook_Standout}
        img={brandbook_Img}
      />
      <BrandbookTypes data={{
        primaryBrandbook_Heading,
        primaryBrandbook_Paragraph,
        primaryBrandbook_List,
        extendedBrandbook_Heading,
        extendedBrandbook_Paragraph,
        extendedBrandbook_Annotation,
        extendedBrandbook_List,
      }} />
      <QuickForm data={quickForm} />
      <MasonryList
        heading={who_Heading}
        list={who_List}
      />
      <CaseStudies heading={caseStudies_Heading} />
      <CtaSection data={ctaSection} />
      <LatestBlogEntries heading={blogEntries_Heading} />
    </>
  );
}

export const query = graphql`
  query {
    page: sanityVisualIdentity {
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
      # Brandbook
      brandbook_Heading
      brandbook_Paragraph
      brandbook_Standout
      brandbook_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      # Brandbook Types
      primaryBrandbook_Heading
      primaryBrandbook_Paragraph
      primaryBrandbook_List
      extendedBrandbook_Heading
      extendedBrandbook_Paragraph
      extendedBrandbook_Annotation
      extendedBrandbook_List
      # Quick Form
      quickForm {
        heading
        subheading
        cta
      }
      # For Who
      who_Heading
      who_List
      # Case Studies
      caseStudies_Heading
      # CTA Section
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
      # Blog entries
      blogEntries_Heading
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
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export default VisualIdentityPage;

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/grafika-design-identyfikacja-wizualna-marki'
  />
)