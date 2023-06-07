import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from "../../utils/functions";
import Button from '../atoms/Button';

const Roadmap = ({heading, list, cta}) => {
  const wrapper = useRef();
  const [scrollable, setScrollable] = useState(0);
  useEffect(() => {
    const roadmap = document.querySelector('.roadmap');
    const items = roadmap.querySelectorAll('.roadmap-item');
    const container = wrapper.current;
    const anim = () => {
      var scrollableWidth = container.scrollWidth - container.clientWidth
      setScrollable(scrollableWidth)

      const { top } = roadmap.getBoundingClientRect();
      const topPositive = Math.abs(top);
      items.forEach(item => {
        item.getBoundingClientRect().left <= window.innerWidth / 2.5 ? item.classList.add('active') : item.classList.remove('active');
      })
      if(topPositive >= scrollableWidth) {
        container.scrollTo({left: scrollableWidth});
      } else if(top <= 0) {
        container.scrollTo({left: topPositive});
      } else {
        container.scrollTo({left: 0});
      }
    }
    anim();
    window.addEventListener('resize', anim);
    window.addEventListener('scroll', anim)
  }, [])

  return (
    <Wrapper style={{minHeight: `calc(100vh + ${scrollable}px`}} className="roadmap">
      <div className="sticky">
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <div className="line"></div>
        <div className="roadmap" ref={wrapper}>
          {list.map((item, i) => (
            <div className="roadmap-item" key={i}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {(i+1 === list.length && cta?.text) && (
                <Button to={cta.href} theme={cta.theme}>
                  {cta.text}
                </Button>
              )}
            </div>
          ))}
          <div className="roadmap-item"></div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .sticky {
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .line {
      height: 1px;
      background-color: var(--neutral-800);
      margin: 0 calc(var(--pageMargin) * -1);
    }
  }
  h2 {
    margin-bottom: ${Clamp(28, 64, 42, "px")};
    max-width: 734px;
  }
  .roadmap {
    width: calc(100vw - 16px);
    max-width: 1920px;
    pointer-events: none;
    ::-webkit-scrollbar {
      display: none;
    }
    display: flex;
    overflow-x: auto;
    margin: 0 calc(var(--pageMargin) * -1);
    padding: 0 var(--pageMargin);
    counter-reset: counter;
    margin-top: -12px;
    padding-bottom: 1rem;
    .roadmap-item {
      flex-shrink: 0;
      width: calc(100% / 2.1);
      column-gap: 32px;
      counter-increment: counter;
      position: relative;
      padding-top: 2rem;
      padding-right: 2rem;
      &:not(:last-child){
        &::before, &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        &::before {
          background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                      var(--gradient) border-box;
          border: 1px solid transparent;
        }
        &::after {
          background: var(--gradient);
          transform: scale(0);
          transition: transform .3s var(--easing);
        }
        &.active::after {
          transform: scale(1);
        }
      }
      &:last-child {
        width: calc(100% - (100% / 2.1));
      }
      h3 {
        font-size: ${Clamp(20, 32, 30)};
        margin-bottom: ${Clamp(8, 16, 16, "px")};
        &::before {
          content: "/" counter(counter);
          display: inline-block;
          width: 2rem;
          font-size: 1rem;
          margin-right: ${Clamp(8, 16, 16, "px")};
        }
      }
      &:nth-child(-n+9) h3::before {
        content: "/0" counter(counter);
      }
      p {
        font-size: ${Clamp(16, 22, 22)};
      }
      a {
        margin-top: 2rem;
        pointer-events: auto;
      }
    }
  }
  @media (max-width: 999px){
    .roadmap {
      .roadmap-item {
        width: calc(100% / 1.1);
        &:last-child {
          width: calc(100% - (100% / 1.1));
        }
      }
    }
  }
  @media (max-width: 499px){
    .roadmap {
      width: 100vw;
      .roadmap-item {
        width: 100%;
        &:not(:nth-last-of-type(2)){
          margin-right: 1rem;
        }
        &:last-child {
          display: none;
        }
      }
    }
  }
`
 
export default Roadmap;