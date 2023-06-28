import React from "react";
import styled from "styled-components";
import { Clamp, generateHeadings } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import ReadingTime from "../../atoms/ReadingTIme";
import PortableContent from "../../organisms/PortableContent";

const Content = ({ heading, _rawContent }) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      </header>
      <div className="column">
        <nav>
          {generateHeadings(_rawContent)}
        </nav>
        <div>
          <ReadingTime content={_rawContent} />
          <PortableContent data={_rawContent} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    margin-bottom: ${Clamp(28, 48, 72, 'px')};
    max-width: ${734/16}rem;
  }
  .column {
    display: grid;
    @media (min-width: 1100px){
      grid-template-columns: 1fr 2fr;
      nav {
        position: sticky;
        top: 126px;
      }
    }
    @media (min-width: 1099px){
      nav {
        max-height: calc(100vh - 126px);
        max-height: calc(100dvh - 126px);
        overflow-y: auto;
      }
    }
    align-items: start;
    gap: 144px 32px;
    .readingTime {
      margin-bottom: 24px;
    }
    nav {
      border: 1px solid var(--neutral-900);
      padding: 32px 16px;
      li {
        list-style-type: none;
        &.h2 {
          font-size: 20px;
          &:not(:last-child) {
            margin-bottom: 8px;
          }
        }
        &.h3 {
          font-size: 16px;
          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
        &.h2:not(:first-of-type) {
          margin-top: 24px;
        }
      }
    }
  }
`

export default Content;