import React, { useEffect, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import DecorativeHeading from '../../atoms/DecorativeHeading';

const animation = { rotate: 2, x: 60 };

const Stylescape = ({ data: { heading, paragraph, stylescapes, elements } }) => {
  const stylescapesRef = useRef(null);

   useEffect(() => {
    const items = stylescapesRef.current.querySelectorAll('.img');
    const animateItems = () => {
      const windowHeight = window.innerHeight;
      items.forEach((item, i) => {
        const { top, bottom } = item.getBoundingClientRect();
        let progress = 0;
        const rotationAngle = i % 2 === 0 ? -animation.rotate : animation.rotate;
        if (top >= windowHeight) {
          progress = 0;
          item.style = null;
        } else if (bottom <= 0) {
          progress = 1;
          item.style.transform = `rotate(${rotationAngle}deg) translateX(${60}%)`;
        } else {
          progress = 1 - (bottom / windowHeight);
          const translationX = Math.ceil((progress * (i % 2 === 0 ? -animation.x : animation.x)) * 100) / 100;
          item.style.transform = `rotate(${rotationAngle}deg) translateX(${translationX}%)`;
        }
      });
      requestAnimationFrame(animateItems);
    }

    const handleScroll = () => {
      requestAnimationFrame(animateItems);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <ReactMarkdown className='paragraph'>{paragraph}</ReactMarkdown>
      </header>
      <div className="stylescapes" ref={stylescapesRef}>
        {stylescapes.map((stylescape, i) => (
          <GatsbyImage
            image={stylescape.asset.gatsbyImageData}
            alt={stylescape.asset.altText || ''}
            className='img'
            key={i}
          />
        ))}
      </div>
      <div className="elements">
        {elements.map((item, i) => (
          <div className="item" key={i}>
            <ReactMarkdown className="title">{item.title}</ReactMarkdown>
             <GatsbyImage
              image={item.img.asset.gatsbyImageData}
              alt={item.img.asset.altText || ''}
              className='img'
              objectFit='contain'
              objectPosition="left top"
              key={i}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  padding: 0 var(--pageMargin);
  margin: 0 calc(var(--pageMargin) * -1);
  header {
    max-width: 630px;
    margin: 0 auto ${Clamp(32, 42, 64, 'px')};
    h2 {
      margin-bottom: ${Clamp(16, 24, 32, 'px')};
    }
    .paragraph {
      font-size: ${Clamp(16, 18, 18)};
    }
  }
  .stylescapes {
    .img {
      margin-bottom: ${Clamp(48, 64, 82, 'px')};
      width: 200%;
      will-change: transform;
      &:nth-child(odd){
        transform: rotate(-2deg);
        transform-origin: left center;
      }
      &:nth-child(even){
        transform: rotate(2deg);
        margin-left: -100%;
        transform-origin: right center;
      }
    }
  }
  .elements {
    counter-reset: counter;
    .item {
      display: grid;
      grid-template-columns: 78px 2fr 1fr;
      align-items: flex-start;
      counter-increment: counter;
      &:not(:last-child){
        border-bottom: 1px solid var(--neutral-700);
        margin-bottom: ${Clamp(24, 32, 48, 'px')};
        padding-bottom: ${Clamp(32, 48, 64, 'px')};
      }
      &::before {
        content: counter(counter);
        margin-right: 32px;
      }
      &:nth-child(-n+9)::before {
        content: "0" counter(counter);
      }
      .title {
        font-size: ${Clamp(16, 18, 18)};
        margin-right: 142px;
      }
    }
    @media (max-width: 999px){
      .item {
        grid-template-columns: 1fr 1fr;
        gap: ${Clamp(16, 24, 32, 'px')} 32px;
        &::before {
          margin-right: 0;
          grid-column: 3/1;
        }
        .title {
          margin-right: 0;
        }
      }
    }
    @media (max-width: 599px){
      .item {
        grid-template-columns: 1fr;
        gap: ${Clamp(16, 24, 32, 'px')} 32px;
        &::before {
          grid-column: unset;
        }
        .title {
          margin-bottom: 16px;
        }
      }
    }
  }
`

export default Stylescape;