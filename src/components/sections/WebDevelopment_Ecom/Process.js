import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Process = ({
  data: {
    process_Heading,
    process_Claim,
    process_List,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{process_Heading}</DecorativeHeading>
        <ReactMarkdown className="paragraph">{process_Claim}</ReactMarkdown>
      </header>
      <div className="wrapper">
        {process_List.map((item, i) => (
          <div className="item" key={i}>
            <ReactMarkdown className="heading" components={{ p: 'h3' }}>{item.heading}</ReactMarkdown>
            <ReactMarkdown className="subheading">{item.subheading}</ReactMarkdown>
            <div className="copy">
              <ReactMarkdown className="paragraph">{item.paragraph}</ReactMarkdown>
              <ReactMarkdown className="secondParagraph">{item.secondParagraph}</ReactMarkdown>
            </div>
            <ReactMarkdown className="secondHeading">{item.secondHeading}</ReactMarkdown>
            {item.cta.href && (
              <div className="cta-wrapper">
                <Button theme={item.cta.theme} to={item.cta.href}>{item.cta.text}</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 32px;
    align-items: flex-end;
    h2 {
      max-width: ${850/16}rem;
    }
    p {
      max-width: ${410/16}rem;
      text-align: right;
      font-size: ${Clamp(20, 22, 22)};
    }
    @media (max-width: 1099px){
      grid-template-columns: 1fr;
      align-items: flex-start;
      p { 
        text-align: left;
      }
    }
  }
  .wrapper {
    margin-top: ${Clamp(28, 64, 64, "px")};
    counter-reset: counter;
    .item {
      padding: ${Clamp(24, 48, 64, "px")} ${Clamp(16, 34, 64, "px")};
      border: 1px solid var(--neutral-800);
      &:not(:last-child){
        margin-bottom: ${Clamp(28, 64, 64, "px")};
      }
      counter-increment: counter;
      .heading {
        font-size: ${Clamp(28, 32, 48)};
        margin-bottom: ${Clamp(28, 32, 48, 'px')};
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        &::before {
          content: counter(counter);
          background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
          var(--gradient) border-box;
          border: 1px solid transparent;
          border-radius: 50%;
          width: ${Clamp(40, 64, 64, "px")};
          height: ${Clamp(40, 64, 64, "px")};
          font-size: ${Clamp(16, 28, 30)};
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      &:nth-child(odd){
        .heading::before {
          order: 1;
        }
      }
      &:last-child{
        .heading {
          &::before {
            display: none;
          }
          h3 {
            display: grid;
            grid-template-columns: auto auto;
            align-items: center;
            gap: 16px;
          }
          strong {
            background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                        var(--gradient) border-box;
            color: var(--neutral-200);
            -webkit-text-fill-color: unset;
            border: 1px solid transparent;
            border-radius: 50%;
            width: ${Clamp(40, 64, 64, "px")};
            height: ${Clamp(40, 64, 64, "px")};
            font-size: ${Clamp(16, 28, 30)};
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .subheading {
        font-size: ${Clamp(20, 32, 30)};
      }
      .copy {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px 32px;
        font-size: ${Clamp(16, 22, 22)};
        margin: 32px 0;
      }
      .secondHeading {
        font-size: ${Clamp(20, 32, 30)};
        margin-bottom: 32px;
      }
    }
    @media (max-width: 949px){
      .item {
        .heading {
          grid-template-columns: auto;
        }
        &:nth-child(odd){
          .heading::before {
            order: unset;
          }
        }
        .copy {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`

export default Process;