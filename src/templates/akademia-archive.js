import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "./../components/global/Seo";
import HeroTwoColumns from "./../components/sections/HeroTwoColumns";
import CtaSection from "./../components/sections/CtaSection";
import Faq from "./../components/sections/Faq";
import Categories from "./../components/sections/Categories";
import CuriosityEntries from "./../components/sections/CuriosityEntries";
import LatestBlogEntries from "./../components/sections/LatestBlogEntries";

const AcademyPage = ({
  data: {
    page: {
      hero_Heading,
      hero_Paragraph,
      hero_Img,
      ctaSection,
    },
    curiosityCategories,
    curiosityEntries
  },
  pageContext: { currentPage, totalCount, urlBasis }
}) => {
  return (
    <>
      {currentPage === 1 && (
        <HeroTwoColumns
          heading={hero_Heading}
          paragraph={hero_Paragraph}
          img={hero_Img}
        />
      )}
      <Categories
        categorySlug="/pl/akademia/"
        categories={curiosityCategories}
      />
      <CuriosityEntries
        urlBasis={urlBasis}
        totalCount={totalCount}
        page={currentPage}
        curiosityEntries={curiosityEntries}
      />
      <CtaSection data={ctaSection} />
      <LatestBlogEntries />
      <Faq />
    </>
  );
}

export const query = graphql`
  query($perPage: Int!, $skip: Int!) {
    curiosityEntries: allSanityCuriosityEntries(limit: $perPage, skip: $skip, sort: {_createdAt: DESC}) {
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
    page: sanityAcademy {
      # Hero
      hero_Heading
      hero_Paragraph
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
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
    curiosityCategories: allSanityCuriosityCategories {
      nodes {
        name
        slug {
          current
        }
      }
    }
  }
`

export default AcademyPage;

export const Head = ({
  data: { page: { seo: {
    title,
    description
  } } }
}) => (
  <SEO
    title={title}
    description={description}
    url="/pl/akademia"
  />
)