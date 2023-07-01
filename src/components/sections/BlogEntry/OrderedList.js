import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";

const locationPath = typeof window !== 'undefined' ? window.location.pathname : '';

const OrderedList = ({ data }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const items = list.querySelectorAll('li');

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      items.forEach(item => {
        const { top } = item.getBoundingClientRect();
        if(top <= windowHeight * .66) {
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
      {data.map((item, i) => (
        <li key={i}>
          <p>{item.title}</p>
          <span>{item.description}</span>
        </li>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ol`
  counter-reset: counter;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px !important;
  li {
    counter-increment: counter;
    font-size: ${Clamp(16, 22, 22)};
    p {
      display: grid;
      grid-template-columns: 54px 1fr;
      gap: 16px;
      align-items: center;
      &::before {
        content: counter(counter);
        background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                    var(--gradient) border-box;
        border: 1px solid var(--neutral-800);
        transition: border-color .3s .1s;
        border-radius: 50%;
        width: 54px;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    span {
      display: block;
      padding-left: 70px;
    }
    &:nth-child(-n+9) p::before {
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
        transition: transform .3s 0s;
        transform-origin: top;
      }
    }
    &.active {
      p {
        &::before {
          border-color: transparent;
          transition-delay: 0s;
        }
      }
      &::after {
        transform: scaleY(1);
        transition-delay: .1s;
      }
    }
  }

`

export default OrderedList;