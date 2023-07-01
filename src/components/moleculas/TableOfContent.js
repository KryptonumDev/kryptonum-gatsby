import React from "react";
import { PortableText } from "@portabletext/react";
import { renderToStaticMarkup } from "react-dom/server";
import styled from "styled-components";
import { slugify, smoothScroll } from "../../utils/functions";

const generateHeadings = (portableText) => {
  const content = renderToStaticMarkup(<PortableText value={portableText} onMissingComponent={false} />);
  const headingsRegex = /<h[23].*?>(.*?)<\/h[23]>/g;
  const headingMatches = content.match(headingsRegex);
  if (!headingMatches) {
    return null;
  }
  const listItems = headingMatches.map((match, i) => {
    const tag = match.match(/<\/?(h[23])/)[1];
    const text = match.replace(/<\/?[^>]+(>|$)/g, '');
    return (
      <li key={i} className={tag}>
        <a href={`#${slugify(text)}`} onClick={e => smoothScroll(e)}>{text}</a>
      </li>
    );
  });
  return listItems;
}

const TableOfContent = ({ content }) => {

  return (
    <Wrapper>
      {generateHeadings(content)}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  list-style-type: none;
  li {
    &.h2 {
      font-size: 20px;
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
    &.h3 {
      font-size: 16px;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
    &.h2:not(:first-of-type) {
      margin-top: 24px;
    }
  }
`

export default TableOfContent;