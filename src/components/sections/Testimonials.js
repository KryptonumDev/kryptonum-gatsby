import React, { useRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import 'swiper/css';
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions';
import { Quote } from "../atoms/Icons";
import Button from "../atoms/Button";

const Testimonials = () => {
  const { testimonials } = useStaticQuery(graphql`
    query {
      testimonials: allSanityTestimonials(limit: 3) {
        nodes {
          name
          text
          cta {
            theme
            text
            href
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 156)
            }
          }
        }
      }
    }
  `);

  const [ activeIndex, setActiveIndex ] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef?.current.swiper.slidePrev()
  const handleNext = () => swiperRef?.current.swiper.slideNext() 

  return (
    <Wrapper>
      <DecorativeHeading type="h2">Zobacz, co mówią o nas **klienci**:</DecorativeHeading>
      <Swiper
        className="slider"
        ref={swiperRef}
        spaceBetween={122}
        slidesPerView={1}
        modules={[A11y]}
        onSlideChange={(slider) => setActiveIndex(slider.activeIndex)}
      >
        {testimonials.nodes.map(({ name, text, cta, img }, i) => (
          <SwiperSlide className="slide" key={i}>
            <div className="author">
              <GatsbyImage
                image={img.asset.gatsbyImageData}
                alt={img.asset.altText || ''}
                className="img"
                objectFit="contain"
                objectPosition='top'
              />
              <div>
                <h3>{name}</h3>
                <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
              </div>
            </div>
            <div className="content">
              <Quote />
              <p>{text}</p>
            </div>
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
          disabled={activeIndex === testimonials.nodes.length-1}
          aria-label='Przejdź do następnego elementu'
        >
          <ArrowRight />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    font-size: ${Clamp(18, 28, 28)};
  }
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${Clamp(16, 32, 32, 'px')} ${Clamp(82, 82, 142, 'px')};
  align-items: center;
  .slider {
    width: calc(100% - var(--pageMargin));
    min-width: 0;
    border-left: 1px solid var(--neutral-700);
    padding: ${Clamp(32, 72, 72, 'px')} 0 ${Clamp(32, 72, 72, 'px')} ${Clamp(82, 82, 122, 'px')};
    margin-right: calc(var(--pageMargin) * -1);
    padding-right: var(--pageMargin);
    .slide {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 16px ${Clamp(24, 64, 142, 'px')};
    }
    .author {
      .img {
        width: ${Clamp(96, 156, 156, 'px')};
        height: ${Clamp(96, 156, 156, 'px')};
        border: 1px solid var(--neutral-200);
        border-radius: 50%;
        img {
          padding: 4px;
          border-radius: inherit;
        }
      }
      text-align: center;
      h3 {
        font-size: ${Clamp(16, 18, 18)};
        margin: ${Clamp(12, 24, 24, 'px')} auto ${Clamp(4, 12, 12, 'px')};
      }
      a {
        font-size: ${Clamp(16, 18, 18)};
      }
    }
    .content {
      svg {
        width: ${Clamp(24, 48, 48, 'px')};
        height: ${Clamp(24, 48, 48, 'px')};
        margin-bottom: 16px;
      }
      p {
        font-size: ${Clamp(16, 18, 18)};
      }
    }
  }
  @media (max-width: 999px){
    grid-template-columns: 1fr;
    h2 {
      margin: 0 auto;
    }
    .slider {
      width: calc(100% + var(--pageMargin) * 2);
      border-left: unset;
      position: relative;
      &::before {
        content: '';
        display: block;
        width: calc(100% - var(--pageMargin) * 2);
        height: 1px;
        background-color: var(--neutral-700);
        position: absolute;
        left: var(--pageMargin);
        top: 0;

      }
      padding: ${Clamp(32, 72, 72, 'px')} var(--pageMargin) 0 var(--pageMargin);;
      margin-left: calc(var(--pageMargin) * -1);
    }
  }
  @media (max-width: 499px){
    .slider {
      .slide {
        grid-template-columns: 1fr;
      }
      .author {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        text-align: left;
        align-items: center;
        h3 {
          margin: 0 0 4px 0;
        }
      }
    }
  }
  .controls {
    @media (min-width: 1000px){
      grid-column: 3/1;
    }
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
`
 
export default Testimonials;

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