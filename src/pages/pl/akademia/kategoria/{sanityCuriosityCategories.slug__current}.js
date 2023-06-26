import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../../../components/global/Seo";
import CtaSection from "../../../../components/sections/CtaSection";
import BlogEntries from "../../../../components/sections/BlogEntries";
import Faq from "../../../../components/sections/Faq";
import Categories from "../../../../components/sections/Categories";
import CuriosityEntries from "../../../../components/sections/CuriosityEntries";

const AcademyCategoryPage = ({
  data: {
    page: {
      ctaSection,
    },
    curiosityCategories,
    curiosityEntries,
  }
}) => {
  return (
    <>
      <Categories slug="/pl/akademia/kategoria/" categories={curiosityCategories} />
      <CuriosityEntries data={curiosityEntries} />
      <CtaSection data={ctaSection} />
      <BlogEntries />
      <Faq />
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    page: sanityAcademy {
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
      # SEO
      seo {
        title
        description
      }
    }
    curiosityEntries: allSanityCuriosityEntries(filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
      nodes {
        title
        subtitle
        slug {
          current
        }
        categories {
          name
          slug {
            current
          }
        }
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 688)
          }
        }
        _createdAt(formatString: "D MMMM Y", locale: "pl")
      }
    }
    curiosityCategories: allSanityCuriosityCategories {
      nodes {
        name
        slug {
          current
        }
      }
    }
    curiosityCategory: sanityCuriosityCategories(id: {eq: $id}) {
      name
      slug {
        current
      }
    }
  }
`

export default AcademyCategoryPage;

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }},
  curiosityCategory: {
    slug
  }
}}) => (
  <SEO
    title={title}
    description={description}
    url={`/pl/akademia/kategoria/${slug.current}`}
  />
)