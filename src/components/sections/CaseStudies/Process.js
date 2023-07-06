import React, { Fragment } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Clamp } from "../../../utils/functions";
import Logo from "./Logo";
import VisualIdentification from "./VisualIdentification";
import Technologies from "./Technologies";

const Process = ({
  data,
  logo_Showcase,
  logo_Paragraph,
  visualIdentification_Showcase,
  visualIdentification_Paragraph,
  visualIdentification_SecondParagraph,
  technologies_Paragraph,
  technologies,
}) => {
  return (
    <Wrapper>
      {data.map((step, i) => (
        <Fragment key={i}>
          {(i === 2 && logo_Showcase && logo_Paragraph && visualIdentification_Showcase && visualIdentification_Paragraph && visualIdentification_SecondParagraph) && (
            <>
              <Logo
                showcase={logo_Showcase}
                paragraph={logo_Paragraph}
              />
              <VisualIdentification
                showcase={visualIdentification_Showcase}
                paragraph={visualIdentification_Paragraph}
                secondParagraph={visualIdentification_SecondParagraph}
              />
            </>
          )}
          <div className="step">
            <GatsbyImage
              image={step.img.asset.gatsbyImageData}
              alt={step.img.asset.altText || ''}
              className="img"
            />
            <header className={step.subheading ? 'two-column' : ''}>
              <ReactMarkdown components={{ 'p': 'h2' }} className="heading">{step.heading}</ReactMarkdown>
              <ReactMarkdown components={{ 'p': 'h3' }} className="subheading">{step.subheading}</ReactMarkdown>
            </header>
            {step.paragraph && (
              <div className="column">
                <ReactMarkdown className="paragraph">{step.paragraph}</ReactMarkdown>
                <ReactMarkdown className="paragraph2">{step.paragraph2}</ReactMarkdown>
              </div>
            )}
            {(step.principles_Paragraph && step.principles_List.length > 0) && (
              <>
                <ReactMarkdown className="principlesParagraph">{step.principles_Paragraph}</ReactMarkdown>
                <ul>
                  {step.principles_List.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {(step.keyElements_Paragraph && step.keyElements_List.length > 0) && (
              <>
                <ReactMarkdown className="keyElementsParagraph">{step.keyElements_Paragraph}</ReactMarkdown>
                <div className="keyElementsList">
                  {step.keyElements_List.map((item, i) => (
                    <div className="item" key={i}>
                      <GatsbyImage
                        image={item.img.asset.gatsbyImageData}
                        alt={item.img.asset.altText || ''}
                        className="img"
                      />
                      <div className="copy">
                        <ReactMarkdown components={{ 'p': 'h3' }}>{item.heading}</ReactMarkdown>
                        {item.paragraph && (
                          <ReactMarkdown className="paragraph">{item.paragraph}</ReactMarkdown>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          {i === 3 && (
            <Technologies
              heading={technologies_Paragraph}
              technologies={technologies}
            />
          )}
        </Fragment>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  counter-reset: counter;
  display: grid;
  row-gap: ${Clamp(80, 96, 172, "px")};
  .step {
    counter-increment: counter;
    * + ol {
      margin-top: 24px;
    }
    ol {
      counter-reset: counter;
      display: grid;
      gap: 12px;
      li {
        display: grid;
        column-gap: 16px;
        grid-template-columns: ${Clamp(32, 42, 42, 'px')} 1fr;
        counter-increment: counter;
        &::before {
          content: counter(counter);
          display: inline-block;
        }
        &:nth-child(-n+9)::before {
          content: "/0" counter(counter);
        }
      }
    }
    header {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px 32px;
      margin: ${Clamp(24, 24, 48, 'px')} 0;
      @media (min-width: 1000px){
        &.two-column {
          grid-template-columns: 1fr 1fr;
        }
      }
      .heading {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        font-size: ${Clamp(20, 32, 30)};
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
      .subheading {
        font-size: ${Clamp(16, 22, 22)};
      }
    }
    .column {
      display: grid;
      grid-template-columns: 1fr;
      @media (min-width: 799px){
        grid-template-columns: 1fr 1fr;
      }
      gap: 16px 32px;
      .paragraph {
        font-size: ${Clamp(20, 22, 30)};
      }
      .paragraph2 {
        font-size: ${Clamp(16, 22, 22)};
      }
    }
    .principlesParagraph, .keyElementsParagraph {
      font-size: ${Clamp(24, 40, 40)};
      margin-bottom: ${Clamp(28, 32, 48, 'px')};
    }
    .principlesParagraph {
      margin-top: ${Clamp(48, 48, 64, 'px')};
    }
    .keyElementsParagraph {
      margin-top: ${Clamp(80, 96, 96, 'px')};
    }
    ul {
      display: grid;
      gap: 32px;
      list-style-type: none;
      @media (min-width: 799px){
        grid-template-columns: 1fr 1fr;
      }
      li {
        border: 1px solid var(--neutral-800);
        border-radius: 2px;
        font-size: ${Clamp(16, 22, 22)};
        padding: ${Clamp(20, 32, 32, 'px')};
      }
    }
    .keyElementsList {
      display: grid;
      row-gap: ${Clamp(48, 48, 96, 'px')};
      .item {
        display: grid;
        @media (min-width: 899px){
          &:nth-child(even) .copy {
            order: -1;
          }
          grid-template-columns: 1fr 1fr;
        }
        gap: 24px 32px;
        h3 {
          font-size: ${Clamp(20, 32, 36)};
          margin-bottom: 16px;
        }
        .copy {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .paragraph {
          font-size: ${Clamp(16, 22, 22)};
        }
      }
    }
    &:nth-last-of-type(2) {
      .keyElementsList {
        display: grid;
        @media (min-width: 899px){
          grid-template-columns: 1fr 1fr;
          .item {
            text-align: left;
            &:nth-child(even) {
              margin-top: -80px;
            }
          }
        }
        align-items: start;
        gap: 32px;
        .item {
          grid-template-columns: 1fr;
          row-gap: 0;
          text-align: center;
          &:nth-child(even) {
            .copy {
              order: unset;
            }
          }
          .copy {
            border: 1px solid var(--neutral-800);
            padding: ${Clamp(16, 32, 32, 'px')};
          }
          h3 {
            font-size: ${Clamp(16, 22, 22)};
            margin: 0;
          }
        }
      }
    }
  }
`

export default Process;