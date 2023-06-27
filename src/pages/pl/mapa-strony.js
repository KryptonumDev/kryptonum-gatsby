import { graphql } from "gatsby";
import React from "react";
import Grid from "../../components/sections/Sitemap/Grid";
import HeroTwoColumns from "../../components/sections/HeroTwoColumns";

export default function Sitemap({ data: { page, team, blogEntries, sanityWebDevelopment, sanityAgency, sanityGraphicsDesign, sanityWorkshop, caseStudies, akademiaEntries } }) {
  return (
    <>
      <HeroTwoColumns heading={page.hero_Heading} paragraph={page.hero_Subheading} img={page.hero_Img}/>
      <Grid
        team={team}
        blogEntries={blogEntries}
        sanityWebDevelopment={sanityWebDevelopment}
        sanityAgency={sanityAgency}
        sanityGraphicsDesign={sanityGraphicsDesign}
        sanityWorkshop={sanityWorkshop}
        caseStudies={caseStudies}
        akademiaEntries={akademiaEntries}
      />
    </>
  )
}

export const query = graphql`
  query {
    page: sanitySitemap {
      hero_Heading
      hero_Subheading
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      seo {
        title
        description
      }
    }
    caseStudies: allSanityCaseStudyEntries{
      nodes {
        name
        slug {
          current
        }
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    sanityWorkshop {
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    sanityGraphicsDesign {
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    sanityAgency {
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    sanityWebDevelopment{
      hero_Img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    akademiaEntries: allSanityCuriosityEntries {
      nodes {
        title
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
            gatsbyImageData(placeholder: BLURRED, width: 127, height: 127)
          }
        }
        author {
          name
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 32, height: 32)
            }
          }
        }
        _createdAt(formatString: "D MMMM Y", locale: "pl")
      }
    }
    blogEntries: allSanityBlogEntries(sort: {_createdAt: DESC}) {
      nodes {
        title
        slug {
          current
        }
        author {
          name
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 32, height: 32)
            }
          }
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
            gatsbyImageData(placeholder: BLURRED, width: 127, height: 127)
          }
        }
        _createdAt(formatString: "D MMMM Y", locale: "pl")
      }
    }
    team: allSanityTeamMember {
      nodes {
        name
        slug {
          current
        }
        img {
          asset {
            altText
            gatsbyImageData(placeholder: BLURRED, width: 156, height: 156)
          }
        }
      }
    }
  }
`