import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Audit = ({
  data: {
    audit_Heading,
    audit_Paragraph,
    audit_Paragraph2,
    audit_Title,
    audit_List,
    audit_Paragraph3,
    audit_Paragraph4,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2" className="heading">{audit_Heading}</DecorativeHeading>
      <div className="copy">
        <ReactMarkdown className="paragraph">{audit_Paragraph}</ReactMarkdown>
        <ReactMarkdown className="paragraph2">{audit_Paragraph2}</ReactMarkdown>
      </div>
      <ReactMarkdown className="title">{audit_Title}</ReactMarkdown>
      <ul className="wrapper">
        {audit_List.map((item, i) => (
          <li className="item" key={i}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="copy">
        <ReactMarkdown className="paragraph3">{audit_Paragraph3}</ReactMarkdown>
        <ReactMarkdown className="paragraph4">{audit_Paragraph4}</ReactMarkdown>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .heading {
    margin-bottom: ${Clamp(28, 48, 48, 'px')}
  }
  .copy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    p:not(:last-child){
      margin-bottom: 16px;
    }
    @media (max-width: 949px){
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
  .paragraph, .paragraph3, .title, .item {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2, .paragraph4 {
    font-size: ${Clamp(16, 22, 22)};
  }
  .title {
    text-align: center;
    margin: ${Clamp(32, 64, 96, 'px')} 0 ${Clamp(28, 48, 64, 'px')};
  }
  .wrapper {
    counter-reset: counter;
    margin-bottom: ${Clamp(28, 48, 64, 'px')};
    .item {
      list-style-type: none;
      border-top: 1px solid var(--neutral-800);
      border-bottom: 1px solid var(--neutral-800);
      padding: ${Clamp(24, 40, 48, 'px')} 0;
      &:not(:last-child){
        margin-bottom: ${Clamp(32, 48, 64, 'px')};
      }
      counter-increment: counter;
      display: grid;
      span {
        display: grid;
        max-width: ${820/16}rem;
        margin: 0 auto;
        grid-template-columns: auto 1fr;
        column-gap: ${Clamp(8, 16, 32, 'px')};
        &::before {
          content: "/" counter(counter);
          display: inline-block;
          width: ${Clamp(55, 90, 160, 'px')};
          font-size: ${Clamp(28, 46, 60)};
          color: var(--primary-400);
          background-image: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      &:nth-child(even) span::before {
        order: 1;
      }
      &:nth-child(-n+9) span::before {
        content: "/0" counter(counter);
      }
    }
  }
`

export default Audit;