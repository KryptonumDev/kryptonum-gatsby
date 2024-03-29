import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortableText, toPlainText } from "@portabletext/react";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { Clamp, portableTextToMarkdown, slugify } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Star } from "../atoms/Icons";
import OrderedList from "./portableText/OrderedList";
import UnorderedList from "./portableText/UnorderedList";
import Tiles from "./portableText/Tiles";
import QuickForm from "../sections/QuickForm";
import SimpleGridList2Columns from "./portableText/SimpleGridList2Columns";
import SimpleGridImage2Columns from "./portableText/SimpleGridImage2Columns";
import TabSection from "./portableText/TabSection";
import DetailedGrid from "./portableText/DetailedGrid";

const sanityConfig = {projectId: process.env.GATSBY_SANITY_PROJECT_ID, dataset: process.env.GATSBY_SANITY_DATASET}

export const ImageComponent = ({ value, ...props }) => {
  const gatsbyImageData = getGatsbyImageData(value?.asset._ref, { maxWidth: 1024 }, sanityConfig);
  return (
    <GatsbyImage image={gatsbyImageData} alt={value?.altText || ''} className="img" {...props} />
  )
}

const components = {
  types: {
    image: ImageComponent,
    quickForm: ({ value: { heading, subheading, cta} }) => <QuickForm data={{heading,subheading, cta}} isPortableContent={true} />,
    orderedList: ({ value: { array, paragraph }}) => <OrderedList paragraph={paragraph} array={array} />,
    unorderedList: ({ value: { array }}) => {
      const newArray = array.map(obj => {
        return { ...obj, icon: <ImageComponent value={obj.icon} /> };
      });
      return <UnorderedList data={newArray} />
    },
    blog_Tiles: ({ value: { array } }) => <Tiles data={array} />,
    SimpleGridList2Columns: ({ value: { list } }) => <SimpleGridList2Columns list={list} />,
    SimpleGridImage2Columns: ({ value: { list } }) => <SimpleGridImage2Columns list={list} />,
    TabSection: ({ value: { blocks } }) => <TabSection blocks={blocks} />,
    DetailedGrid: ({ value: { blocks } }) => <DetailedGrid blocks={blocks} />,
  },
  block: {
    h2: ({ value }) => <DecorativeHeading type="h2" id={slugify(toPlainText(value))}>{portableTextToMarkdown(value)}</DecorativeHeading>,
    h3: ({ value }) => <DecorativeHeading type="h3" id={slugify(toPlainText(value))}>{portableTextToMarkdown(value)}</DecorativeHeading>,
    largeParagraph: ({ children }) => <p className="largeParagraph">{children}</p>,
  },
  listItem : {
    bullet: ({ children }) => <li><Star /><span>{children}</span></li>,
  },
  list: {
    bullet: ({ children }) => <ul className="portableList">{children}</ul>,
    number: ({ children }) => <ol className="portableList">{children}</ol>,
  },
  marks: {
    link: ({value, children}) => {
      const { href } = value
      return <a href={href} target="_blank" rel="noreferrer">{children}</a>
    }
  }
}

const PortableContent = ({ data }) => {
  return (
    <Wrapper>
      <PortableText
        value={data}
        components={components}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  p + p {
    margin-top: ${Clamp(16, 24, 32, 'px')};
  }
  p.largeParagraph {
    font-size: ${Clamp(16, 24, 30)};
  }
  font-size: ${Clamp(16, 18, 18)};
  > h2 {
    &:not(:first-child) {
      margin-top: ${Clamp(48, 72, 96, 'px')};
    }
    margin-bottom: 32px;
  }
  > h3 {
    &:not(:first-child) {
      margin-top: ${Clamp(48, 72, 96, 'px')};
    }
    margin-bottom: 32px;
  }
  > .img {
    border: 1px solid var(--neutral-800);
    &:not(:first-child){
      margin-top: ${Clamp(32, 48, 64, 'px')};
    }
    & + h2 {
      margin-top: 48px;
    }
    & + h3 {
      margin-top: 32px;
    }
    + p {
      margin-top: 32px;
    }
  }
  a {
    text-decoration: underline;
  }
  ul, ol {
    list-style-type: none;
    margin: 24px 0;
  }
  ul.portableList, ol.portableList {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
  ul.portableList {
    li {
      display: grid;
      column-gap: 8px;
      grid-template-columns: 24px 1fr;
      svg {
        margin-top: .1em;
      }
    }
  }
  ol.portableList {
    counter-reset: counter;
    li {
      display: grid;
      column-gap: 16px;
      grid-template-columns: 32px 1fr;
      counter-increment: counter;
      &::before {
        content: counter(counter) ".";
        display: inline-block;
      }
      &:nth-child(-n+10)::before {
        content: "0" counter(counter) ".";
      }
    }
  }
`

export default PortableContent;