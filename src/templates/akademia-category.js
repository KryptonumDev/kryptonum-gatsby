import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "./../components/global/Seo";
import CtaSection from "./../components/sections/CtaSection";
import Faq from "./../components/sections/Faq";
import Categories from "./../components/sections/Categories";
import CuriosityEntries from "./../components/sections/CuriosityEntries";
import LatestBlogEntries from "./../components/sections/LatestBlogEntries";

const AcademyCategoryPage = ({
  data: {
    page: {
      ctaSection,
    },
    curiosityCategories,
    curiosityEntries,
  },
  pageContext: { currentPage, totalCount, urlBasis }
}) => {
  return (
    <>
      <Categories slug="/pl/akademia/kategoria/" categories={curiosityCategories} />
      <CuriosityEntries urlBasis={urlBasis} totalCount={totalCount} curiosityEntries={curiosityEntries} page={currentPage} />
      <CtaSection data={ctaSection} />
      <LatestBlogEntries />
      <Faq />
    </>
  );
}

export const query = graphql`
  query($perPage: Int!, $skip: Int!, $id: String!) {
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
    curiosityEntries: allSanityCuriosityEntries(limit: $perPage, skip: $skip, sort: {_createdAt: DESC}, filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
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