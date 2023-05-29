import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import { HeadingDecoration, HeadingLineFlexibility } from "./Icons";

const DecorativeHeading = ({type="h1", children, decoration=true}) => {
  const renderParagraph = ({ children }) => {
    const renderedChildren = [];
    children.forEach(child => {
      if (typeof child === 'string') {
        const parts = child.split(/(~>|~~~>)/);
        parts.forEach((part, partIndex) => {
          if (part === '~>') {
            renderedChildren.push(<HeadingLineFlexibility key={partIndex} />);
          } else if (part === '~~~>') {
            renderedChildren.push(<HeadingDecoration key={partIndex} />);
          } else {
            renderedChildren.push(part);
          }
        });
      } else {
        renderedChildren.push(child);
      }
    });

    return <span>{renderedChildren}</span>;
  };
  

  return (
    <Wrapper as={type}>
      {decoration && (
        <HeadingDecoration />
      )}
      <ReactMarkdown components={{ p: renderParagraph }}>
        {children}
      </ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.h1`
  display: grid;
  grid-template-columns: auto auto;
  width: fit-content;
  > svg {
    width: 0.86em;
    height: 0.86em;
    margin-top: 0.25em;
    margin-right: 8px;
  }
  span > svg {
    vertical-align: middle;
    width: ${Clamp(100, 216, 216)};
  }
`

export default DecorativeHeading;