import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from "../../../utils/functions";

const Creativity = ({data}) => {
  const {creativity} = data;

  return (
    <Wrapper>
      <ReactMarkdown
        children={creativity.data.childMarkdownRemark.rawMarkdownBody}
        components={{
          h2: ({node: {children}}) => {
            const markdownText = children.map(item => item.value || `**${item.children[0].value}**`).join('');
            return (
              <DecorativeHeading type="h2">{markdownText}</DecorativeHeading>
            )
          }
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  h2 {
    grid-column: 1 / 3;
    margin-bottom: ${Clamp(28, 48, 48)}
  }
  p {
    font-size: ${Clamp(20, 22, 30)};
  }
  @media (max-width: 699px){
    grid-template-columns: 1fr;
    h2 {
      grid-column: unset;
    }
    p:first-of-type {
      margin-bottom: 1rem;
    }
  }
`
 
export default Creativity;