import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Copy = ({
  data: {
    copyHeading,
    copyParagraph,
    copyParagraph2,
    copyParagraph3,
    copyImg,
    copyCta,
    copyHeadline,
    copyList,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2" className="heading">{copyHeading}</DecorativeHeading>
      <ReactMarkdown className="paragraph">{copyParagraph}</ReactMarkdown>
      <ReactMarkdown className="paragraph2">{copyParagraph2}</ReactMarkdown>
      <div className="column">
        <div className="text">
          <ReactMarkdown>{copyParagraph3}</ReactMarkdown>
          <Button theme={copyCta.theme} to={copyCta.href}>{copyCta.text}</Button>
        </div>
        <GatsbyImage
          image={copyImg.asset.gatsbyImageData}
          alt={copyImg.asset.altText || ''}
          className="img"
        />
      </div>
      <ReactMarkdown className="headline">{copyHeadline}</ReactMarkdown>
      <div className="wrapper">
        {copyList.map((item, i) => (
          <div className="item" key={i}>
            <ReactMarkdown>{item.title}</ReactMarkdown>
            <GatsbyImage
              image={item.img.asset.gatsbyImageData}
              alt={item.img.asset.altText || ''}
              className="img"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  .heading, .headline, .column, .wrapper {
    grid-column: 3/1;
  }
  .heading {
    margin-bottom: ${Clamp(28, 48, 48, 'px')};
  }
  .paragraph, .wrapper, .text p:first-child, .headline {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2, .text {
    font-size: ${Clamp(16, 22, 22)};
  }
  .column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin: ${Clamp(32, 48, 96, 'px')} 0 64px;
    .img {
      margin-left: 112px;
    }
    .text {
      p:not(:last-child){
        margin-bottom: 24px;
      }
      .cta {
        margin-top: 40px;
      }
    }
  }
  .headline {
    margin-bottom: ${Clamp(28, 48, 72, 'px')};
  }
  .wrapper {
    counter-reset: counter;
    .item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      &:not(:last-of-type){
        margin-bottom: ${Clamp(32, 64, 96, 'px')};
      }
      counter-increment: counter;
      p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &::before {
          content: "/" counter(counter);
          font-size: ${Clamp(16, 22, 22)};
          margin-bottom: 16px;
          display: block;
        }
      }
      &:nth-child(-n+9) p::before {
        content: "/0" counter(counter);
      }
      &:nth-child(odd){
        .img {
          order: -1;
        }
      }
    }
  }
  @media (max-width: 999px){
    grid-template-columns: 1fr;
    .heading, .headline, .column, .wrapper {
      grid-column: unset;
    }
    .column {
      grid-template-columns: 1fr;
      .img {
        margin-left: 0;
        order: -1;
      }
    }
    .paragraph {
      margin-bottom: 16px;
    }
    .wrapper {
      .item {
        grid-template-columns: 1fr;
        gap: 24px;
        .img {
          order: -1;
        }
      }
    }

  }
`

export default Copy;