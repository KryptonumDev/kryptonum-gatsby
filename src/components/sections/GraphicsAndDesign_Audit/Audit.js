import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Star } from "../../atoms/Icons";
import MasonryList from "../MasonryList";

const Audit = ({
  data: {
    heading,
    headline,
    paragraph,
    paragraph2,
    listHeading,
    list,
    ux,
  }
}) => {
  const { title, question, answer, when, whenList } = (ux ? ux : {});
  return (
    <Wrapper>
      <DecorativeHeading type="h2" className="heading">{heading}</DecorativeHeading>
      {headline && (
        <ReactMarkdown className="headline">{headline}</ReactMarkdown>
      )} 
      {ux && (
        <ReactMarkdown className="title">{title}</ReactMarkdown>
      )}
      <div className="column">
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
        <ReactMarkdown className="paragraph2">{paragraph2}</ReactMarkdown>
      </div>
      {ux && (
        <>
          <div className="column">
            <ReactMarkdown className="question">{question}</ReactMarkdown>
            <ReactMarkdown className="answer">{answer}</ReactMarkdown>
          </div>
          <div className="column">
            <ReactMarkdown className="when">{when}</ReactMarkdown>
            <ul className="whenList">
              {whenList.map((item, i) => (
                <li key={i}>
                  <Star />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <MasonryList
        heading={listHeading}
        list={list}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  > .heading {
    border: 1px solid var(--neutral-800);
    padding: ${Clamp(24, 48, 64, 'px')};
    width: 100%;
    justify-content: center;
    margin-bottom: ${Clamp(28, 64, 96, 'px')};
  }
  .headline {
    font-size: ${Clamp(28, 46, 60)};
    margin-bottom: ${Clamp(28, 64, 96, 'px')};
  }
  .paragraph, .title, .question, .when {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2, .answer, .whenList {
    font-size: ${Clamp(16, 22, 22)};
  }
  .title {
    text-align: center;
    margin-bottom: ${Clamp(28, 48, 64, 'px')};
  }
  .column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-bottom: ${Clamp(32, 64, 96, 'px')};
    @media (max-width: 649px){
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
  .whenList {
    list-style-type: none;
    li {
      &:not(:last-child) {
        margin-bottom: ${Clamp(8, 12, 20, 'px')};
      }
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
      svg {
        margin-top: 2px;
      }
    }
  }
  .listHeading {
    margin-bottom: ${Clamp(28, 48, 64, 'px')};
  }
`

export default Audit;