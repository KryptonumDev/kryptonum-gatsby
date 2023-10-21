import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Protection = ({
  data: {
    protection_Heading,
    protection_Paragraph,
    protection_Paragraph2,
    protection_Paragraph3,
    protection_List,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2" className="heading">{protection_Heading}</DecorativeHeading>
      <ReactMarkdown className="paragraph">{protection_Paragraph}</ReactMarkdown>
      <ReactMarkdown className="paragraph2">{protection_Paragraph2}</ReactMarkdown>
      <ReactMarkdown className="paragraph3">{protection_Paragraph3}</ReactMarkdown>
      <ul className="wrapper">
          {protection_List.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  .heading, .wrapper {
    grid-column: 3/1;
  }
  .heading {
    max-width: ${734/16}rem;
    margin-bottom: ${Clamp(28, 48, 64, 'px')};
  }
  .paragraph, .wrapper, .paragraph3 {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
  }
  .paragraph3 {
    margin: ${Clamp(32, 48, 72, 'px')} 0 ${Clamp(28, 32, 48, 'px')};
  }
  .wrapper {
    counter-reset: counter;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${Clamp(16, 24, 48, 'px')};
    li {
      counter-increment: counter;
      list-style-type: none;
      border: 1px solid var(--neutral-800);
      padding: ${Clamp(20, 32, 32, 'px')};
      &::before {
        content: "/" counter(counter);
        font-size: ${Clamp(16, 22, 22)};
        margin-bottom: 16px;
        display: block;
      }
      &:nth-child(-n+10)::before {
        content: "/0" counter(counter);
      }
    }
  }
  @media (max-width: 999px){
    grid-template-columns: 1fr;
    .heading, .wrapper {
      grid-column: unset;
    }
    .paragraph {
      margin-bottom: 16px;
    }
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
`

export default Protection;