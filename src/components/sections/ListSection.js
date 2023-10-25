import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";

const ListSection = ({ heading, list, paragraph, secondParagraph, title }) => {
  const wrapperRef = useRef(null);
  
  const animateItems = () => {
    const items = wrapperRef.current.querySelectorAll('.item');
    items.forEach(item => {
      const { top } = item.getBoundingClientRect();
      if (top <= window.innerHeight * 0.66) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };
  
  const handleScroll = () => {
    requestAnimationFrame(animateItems);
  };

  useEffect(() => {
    if (wrapperRef.current) {
      animateItems();
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      {secondParagraph && (
        <DecorativeHeading type="h2" className="heading">{heading}</DecorativeHeading>
      )}
      <div className="copy">
        {!secondParagraph && (
          <DecorativeHeading type="h2" className="heading">{heading}</DecorativeHeading>
        )}
        <ReactMarkdown className="paragraph" components={{ p: 'h3'}}>{paragraph}</ReactMarkdown>
        {secondParagraph && (
          <ReactMarkdown className="paragraph2">{secondParagraph}</ReactMarkdown>
        )}
      </div>
      <ReactMarkdown className="title">{title}</ReactMarkdown>
      <div className="wrapper" ref={wrapperRef}>
        {list.map((item, i) => (
          <div className="item" key={i}>
            <ReactMarkdown className="title" components={{ p: 'h3' }}>{item.title}</ReactMarkdown>
            <ReactMarkdown className="description">{item.description}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .heading {
    margin-bottom: ${Clamp(28, 64, 64, 'px')};
  }
  .copy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    @media (max-width: 949px){
      grid-template-columns: 1fr;
      gap: 16px;
    }
    margin-bottom: ${Clamp(28, 64, 64, 'px')};
    .paragraph {
      font-size: ${Clamp(20, 32, 30)};
      h3 {
        font-size: inherit;
      }
    }
    .paragraph2 {
      font-size: ${Clamp(16, 22, 22)};
    }
  }
  .wrapper {
    counter-reset: counter;
  }
  .title {
    font-size: ${Clamp(20, 32, 30)};
    margin-bottom: 32px;
  }
  .item {
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8), var(--neutral-950));
      transition: transform .8s;
      transform: translateY(0);
    }
    &.active::before {
      transform: translateY(100%);
    }
    &:first-child {
      border-top: 1px solid var(--neutral-800);
    }
    border-bottom: 1px solid var(--neutral-800);
    padding: ${Clamp(32, 48, 64, 'px')} 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 32px;
    counter-increment: counter;
    .title {
      font-size: ${Clamp(20, 32, 30)};
      display: grid;
      grid-template-columns: .5fr 1fr;
      align-items: start;
      &::before {
        content: "/" counter(counter);
        font-size: ${Clamp(16, 22, 22)};
        display: inline-block;
        margin-top: .2em;
        margin-right: ${Clamp(8, 16, 16, "px")};
      }
    }
    &:nth-child(-n+10) .title::before {
      content: "/0" counter(counter);
    }
    .description {
      font-size: ${Clamp(16, 22, 22)};
      p:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
  @media (max-width: 849px){
    .item {
      grid-template-columns: 1fr;
      gap: 24px;
      .title {
        grid-template-columns: auto 1fr;
        &::before {
          content: "/" counter(counter);
          font-size: ${Clamp(16, 22, 22)};
          display: inline-block;
          margin-top: .1em;
          margin-right: 16px;
        }
      }
      &:nth-child(-n+10) .title::before {
        content: "/0" counter(counter);
      }
      .description {
        font-size: ${Clamp(16, 22, 22)};
        p:not(:last-child){
          margin-bottom: 16px;
        }
      }
    }
  }
`

export default ListSection;