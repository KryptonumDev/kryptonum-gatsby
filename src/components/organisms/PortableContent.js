import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortableText, toPlainText } from "@portabletext/react";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { Clamp, portableTextToMarkdown, slugify } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Star } from "../atoms/Icons";
import QuickForm from "./portableText/QuickForm";
import OrderedList from "./portableText/OrderedList";
import UnorderedList from "./portableText/UnorderedList";

const sanityConfig = {projectId: process.env.GATSBY_SANITY_PROJECT_ID, dataset: process.env.GATSBY_SANITY_DATASET}

const ImageComponent = ({ value }) => {
  const gatsbyImageData = getGatsbyImageData(value.asset?._ref, { maxWidth: 1024 }, sanityConfig);
  return (
    <GatsbyImage image={gatsbyImageData} alt={value.altText || ''} className="img" />
  )
}

const components = {
  types: {
    image: ImageComponent,
    quickForm: ({ value: { heading, subheading, cta} }) => <QuickForm data={{heading,subheading, cta}} />,
    orderedList: ({ value: { array, paragraph }}) => <OrderedList paragraph={paragraph} array={array} />,
    unorderedList: ({ value: { array }}) => {
      const newArray = array.map(obj => {
        return { ...obj, icon: <ImageComponent value={obj.icon} /> };
      });
      return <UnorderedList data={newArray} />
    },
  },
  block: {
    h2: ({ value }) => <DecorativeHeading type="h2" id={slugify(toPlainText(value))}>{portableTextToMarkdown(value)}</DecorativeHeading>,
    h3: ({ value }) => <DecorativeHeading type="h3" id={slugify(toPlainText(value))}>{portableTextToMarkdown(value)}</DecorativeHeading>,
    largeParagraph: ({ children }) => <p className="largeParagraph">{children}</p>,
  },
  listItem : {
    bullet: ({ children }) => <li><Star /><span>{children}</span></li>,
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
    margin-top: 32px;
  }
  p.largeParagraph {
    font-size: ${Clamp(16, 30, 30)};
  }
  font-size: ${Clamp(16, 22, 22)};
  h2 {
    &:not(:first-of-type) {
      margin-top: 96px;
    }
    margin-bottom: 32px;
  }
  h3 {
    &:not(:first-child) {
      margin-top: 96px;
    }
    margin-bottom: 32px;
  }
  > .img {
    margin-top: 96px;
    & + h3 {
      margin-top: 48px;
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
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
  ul:not(.unorderedList) {
    li {
      display: grid;
      column-gap: 8px;
      grid-template-columns: 24px 1fr;
      svg {
        margin-top: .1em;
      }
    }
  }
  ol:not(.orderedList) {
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
      &:nth-child(-n+9)::before {
        content: "0" counter(counter) ".";
      }
    }
  }
`

export default PortableContent;