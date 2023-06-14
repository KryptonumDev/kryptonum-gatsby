import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Star } from "../../atoms/Icons";

const BrandbookTypes = ({
  data: {
    primaryBrandbook_Heading,
    primaryBrandbook_Paragraph,
    primaryBrandbook_List,
    extendedBrandbook_Heading,
    extendedBrandbook_Paragraph,
    extendedBrandbook_Annotation,
    extendedBrandbook_List,
  }
}) => {
  return (
    <Wrapper>
      <div className="type">
        <header>
          <DecorativeHeading type="h2">{primaryBrandbook_Heading}</DecorativeHeading>
          <ReactMarkdown className="paragraph">{primaryBrandbook_Paragraph}</ReactMarkdown>
        </header>
        <ul className="list">
          {primaryBrandbook_List.map((item, i) => (
            <li key={i}>
              <Star />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="type">
        <header>
          <DecorativeHeading type="h2">{extendedBrandbook_Heading}</DecorativeHeading>
          <ReactMarkdown className="paragraph">{extendedBrandbook_Paragraph}</ReactMarkdown>
          <ReactMarkdown>{extendedBrandbook_Annotation}</ReactMarkdown>
        </header>
        <ul className="list">
          {extendedBrandbook_List.map((item, i) => (
            <li key={i}>
              <Star />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 1px solid var(--neutral-800);
  padding: 48px 64px;
  .type {
    &:not(:last-child) {
      margin-bottom: ${Clamp(48, 82, 110, 'px')};
    }
    header {
      text-align: center;
      max-width: ${932/16}rem;
      &, h2 {
        margin: 0 auto;
      }
      h2 {
        margin-bottom: ${Clamp(28, 48, 48, 'px')};
      }
      .paragraph {
        font-size: ${Clamp(20, 32, 30)};
        & + p {
          margin-top: 8px;
        }
      }
    }
    .list {
      font-size: ${Clamp(16, 22, 22)};
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      @media (max-width: 1189px){
        grid-template-columns: 1fr 1fr;
      }
      gap: ${Clamp(16, 24, 32, 'px')};
      list-style-type: none;
      margin-top: ${Clamp(24, 32, 48, 'px')};
      li {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 8px;
        svg {
          margin-top: 2px;
        }
      }
    }
  }
  @media (max-width: 899px){
    border: none;
    padding: 0;
  }
  @media (max-width: 549px){
    .type {
      header {
        text-align: left;
      }
      .list {
        grid-template-columns: 1fr;
        li {
          svg {
            margin-top: 0;
          }
        }
      }
    }
  }
`

export default BrandbookTypes;