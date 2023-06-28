import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { Clamp, portableTextToMarkdown, slugify } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { PortableText, toPlainText } from "@portabletext/react";

const sanityConfig = {projectId: process.env.GATSBY_SANITY_PROJECT_ID, dataset: process.env.GATSBY_SANITY_DATASET}

const SampleImageComponent = ({ value }) => {
  const gatsbyImageData = getGatsbyImageData(value.asset._ref, { maxWidth: 1024 }, sanityConfig);
  return (
    <GatsbyImage image={gatsbyImageData} alt={value.altText || ''} className="img" />
  )
}

const components = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    h2: ({ value }) => <DecorativeHeading type="h2" id={slugify(toPlainText(value))}>{portableTextToMarkdown(value)}</DecorativeHeading>,
    h3: ({ value }) => <DecorativeHeading type="h3" id={slugify(toPlainText(value))}>{portableTextToMarkdown(value)}</DecorativeHeading>
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
      <PortableText value={data} components={components} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  p + p {
    margin-top: 24px;
  }
  p {
    font-size: ${Clamp(16, 22, 22)};
  }
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
  .img {
    margin-top: 96px;
    & + h3 {
      margin-top: 48px;
    }
  }
  ol {
    list-style-type: none;
    counter-reset: counter;
    margin: 24px 0;
    li {
      counter-increment: counter;
      display: grid;
      grid-template-columns: 32px 1fr;
      column-gap: 16px;
      &:not(:last-child){
        margin-bottom: 16px;
      }
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