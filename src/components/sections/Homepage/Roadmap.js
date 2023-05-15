import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from "../../../utils/functions";
import Button from '../../atoms/Button';

const Roadmap = ({data: {roadmap_Heading, roadmap_Process, roadmap_Cta}}) => {
  const wrapper = useRef();
  const [scrollable, setScrollable] = useState(0);
  useEffect(() => {
    const roadmap = document.querySelector('.roadmap');
    const items = roadmap.querySelectorAll('.item');
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
    <Wrapper data-height={scrollable} className="roadmap">
      <div className="sticky">
        <DecorativeHeading type="h2">{roadmap_Heading}</DecorativeHeading>
        <div className="line"></div>
        <div className="wrapper" ref={wrapper}>
          {roadmap_Process.map((item, i) => (
            <div className="item" key={i}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {i+1 === roadmap_Process.length && (
                <Button to={roadmap_Cta.href} theme={roadmap_Cta.theme}>
                  {roadmap_Cta.text}
                </Button>
              )}
            </div>
          ))}
          <div className="item"></div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: calc(100vh + ${props => `${props['data-height']}px`});
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
    margin-bottom: ${Clamp(28, 64, 42)};
    max-width: ${734/16}rem;
  }
  .wrapper {
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
    .item {
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
                      linear-gradient(90deg, #90F4E8, #2DD282) border-box;
          border: 1px solid transparent;
        }
        &::after {
          background: linear-gradient(90deg, #90F4E8, #2DD282);
          opacity: 0;
          transition: opacity .3s;
        }
        &.active::after {
          opacity: 1;
        }
      }
      &:last-child {
        width: calc(100% - (100% / 2.1));
      }
      h3 {
        font-size: ${Clamp(20, 32, 30)};
        margin-bottom: ${Clamp(8, 16, 16)};
        &::before {
          content: "/0" counter(counter);
          display: inline-block;
          width: 2rem;
          font-size: 1rem;
          margin-right: ${Clamp(8, 16, 16)};
        }
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
    .wrapper {
      .item {
        width: calc(100% / 1.1);
        &:last-child {
          width: calc(100% - (100% / 1.1));
        }
      }
    }
  }
  @media (max-width: 499px){
    .wrapper {
      width: 100vw;
      .item {
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