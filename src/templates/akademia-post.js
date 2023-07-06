import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "./../components/global/Seo";
import EntryHero from "../components/sections/EntryHero";
import Share from "../components/sections/AcademyEntry/Share";
import Sources from "../components/sections/AcademyEntry/Sources";
import LatestCuriosityEntries from "../components/sections/LatestCuriosityEntries";
import ImageAndStandout from "../components/sections/ImageAndStandout";
import KeyElements from "../components/sections/AcademyEntry/KeyElements";
import Highlight from "../components/sections/AcademyEntry/Highlight";
import Note from "../components/sections/AcademyEntry/Note";
import Tiles from "../components/sections/AcademyEntry/Tiles";
import LargeList from "../components/sections/LargeList";
import ColumnText from "../components/sections/AcademyEntry/ColumnText";
import QuickForm from "../components/sections/QuickForm";
import ExtendedList from "../components/sections/AcademyEntry/ExtendedList";

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
        categorySlug='/pl/akademia/kategoria/'
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
          case 'curiosity_Highlight':
            return (
              <Highlight
                key={i}
                heading={component.heading}
                paragraph={component.paragraph}
              />
            );
          case 'curiosity_Note':
            return (
              <Note
                key={i}
                heading={component.heading}
                paragraph={component.paragraph}
                attention={component.attention}
              />
            );
          case 'curiosity_Tiles':
            return (
              <Tiles
                key={i}
                heading={component.heading}
                list={component.list}
                annotation={component.annotation}
              />
            );
          case 'curiosity_LargeList':
            return (
              <LargeList
                key={i}
                isHeading={true}
                title={component.heading}
                list={component.list}
                paragraph={component.paragraph}
              />
            );
          case 'curiosity_ColumnText':
            return (
              <ColumnText
                key={i}
                heading={component.heading}
                paragraph={component.paragraph}
              />
            );
          case 'quickForm':
            return (
              <QuickForm
                key={i}
                data={component}
              />
            );
          case 'curiosity_ExtendedList':
            return (
              <ExtendedList
                key={i}
                data={component}
              />
            );
          default:
            break;
        }
      })}
      <Share
        heading={share.heading}
        img={share.img}
        url={slug.current}
      />
      <Sources data={sources} />
      <LatestCuriosityEntries heading={latestCuriosities_Heading} exclude={slug.current} />
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
        ... on SanityCuriosityHighlight {
          _type
          heading
          paragraph
        }
        ... on SanityCuriosityNote {
          _type
          heading
          paragraph
          attention
        }
        ... on SanityCuriosityTiles {
          _type
          heading
          list
          annotation
        }
        ... on SanityCuriosityLargeList {
          _type
          heading
          list
          paragraph
        }
        ... on SanityCuriosityColumnText {
          _type
          heading
          paragraph
        }
        ... on SanityQuickForm {
          _type
          heading
          subheading
          cta
        }
        ... on SanityCuriosityExtendedList {
          _type
          heading
          subtitle
          extendedList: list {
            paragraph
            item {
              img {
                asset {
                  altText
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              paragraph
            }
          }
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