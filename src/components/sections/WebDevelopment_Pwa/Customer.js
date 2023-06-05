import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Customer = ({
  data: {
    customer_Heading,
    customer_WhatHeading,
    customer_WhatList,
    customer_WhatParagraph,
    customer_WhatSecondParagraph,
    customer_WhoHeading,
    customer_WhoList,
    customer_WhoAnnotation,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{customer_Heading}</DecorativeHeading>
      <ReactMarkdown className="whatHeading">{customer_WhatHeading}</ReactMarkdown>
      <div className="whatList">
        {customer_WhatList.map((item, i) => (
          <div className="item" key={i}>
            <ReactMarkdown>{item.title}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="wrapper">
        <ReactMarkdown className="whatParagraph">{customer_WhatParagraph}</ReactMarkdown>
        <ReactMarkdown className="whatParagraph">{customer_WhatSecondParagraph}</ReactMarkdown>
      </div>
      <ReactMarkdown className="whoHeading">{customer_WhoHeading}</ReactMarkdown>
      <div className="whoList">
        {customer_WhoList.map((item, i) => (
          <div className="item" key={i}>
            <ReactMarkdown>{item.title}</ReactMarkdown>
          </div>
        ))}
      </div>
      <ReactMarkdown className="whoAnnotation">{customer_WhoAnnotation}</ReactMarkdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    max-width: ${840/16}rem;
    margin-bottom: ${Clamp(48, 48, 64, 'px')};
  }
  .whatHeading, .whoHeading {
    font-size: ${Clamp(20, 32, 30)};
    margin-bottom: ${Clamp(16, 24, 32, 'px')};
  }
  .whatList, .whoList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    gap: 32px;
    counter-reset: counter;
    .item {
      counter-increment: counter;
      border: 1px solid var(--neutral-800);
      padding: ${Clamp(24, 32, 32, 'px')} ${Clamp(16, 32, 32, 'px')};
      font-size: ${Clamp(20, 22, 22)};
      position: sticky;
      top: ${Clamp(16, 24, 32, 'px')};
      p::before {
        content: "/0" counter(counter);
        display: block;
        margin-bottom: ${Clamp(16, 24, 32, "px")};
      }
      &:nth-child(2) {
        margin-top: 200px
      }
      &:nth-child(3) {
        margin-top: 400px;
      }
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    font-size: ${Clamp(20, 22, 22)};
    margin: ${Clamp(32, 48, 64, 'px')} 0;
  }
  .whoAnnotation {
    font-size: ${Clamp(20, 22, 22)};
    margin-top: ${Clamp(24, 34, 48, 'px')};
    max-width: ${620/16}rem;
    text-align: right;
    margin-left: auto;
  }
  @media (max-width: 999px){
    .whatList, .whoList {
      grid-template-columns: 1fr;
      gap: 24px;
      .item {
        position: static;
        &:nth-child(2) {
          margin-top: 0;
        }
        &:nth-child(3) {
          margin-top: 0;
        }
      }
    }
    .wrapper {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .whoAnnotation {
      max-width: unset;
      text-align: left;
    }
  }
`

export default Customer;