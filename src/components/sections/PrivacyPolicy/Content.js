import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import ReadingTime from "../../atoms/ReadingTime";
import TableOfContent from "../../moleculas/TableOfContent";
import PortableContent from "../../organisms/PortableContent";

const Content = ({ heading, _rawContent }) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      </header>
      <div className="column">
        <nav>
          <TableOfContent content={_rawContent} />
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
      border: 1px solid var(--neutral-800);
      padding: 32px 16px;
    }
  }
`

export default Content;