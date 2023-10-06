import React, { useEffect, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";

const LargeListWithImg = ({ data: { heading, img, list } } ) => {
  const wrapperRef = useRef(null);

  const animateItems = () => {
    const items = wrapperRef.current.querySelectorAll('.item');
    items.forEach(item => {
      const { top } = item.getBoundingClientRect();
      if (top >= window.innerHeight * 0.66) {
        item.classList.add('hide');
      } else {
        item.classList.remove('hide');
      }
    });
  };

  const handleScroll = () => {
    requestAnimationFrame(animateItems);
  };

  useEffect(() => {
    animateItems();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper>
      <DecorativeHeading type="h2" decoration={false}>{heading}</DecorativeHeading>
      {img && (
        <GatsbyImage
          image={img.asset.gatsbyImageData}
          alt={img.asset.altText || ''}
          className="img"
        />
      )}
      <div className="wrapper" ref={wrapperRef}>
        {list && (
          list.map(({ title, description }, i) => (
            <div className="item" key={i}>
              <ReactMarkdown className="title" components={{ p: 'h3' }}>{title}</ReactMarkdown>
              <ReactMarkdown className="description">{description}</ReactMarkdown>
            </div>
          ))
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    font-size: ${Clamp(18, 28, 28)};
    margin-bottom: ${Clamp(32, 48, 48, 'px')};
    max-width: calc(430rem/16);
  }
  .img {
    margin-bottom: ${Clamp(48, 64, 96, 'px')};
    border: 1px solid var(--neutral-700);
  }
  .wrapper {
    counter-reset: counter;
    .item {
      overflow: hidden;
      position: relative;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8), var(--neutral-950));
        transition: transform .6s;
        pointer-events: none;
      }
      &:not(.hide):before {
        transform: translateY(100%);
      }
      border-bottom: 1px solid var(--neutral-800);
      padding: 24px 0 ${Clamp(24, 48, 64, 'px')};
      &:not(:last-child){
        margin-bottom: 12px;
      }
      display: grid;
      @media (min-width: 850px){
        grid-template-columns: 1fr 2fr;
      }
      align-items: start;
      gap: ${Clamp(24, 32, 32, 'px')} 32px;
      counter-increment: counter;
      h3 {
        font-size: ${Clamp(18, 22, 22)};
        display: grid;
        align-items: center;
        row-gap: 16px;
        @media (min-width: 400px){
          grid-template-columns: 64px 1fr;
        }
        &::before {
          content: "/" counter(counter);
          font-size: ${Clamp(16, 18, 18)};
        }
      }
      &:nth-child(-n+9) h3::before {
        content: "/0" counter(counter);
      }
      .description {
        font-size: ${Clamp(16, 18, 18)};
        p:not(:last-child){
          margin-bottom: 16px;
        }
      }
      @media (max-width: 849px) and (min-width: 400px){
        .description {
          margin-left: 64px;
        }
      }
      @media (max-width: 399px){
        
      }
    }
  }
`

export default LargeListWithImg;