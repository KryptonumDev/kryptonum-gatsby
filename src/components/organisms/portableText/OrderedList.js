import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const locationPath = typeof window !== 'undefined' ? window.location.pathname : '';

const OrderedList = ({ paragraph, array }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const items = list.querySelectorAll('li');

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      items.forEach(item => {
        const { top } = item.getBoundingClientRect();
        if(top <= windowHeight * .5) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
  }, [locationPath])

  return (
    <Wrapper className="orderedList" ref={listRef}>
      {paragraph && (
        <ReactMarkdown className="paragraph">{paragraph}</ReactMarkdown>
      )}
      {array.map((item, i) => (
        <li key={i}>
          <p className="title">{item.title}</p>
          <p className="description">{item.description}</p>
        </li>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ol`
  border: 1px solid var(--neutral-800);
  padding: 32px ${Clamp(16, 32, 32, 'px')};
  counter-reset: counter;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px !important;
  li {
    counter-increment: counter;
    font-size: ${Clamp(16, 22, 22)};
    .title {
      display: grid;
      grid-template-columns: 54px 1fr;
      gap: ${Clamp(8, 16, 16, 'px')};
      align-items: center;
      margin-bottom: 8px;
      &::before {
        content: counter(counter);
        background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                    var(--gradient) border-box;
        border: 1px solid var(--neutral-800);
        transition: border-color .2s .1s;
        border-radius: 50%;
        width: 54px;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .description {
      margin: 0;
      padding-left: ${Clamp(8+54, 16+54, 16+54, 'px')};
    }
    &:nth-child(-n+9) .title::before {
      content: "0" counter(counter);
    }
    position: relative;
    &:not(:last-child) {
      &::before, &::after {
        content: '';
        width: 4px;
        height: calc(100% + 24px);
        position: absolute;
        left: 25px;
        top: 0;
        z-index: -1;
      }
      &::before {
        background-color: var(--neutral-800);
      }
      &::after {
        background: var(--gradient);
        transform: scaleY(0);
        transition: transform .5s var(--easing);
        transform-origin: top;
      }
    }
    &.active {
      .title::before {
        border-color: transparent;
        transition-delay: 0s;
      }
      &:not(:last-of-type) {
        &::after {
          transform: scaleY(1);
        }
      }
    }
  }

`

export default OrderedList;