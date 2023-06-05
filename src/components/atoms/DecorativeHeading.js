import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import { HeadingDecoration, HeadingLineFlexibility } from "./Icons";

const DecorativeHeading = ({type="h1", children, decoration=true, components}) => {
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
    <Wrapper as={type} has2spans={children.includes('\n\n')}>
      {decoration && (
        <HeadingDecoration />
      )}
      <ReactMarkdown
        components={{
          p: renderParagraph,
          ...components
        }}
        
      >{children}</ReactMarkdown>
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
  ${({ has2spans }) => has2spans && `
    grid-template-columns: auto auto 1fr;
    width: 100%;
    span:nth-of-type(1){
      max-width: ${640/16}rem;
    }
    span:nth-of-type(2){
      grid-column: 3/-1;
      align-self: flex-end;
      text-align: right;
      font-size: ${Clamp(20, 22, 22)};
      margin: 0 0 .8em 0;
    }
  `}
  @media (max-width: 1199px){
    grid-template-columns: auto 1fr;
    width: fit-content;
    span:nth-of-type(2) {
      grid-column: 3/1;
      text-align: left;
      margin: 28px 0 0 0;
    }
  }
  span > svg {
    vertical-align: middle;
    width: ${Clamp(100, 216, 216)};
  }
`

export default DecorativeHeading;