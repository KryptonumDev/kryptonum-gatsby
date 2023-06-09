import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";

const FaqTime = ({
  data: {
    img,
    heading,
    paragraph,
    cta,
    listHeading,
    list,
  }
}) => {
  return (
    <Wrapper className="answer">
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img"
      />
      <div className="copy">
        <ReactMarkdown components={{ p: 'h3' }} className="heading">{heading}</ReactMarkdown>
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
        <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
      </div>
      <p className="listHeading">{listHeading}</p>
      <ul className="list">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: .8fr 1fr;
  align-items: center;
  gap: 64px ${Clamp(64, 86, 144, 'px')};
  .heading, .listHeading {
    font-size: ${Clamp(20, 32, 30)};
  }
  .heading {
    margin-bottom: ${Clamp(24, 24, 32, 'px')};
  }
  .paragraph, .list {
    font-size: ${Clamp(16, 22, 22)};
  }
  .paragraph {
    p:not(:last-of-type) {
      margin-bottom: ${Clamp(16, 24, 24, 'px')};
    }
  }
  .cta {
    margin-top: ${Clamp(24, 34, 48, 'px')};
  }
  .listHeading, .list {
    grid-column: 3/1;
  }
  .listHeading {
    max-width: ${740/16}rem;
  }
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    counter-reset: counter;
    li {
      list-style-type: none;
      padding: ${Clamp(20, 32, 32, 'px')};
      border: 1px solid var(--neutral-800);
      counter-increment: counter;
      &::before {
        content: "/0" counter(counter);
        display: block;
        margin-bottom: ${Clamp(8, 16, 32, "px")};
      }
    }
  }
  @media (max-width: 899px){
    grid-template-columns: 1fr;
    gap: unset;
    .img {
      margin-bottom: ${Clamp(32, 48, 48, 'px')};
    }
    .listHeading, .list {
      grid-column: unset;
    }
    .listHeading {
      margin: ${Clamp(32, 48, 48, 'px')} 0 ${Clamp(24, 32, 32, 'px')};
    }
    .list {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
`

export default FaqTime;