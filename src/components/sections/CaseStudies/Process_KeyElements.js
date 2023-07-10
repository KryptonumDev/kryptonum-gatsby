import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const ProcessKeyElements = ({ paragraph, list, isHeading=false }) => {
  return (
    <Wrapper>
      {(list.length > 0 && paragraph) && (
        isHeading ? (
          <DecorativeHeading type="h2" className="heading">{paragraph}</DecorativeHeading>
        ) : (
          <ReactMarkdown className="heading">{paragraph}</ReactMarkdown>
        )
      )}
      <div className="keyElementsList">
        {list.map((item, i) => (
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .heading {
    margin-top: ${Clamp(80, 96, 96, 'px')};
    font-size: ${Clamp(24, 40, 40)};
    margin-bottom: ${Clamp(28, 32, 48, 'px')};
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
`

export default ProcessKeyElements;