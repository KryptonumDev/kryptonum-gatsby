import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { ArrowDown } from "../../atoms/Icons";

const Technology = ({
  data: {
    technology_Heading,
    technology_Paragraph,
    technology_Content,
    technology_Img,
  }
}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{technology_Heading}</DecorativeHeading>
      </header>
      <div className="content">
        <ReactMarkdown>{technology_Content.split('\n\n').slice(0,3).join('\n\n')}</ReactMarkdown>
        <button onClick={() => setShowMore(!showMore)} className={showMore ? 'showedMore' : ''}>
          <span>{showMore ? 'Pokaż mniej' : 'Pokaż więcej'}</span>
          <ArrowDown />
        </button>
        <div className="text" style={{display: showMore ? 'block' : 'none'}}>
          <ReactMarkdown>{technology_Content.split('\n\n').slice(3).join('\n\n')}</ReactMarkdown>
        </div>
      </div>
      <ReactMarkdown className="paragraph">{technology_Paragraph}</ReactMarkdown>
      <div className="images">
        {technology_Img.map((img, i) => (
          <GatsbyImage
            image={img.asset.gatsbyImageData}
            alt={img.asset.altText || ''}
            className='img'
            key={i}
          />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  column-gap: 32px;
  align-items: start;
  grid-template-areas: "header header" "content paragraph" "content images";
  header {
    grid-area: header;
    margin-bottom: ${Clamp(48, 48, 64, 'px')};
  }
  .paragraph {
    grid-area: paragraph;
    text-align: right;
    font-size: ${Clamp(20, 22, 24)};
  }
  .content {
    grid-area: content;
    font-size: ${Clamp(16, 22, 22)};
    > p:first-child {
      font-size: ${Clamp(20, 30, 30)};
    }
    p:not(:last-child){
      &:not(:nth-child(1)):not(:nth-last-child(2)){
        border-bottom: 1px solid var(--neutral-800);
        padding-bottom: ${Clamp(16, 24, 24, 'px')};
      }
      margin-bottom: ${Clamp(16, 24, 24, 'px')};
    }
    button {
      text-decoration: underline;
      display: flex;
      margin: 0 auto 24px;
      gap: 8px;
      justify-content: center;
      align-items: center;
      &.showedMore {
        svg {
          transform: rotateX(180deg);
        }
      }
      svg {
        width: 24px;
        height: 24px;
        transition: transform .3s;
      }
    }
  }
  .images {
    grid-area: images;
    align-self: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      flex-shrink: 0;
    }
    .img:nth-child(odd) { transform: rotate(13deg) }
    .img:nth-child(even) { transform: rotate(-13deg) }
  }
  @media (max-width: 899px){
    grid-template-columns: 1fr;
    grid-template-areas: "header" "paragraph" "images" "content";
    .paragraph {
      text-align: left;
    }
    .images {
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      margin: 0 calc(var(--pageMargin) * -1) 24px;
      padding: 0 var(--pageMargin);
    }
  }
`

export default Technology;