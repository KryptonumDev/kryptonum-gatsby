import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Process = ({
  data: {
    process_Heading,
    process_Claim,
    process_Paragraph,
    process_List,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{process_Heading}</DecorativeHeading>
        <ReactMarkdown className="claim">{process_Claim}</ReactMarkdown>
      </header>
      <p className="paragraph">{process_Paragraph}</p>
      <div className="wrapper">
        {process_List.map((process, i) => (
          <div className="item" key={i}>
            <ReactMarkdown components={{ p: 'h3' }}>{process.title}</ReactMarkdown>
            <ReactMarkdown className="copy">{process.description}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    max-width: ${694/16}rem;
    h2 {
      margin-bottom: ${Clamp(28, 32, 32, "px")};
    }
  }
  .claim, .paragraph {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph {
    margin: ${Clamp(32, 48, 64)} 0 ${Clamp(28, 32, 32)};
  }
  .wrapper {
    counter-reset: counter;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Clamp(64, 92, 128, "px")};
    .item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      counter-increment: counter;
      h3 {
        font-size: ${Clamp(20, 40, 40)};
        &::before {
          content: "/0" counter(counter);
          display: inline-block;
          width: ${28/16}rem;
          margin-right: ${Clamp(8, 16, 32, "px")};
          font-size: 1rem;
        }
      }
      .copy {
        font-size: ${Clamp(16, 22, 22)};
        p:not(:last-child){
          margin-bottom: ${Clamp(16, 24, 32, "px")};
        }
      }
    }
  }
  @media (max-width: 1099px){
    .wrapper {
      .item {
        grid-template-columns: 1fr;
      }
    }
  }
`

export default Process;