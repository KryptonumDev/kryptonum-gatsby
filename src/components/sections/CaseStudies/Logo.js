import React, { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Clamp } from '../../../utils/functions';

const breakpoint = { tablet: '949px'};

const Logo = ({ data: { heading, paragraph, proposals } }) => {
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
        items.forEach(item => {
          item.style.height = itemsMaxHeight + 'px';
        });
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
          <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
        </header>
        <div className="wrapper" ref={wrapperRef}>
          {proposals.map((proposal, i) => (
            <div className="item" key={i}>
              <div className="logo">
                <GatsbyImage
                  image={proposal.img.asset.gatsbyImageData}
                  alt={proposal.img.asset.altText || ''}
                  className='img'
                />
              </div>
              <ReactMarkdown className="title">{proposal.title}</ReactMarkdown>
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
  --gap: ${Clamp(48, 64, 144, 'px')};
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: flex-start;
  gap: ${Clamp(48, 64, 64, 'px')} ${Clamp(48, 64, 94, 'px')};
  header {
    position: sticky;
    top: 144px;
    margin-bottom: calc(var(--gap) - (var(--offset) * 3));
    h2 {
      margin-bottom: ${Clamp(24, 48, 48, 'px')};
    }
    .paragraph {
      font-size: ${Clamp(16, 18, 18)};
    }
  }
  .wrapper {
    max-width: 680px;
    margin-left: auto;
    counter-reset: counter;
    transition: transform .5s, margin-bottom .5s;
    .item {
      background-color: var(--neutral-950);
      position: sticky;
      &:nth-child(1) {
        top: 144px;
        margin-bottom: var(--gap);
      }
      &:nth-child(2) {
        top: calc(144px + (var(--offset) * 1));
        margin-bottom: calc(var(--gap) - (var(--offset) * 1));
      }
      &:nth-child(3) {
        top: calc(144px + (var(--offset) * 2));
        margin-bottom: calc(var(--gap) - (var(--offset) * 2));
      }
      &:nth-child(4) {
        top: calc(144px + (var(--offset) * 3));
        margin-bottom: calc(var(--gap) - (var(--offset) * 3));
      }
      counter-increment: counter;
      .logo {
        margin-left: 46px;
        margin-bottom: ${Clamp(24, 32, 32, 'px')};
        padding: ${Clamp(16, 40, 40, 'px')} ${Clamp(24, 24, 24, 'px')};
        border: 1px solid var(--neutral-700);
        .img {
          max-width: 480px;
          display: block;
          margin: 0 auto;
        }
      }
      .title {
        display: grid;
        grid-template-columns: 28px 1fr;
        gap: 18px;
        font-size: ${Clamp(16, 18, 18)};
        &::before {
          content: counter(counter);
        }
      }
      &:nth-child(-n+9) .title::before {
        content: "0" counter(counter);
      }
    }
  }
  @media (max-width: ${breakpoint.tablet}){
    grid-template-columns: 1fr;
    header {
      position: static;
    }
    .wrapper {
      max-width: unset;
      .item {
        .logo {
          margin-left: 0;
        }
      }
    }
  }
`

export default Logo;