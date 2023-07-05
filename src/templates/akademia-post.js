import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "./../components/global/Seo";
import EntryHero from "../components/sections/EntryHero";
import Share from "../components/sections/AcademyEntry/Share";
import Sources from "../components/sections/AcademyEntry/Sources";
import LatestCuriosityEntries from "../components/sections/LatestCuriosityEntries";
import ImageAndStandout from "../components/sections/ImageAndStandout";
import KeyElements from "../components/sections/AcademyEntry/KeyElements";

const CuriosityEntryPage = ({
  data: { page: {
    title,
    slug,
    subtitle,
    author,
    categories,
    img,
    _createdAt,
    content,
    share,
    sources,
    latestCuriosities_Heading,
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
      {content.map((component, i) => {
        switch (component._type) {
          case 'standout':
            return (
              <ImageAndStandout
                key={i}
                heading={component.heading}
                paragraph={component.paragraph}
                standout={component.standout}
                img={component.img}
                reversed={component.reversed}
              />
            );
          case 'curiosity_KeyElements':
            return (
              <KeyElements
                key={i}
                heading={component.heading}
                list={component.list}
              />
            );
          default:
            break;
        }
      })}
      {/* <Showcase
        heading={showcase_Heading}
        img={showcase_Img}
        paragraph={showcase_Paragraph}
        paragraph2={showcase_Paragraph2}
      /> */}
      <Share
        heading={share.heading}
        img={share.img}
        url={slug.current}
      />
      <Sources data={sources} />
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
      ogImage: img {
        asset {
          url
        }
      }
      _createdAt(formatString: "D MMMM Y", locale: "pl")
      # Content
      content {
        ... on SanityCuriosityKeyElements {
          _type
          heading
          list
        }
        ... on SanityStandout {
          _type
          heading
          paragraph
          standout
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          reversed
        }
      }
      share {
        heading
        img {
          asset {
            altText
            gatsbyImageData(placeholder: NONE)
          }
        }
      }
      sources {
        heading
        list {
          text
          href
        }
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
  data: { page: {
    seo: {
      title,
      description
    },
    ogImage,
    slug
  }}
}) => (
  <SEO
    title={title}
    description={description}
    url={`/pl/akademia/${slug.current}`}
    ogImage={ogImage.asset.url}
  />
)