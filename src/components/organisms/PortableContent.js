import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { portableTextToMarkdown } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { PortableText } from "@portabletext/react";

// eslint-disable-next-line no-undef
const sanityConfig = {projectId: process.env.GATSBY_SANITY_PROJECT_ID, dataset: process.env.GATSBY_SANITY_DATASET}

const SampleImageComponent = ({ value }) => {
  const gatsbyImageData = getGatsbyImageData(value.asset._ref, { maxWidth: 1024 }, sanityConfig);
  return (
    <GatsbyImage image={gatsbyImageData} alt={value.altText || ''} />
  )
}

const components = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    h2: ({ value }) => <DecorativeHeading type="h2">{portableTextToMarkdown(value)}</DecorativeHeading>
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

`

export default PortableContent;