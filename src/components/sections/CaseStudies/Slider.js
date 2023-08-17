import React, { useState, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import ReactMarkdown from 'react-markdown';
import { Clamp } from '../../../utils/functions';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Slider = ({ data: { heading, slides }}) => {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef?.current.swiper.slidePrev()
  const handleNext = () => swiperRef?.current.swiper.slideNext() 

  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <Swiper
        ref={swiperRef}
        spaceBetween={32}
        slidesPerView={1.5}
        breakpoints={{
          0: {
            spaceBetween: 16,
            slidesPerView: 1.1,
          },
          768: {
            spaceBetween: 32,
            slidesPerView: 1.5,
          },
        }}
        modules={[A11y]}
        className="slider"
        onSlideChange={(slider) => setActiveIndex(slider.activeIndex)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide className="slide" key={i}>
            <div>
              <GatsbyImage
                image={slide.img.asset.gatsbyImageData}
                alt={slide.img.asset.altText || ''}
                className='img'
              />
              <ReactMarkdown className='title'>{slide.title}</ReactMarkdown>
            </div>
            <ReactMarkdown className='description'>{slide.description}</ReactMarkdown>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="controls">
        <button
          onClick={() => { handlePrev() }}
          disabled={activeIndex===0}
          aria-label='Przejdź do poprzedniego elementu'
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => { handleNext() }}
          disabled={activeIndex===slides.length-1}
          aria-label='Przejdź do następnego elementu'
        >
          <ArrowRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
  h2 {
    align-self: center;
    max-width: 500px;
  }
  .slider {
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 34px;
      height: 100%;
      pointer-events: none;
      z-index: 2;
      background: linear-gradient(90deg, var(--neutral-950), rgba(0,0,0,0));
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
      transform: rotate(180deg);
    }
    padding: 0 21px;
    min-width: 0;
    margin-right: calc(var(--pageMargin) * -1);
    width: calc(100% + var(--pageMargin));
    .slide {
      padding: ${Clamp(24, 40, 48, 'px')} ${Clamp(16, 24, 28, 'px')};
      border: 1px solid var(--neutral-700);
      font-size: ${Clamp(16, 18, 18)};
      > div {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${Clamp(4, 12, 12, 'px')};
        align-items: center;
        margin-bottom: ${Clamp(8, 24, 64, 'px')};
      }
      .img {
        width: 40px;
        height: 40px;
      }
    }
  }
  .controls {
    grid-column: 3/1;
    margin-left: auto;
    display: grid;
    grid-template-columns: 48px 48px;
    gap: 16px;
    button {
      width: 48px;
      height: 48px;
      border: 1px solid var(--neutral-700);
      border-radius: 50%;
      transition: background-color .4s, opacity .4s;
      &[disabled] {
        opacity: .4;
        pointer-events: none;
      }
      &:hover {
        background-color: var(--neutral-900);
      }
      &:active {
        svg {
          transform: scale(.95);
        }
      }
      svg {
        transition: transform .4s var(--easing);
      }
    }
  }
  @media (max-width: 1049px){
    grid-template-columns: 1fr;
    .slider {
      margin-left: calc(var(--pageMargin) * -1);
      width: calc(100% + var(--pageMargin) * 2);
    }
    .controls {
      grid-column: unset;
    }
  }
`

const ArrowLeft = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
    <path
      stroke='#EFF0F3'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M19 12H5m0 0l7 7m-7-7l7-7'
    ></path>
  </svg>
)

const ArrowRight = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
    <path
      stroke='#EFF0F3'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M5 12h14m0 0l-7-7m7 7l-7 7'
    ></path>
  </svg>
)

export default Slider;