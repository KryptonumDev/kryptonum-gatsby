import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "./../components/global/Seo";
import EntryHero from "../components/sections/EntryHero";
import Meaty from "../components/sections/AcademyEntry/Meaty";
import Standout from "../components/sections/AcademyEntry/Standout";
import Showcase from "../components/sections/AcademyEntry/Showcase";
import Share from "../components/sections/AcademyEntry/Share";
import LatestCuriosityEntries from "../components/sections/LatestCuriosityEntries";
import Sources from "../components/sections/AcademyEntry/Sources";

const CuriosityEntryPage = ({
  data: { page: {
    title,
    slug,
    subtitle,
    author,
    categories,
    img,
    _createdAt,
    meaty_Heading,
    meaty_List,
    standout_Heading,
    standout_Paragraph,
    showcase_Heading,
    showcase_Img,
    showcase_Paragraph,
    showcase_Paragraph2,
    share_Heading,
    share_Img,
    sources_Heading,
    sources_List,
    latestCuriosities_Heading
  }}
}) => {
  return (
    <>
      <EntryHero
        title={title}
        subtitle={subtitle}
        categories={categories}
        _createdAt={_createdAt}
        author={author}
        img={img}
      />
      <Meaty
        heading={meaty_Heading}
        list={meaty_List}
      />
      <Standout
        heading={standout_Heading}
        paragraph={standout_Paragraph}
      />
      <Showcase
        heading={showcase_Heading}
        img={showcase_Img}
        paragraph={showcase_Paragraph}
        paragraph2={showcase_Paragraph2}
      />
      <Share
        heading={share_Heading}
        img={share_Img}
        url={slug.current}
      />
      <Sources
        heading={sources_Heading}
        list={sources_List}
      />
      <LatestCuriosityEntries heading={latestCuriosities_Heading} />
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    page: sanityCuriosityEntries(id: {eq: $id}) {
      title
      subtitle
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
            gatsbyImageData(placeholder: BLURRED, width: 48, height: 48)
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
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      _createdAt(formatString: "D MMMM Y", locale: "pl")
      # Content
      meaty_Heading
      meaty_List
      standout_Heading
      standout_Paragraph
      showcase_Heading
      showcase_Img {
        asset {
          altText
          gatsbyImageData
        }
      }
      showcase_Paragraph
      showcase_Paragraph2
      share_Heading
      share_Img {
        asset {
          altText
          gatsbyImageData(placeholder: NONE)
        }
      }
      sources_Heading
      sources_List {
        text
        href
      }
      latestCuriosities_Heading
      # SEO
      seo {
        title
        description
      }
    }
  }
`

export default CuriosityEntryPage;

export const Head = ({
  data: { page: { seo: {
    title,
    description
  }}}
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/blog'
  />
)