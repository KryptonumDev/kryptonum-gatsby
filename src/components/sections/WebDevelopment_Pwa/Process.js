import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Process = ({
  data: {
    process_Heading,
    process_Paragraph,
    process_SecondParagraph,
    process_List
  }
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{process_Heading}</DecorativeHeading>
        <ReactMarkdown className="paragraph">{process_Paragraph}</ReactMarkdown>
        <ReactMarkdown className="secondParagraph">{process_SecondParagraph}</ReactMarkdown>
      </header>
      <div className="wrapper">
        {process_List.map((item, i) => (
          <div className="item" key={i}>
            <GatsbyImage image={item.img.asset.gatsbyImageData} alt={item.img.asset.altText || ''} className="img" />
            <ReactMarkdown className="heading" components={{ p: 'h3' }}>{item.heading}</ReactMarkdown>
            <ReactMarkdown className="subheading">{item.subheading}</ReactMarkdown>
            <ReactMarkdown className="paragraph">{item.paragraph}</ReactMarkdown>
            <ReactMarkdown className="secondParagraph">{item.secondParagraph}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    h2 {
      max-width: ${900/16}rem;
      grid-column: 3/1;
      margin-bottom: ${Clamp(28, 48, 48, "px")};
    }
    .paragraph {
      font-size: ${Clamp(20, 32, 30)};
    }
    .secondParagraph {
      font-size: ${Clamp(16, 22, 22)};
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    @media (max-width: 999px){
      grid-template-columns: 1fr;
      h2 {
        grid-column: unset;
      }
      .paragraph {
        margin-bottom: 16px;
      }
    }
  }
  .wrapper {
    margin-top: ${Clamp(48, 96, 128, "px")};
    counter-reset: counter;
    .item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b" "a c" "d e";
      gap: 48px 32px;
      padding:${Clamp(54, 64, 80, "px")} ${Clamp(16, 48, 64, "px")} ${Clamp(24, 48, 80, "px")};
      border: 1px solid var(--neutral-800);
      &:not(:last-child){
        margin-bottom: ${Clamp(56, 80, 96, "px")};
      }
      counter-increment: counter;
      position: relative;
      &::before {
        content: counter(counter);
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,-50%);
        background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
        linear-gradient(90deg, #90F4E8, #2DD282) border-box;
        border: 1px solid transparent;
        border-radius: 50%;
        width: ${Clamp(40, 64, 64, "px")};
        height: ${Clamp(40, 64, 64, "px")};
        font-size: ${Clamp(16, 28, 30)};
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .img {
        grid-area: a;
        @media (max-width: 449px) {
          margin-left: ${Clamp(-64, -48, -16, "px")};
          margin-right: ${Clamp(-64, -48, -16, "px")};
        }
      }
      .heading {
        font-size: ${Clamp(28, 48, 40)};
        grid-area: b;
      }
      .subheading {
        font-size: ${Clamp(20, 32, 30)};
        grid-area: c;
        align-self: flex-end;
      }
      .paragraph, .secondParagraph {
        font-size: ${Clamp(16, 22, 22)};
      }
      .paragraph {
        grid-area: d;
      }
      .secondParagraph {
        grid-area: e;
      }
    }
    @media (max-width: 1100px){
      .item {
        grid-template-columns: 1fr;
        grid-template-areas: unset;
        gap: 0;
        .img, .heading, .subheading, .paragraph, .secondParagraph {
          grid-area: unset;
        }
        .heading {
          margin: ${Clamp(16, 24, 24, 'px')} 0 ${Clamp(8, 16, 16, 'px')};
        }
        .subheading {
          margin-bottom: ${Clamp(24, 32, 32, 'px')};
        }
        .paragraph {
          margin-bottom: 16px;
        }
      }
    }
  }
`

export default Process;