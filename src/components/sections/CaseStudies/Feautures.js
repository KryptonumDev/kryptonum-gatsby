import React, { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Clamp } from '../../../utils/functions';

const breakpoint = { tablet: '949px'};

const Feautures = ({ data: { heading, feautures } }) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const items = wrapper.querySelectorAll('.item');
    let animationFrameId;
    const handleResize = () => {
      animationFrameId = requestAnimationFrame(() => {
        let itemsMaxHeight = 0;
        items.forEach(item => {
          let itemHeight = item.getBoundingClientRect().height;
          itemsMaxHeight = Math.max(itemsMaxHeight, itemHeight);
        });
        items[items.length-1].style.height = itemsMaxHeight + 'px';
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const handleShrinkMargin = () => {
      const { top } = wrapper.getBoundingClientRect();
      if(top <= 72){
        wrapper.classList.add('scrolled');
      } else {
        wrapper.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleShrinkMargin);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleShrinkMargin);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper className="logo">
        <header>
          <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        </header>
        <div className="wrapper" ref={wrapperRef}>
          {feautures.map((feauture, i) => (
            <div className="item" key={i}>
              <GatsbyImage
                image={feauture.img.asset.gatsbyImageData}
                alt={feauture.img.asset.altText || ''}
                className='img'
              />
              <ReactMarkdown className="title">{feauture.title}</ReactMarkdown>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  @media (max-width: ${breakpoint.tablet}){
    nav.nav:not(.fixed) ~ main .logo .wrapper.scrolled {
      transform: translateY(-89px);
      margin-bottom: -89px;
    }
  }
`

const Wrapper = styled.section`
  --offset: 21px;
  --gap: ${Clamp(16, 24, 32, 'px')};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: ${Clamp(32, 64, 64, 'px')} ${Clamp(64, 82, 102, 'px')};
  header {
    position: sticky;
    top: 144px;
    max-width: 610px;
  }
  .wrapper {
    max-width: 610px;
    margin-left: auto;
    transition: transform .5s, margin-bottom .5s;
    display: grid;
    gap: var(--gap);
    .item {
      background-color: var(--neutral-950);
      position: sticky;
      border: 1px solid var(--neutral-700);
      &:nth-child(1) {
        top: 144px;
      }
      &:nth-child(2) {
        top: calc(144px + (var(--offset) * 1));
      }
      &:nth-child(3) {
        top: calc(144px + (var(--offset) * 2));
      }
      &:nth-child(4) {
        top: calc(144px + (var(--offset) * 3));
      }
      &:nth-child(5) {
        top: calc(144px + (var(--offset) * 4));
      }
      &:nth-child(6) {
        top: calc(144px + (var(--offset) * 5));
      }
      &:nth-child(7) {
        top: calc(144px + (var(--offset) * 6));
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: ${Clamp(24, 32, 32, 'px')} ${Clamp(16, 24, 24, 'px')};
      .img {
        width: 48px;
        height: 48px;
        img {
          padding: 12px;
        }
        margin-bottom: ${Clamp(16, 24, 32, 'px')};
        border-radius: 50%;
        border: 1px solid var(--neutral-700);
        background-color: var(--neutral-900);
      }
      .title {
        font-size: ${Clamp(16, 18, 18)};
      }
    }
  }
  @media (max-width: ${breakpoint.tablet}){
    grid-template-columns: 1fr;
    header {
      position: static;
    }
    header,
    .wrapper {
      max-width: unset;
    }
  }
`

export default Feautures;