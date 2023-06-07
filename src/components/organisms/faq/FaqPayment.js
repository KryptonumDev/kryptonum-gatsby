import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const FaqPayment = ({
  data: {
    heading,
    paragraph,
    secondParagraph,
    thirdParagraph,
    text,
    list
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h3" className="heading" decoration={false}>{heading}</DecorativeHeading>
      <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      <ReactMarkdown className="secondParagraph">{secondParagraph}</ReactMarkdown>
      <ReactMarkdown className="thirdParagraph">{thirdParagraph}</ReactMarkdown>
      <p className="text">{text}</p>
      <ul className="list">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 32px;
  .heading {
    grid-column: 3/1;
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph, .thirdParagraph {
    font-size: ${Clamp(20, 32, 30)};
  }
  .secondParagraph, .text, .list {
    font-size: ${Clamp(16, 22, 22)};
  }
  .text {
    align-self: end;
    justify-self: end;
  }
  .list {
    grid-column: 3/1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    counter-reset: counter;
    li {
      list-style-type: none;
      padding: ${Clamp(20, 32, 32, 'px')};
      border: 1px solid var(--neutral-800);
      counter-increment: counter;
      &::before {
        content: "/0" counter(counter);
        display: block;
        margin-bottom: ${Clamp(8, 16, 32, "px")};
      }
    }
  }
  @media (max-width: 929px){
    grid-template-columns: 1fr;
    gap: unset;
    .heading {
      grid-column: unset;
      margin-bottom: ${Clamp(24, 32, 48, 'px')};
    }
    .paragraph {
      margin-bottom: 16px;
    }
    .thirdParagraph {
      margin: ${Clamp(24, 32, 48, 'px')} 0 16px;
    }
    .list {
      margin-top: ${Clamp(16, 32, 48, 'px')};
      grid-column: unset;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    
  }
`

export default FaqPayment;