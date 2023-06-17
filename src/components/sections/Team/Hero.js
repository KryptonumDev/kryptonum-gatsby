import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Error } from "../../atoms/Icons";

const Hero = ({
  data: {
    hero_Heading,
    hero_Paragraph,
    hero_Column,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading className="heading">{hero_Heading}</DecorativeHeading>
        <div className="paragraph">
          <Error />
          <ReactMarkdown>{hero_Paragraph}</ReactMarkdown>
        </div>
      </header>
      <div className="column">
        {hero_Column.map((item, i) => (
          <div className="item" key={i}>
            <ReactMarkdown className="title">{item.title}</ReactMarkdown>
            <ReactMarkdown className="description">{item.description}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    text-align: center;
    display: grid;
    justify-items: center;
    min-height: 70vh;
    .heading {
      margin: 0 auto 48px;
      max-width: ${700/16}rem;
    }
    .paragraph {
      align-self: end;
      font-size: ${Clamp(20, 30, 32)};
      p:nth-of-type(1){
        font-size: ${Clamp(32, 56, 56)};
        margin: 12px 0;
      }
      p:nth-of-type(2){
        margin-bottom: 48px;
      }
    }
  }
  .column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-top: ${Clamp(48, 72, 86, 'px')};
    .title {
      font-size: ${Clamp(20, 30, 32)};
      margin-bottom: ${Clamp(16, 32, 32, 'px')};
    }
    .description {
      font-size: ${Clamp(16, 22, 22)};
      p:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
  @media (max-width: 859px){
    header {
      .heading {
        text-align: left;
        margin: 0 0 48px;
      }
    }
    .column {
      grid-template-columns: 1fr;
      gap: 40px;
    }

  }
`

export default Hero;