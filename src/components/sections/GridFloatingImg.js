import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp, removeMarkdown } from "../../utils/functions";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import { motion, useMotionValue, useSpring } from "framer-motion";

const options = {
  damping: 50,
  stiffness: 300,
}

const GridFloatingImg = ({
  data: {
    heading,
    list,
  }
}) => {
  const wrapper = useRef(null);

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }

  const handleMouseMove = (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect(() => {
    wrapper?.current?.addEventListener('mousemove', handleMouseMove);
    return () => wrapper?.current?.removeEventListener('mousemove', handleMouseMove);
  }, [])

  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2" decoration={false}>{heading}</DecorativeHeading>
      </header>
      <div className="wrapper" ref={wrapper}>
        {list.map(({ title, description, img, href }, i) => (
          <div className="item" key={i}>
            <Link to={href} aria-label={removeMarkdown(title)} className='link' />
            <motion.div
              style={{
                left: mouse.x,
                top: mouse.y,
              }}
              className="img"
            >
              <GatsbyImage
                image={img.asset.gatsbyImageData}
                alt={img.asset.altText || ''}
                className="cover"
              />
            </motion.div>
            <h2>
              <span>{title}</span>
              <Arrow />
            </h2>
            <ReactMarkdown className="description">{description}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    text-align: center;
    h2 {
      font-size: ${Clamp(18, 28, 28)};
    }
    max-width: calc(476rem/16);
    margin: 0 auto ${Clamp(48, 64, 96, 'px')};
  }
  .wrapper {
    max-width: calc(1068rem/16);
    margin: 0 auto;
    display: grid;
    gap: ${Clamp(32, 48, 64, 'px')} 32px;
    @media (min-width: 900px){
      grid-template-columns: 1fr 1fr;
    }
    counter-reset: counter;
    position: relative;
    .item {
      position: relative;
      > .link {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      counter-increment: counter;
      h2 {
        font-size: ${Clamp(18, 28, 28, 'px')};
        margin-bottom: ${Clamp(12, 16, 32, 'px')};
        display: flex;
        grid-template-columns: ${Clamp(32, 42, 48, 'px')} 1fr;
        align-items: flex-end;
        gap: 8px;
        &::before {
          content: "/" counter(counter);
          font-size: ${Clamp(16, 18, 18)};
          width: 42px;
        }
        svg {
          width: ${Clamp(24, 32, 42, 'px')};
          height: ${Clamp(24, 32, 42, 'px')};
          transition: stroke .4s;
        }
      }
      &:nth-child(-n+10) h2::before {
        content: "/0" counter(counter);
      }
      .description {
        font-size: ${Clamp(16, 18, 18)};
        a {
          z-index: 2;
          position: relative;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      &:not(:hover) {
        svg {
          stroke: var(--neutral-200);
        }
        .cover {
          opacity: 0;
          transform: scale(0);
        }
      }
      .img {
        position: absolute;
        z-index: 3;
        left: 0;
        top: 0;
        pointer-events: none;
        width: ${Clamp(144, 210, 320, 'px')};
        .cover {
          transition: transform .8s var(--easing);
        }
      }
    }
  }
`
 
export default GridFloatingImg;

const Arrow = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none' stroke='url(#paint0_linear_7869_9975)'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M14 34l20-20m0 0H14m20 0v20'
    ></path>
    <defs>
      <linearGradient
        id='paint0_linear_7869_9975'
        x1='33.625'
        x2='12.811'
        y1='14'
        y2='15.326'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282'></stop>
        <stop offset='1' stopColor='#90F4E8'></stop>
      </linearGradient>
    </defs>
  </svg>
)