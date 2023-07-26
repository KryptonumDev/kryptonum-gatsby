import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Quote } from "../../atoms/Icons";

const Testimonials = ({
  data: {
    testimonials_Heading,
    testimonials_List
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{testimonials_Heading}</DecorativeHeading>
      <p className="noMouseText">
        <HandClick />
        <span>Dotknij, aby zobaczyć</span>
      </p>
      <div className="wrapper">
        {testimonials_List.map((item, i) => (
          <div className="item" key={i} tabIndex="0">
            <Quote />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  overflow: hidden;
  margin: 0 calc(var(--pageMargin) * -1);
  padding: var(--pageMargin);
  h2 {
    margin-bottom: ${Clamp(28, 48, 72, 'px')};
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 48px 32px;
    font-size: ${Clamp(16, 22, 22)};
    svg {
      margin-bottom: 12px;
    }
    .item {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        inset: -22px;
        backdrop-filter: blur(4px);
        pointer-events: none;
        transition: opacity .3s;
        opacity: 1;
      }
      &:hover::before,
      &:focus-visible::before {
        opacity: 0;
      }
      &:hover,
      &:focus-visible {
        z-index: 1;
      }
      &:nth-child(1) { transform: rotate(-4deg) }
      &:nth-child(2) { transform: rotate(7deg) }
      &:nth-child(3) { transform: rotate(-3deg) }
      &:nth-child(4) { transform: rotate(8deg) }
      &:nth-child(5) { transform: rotate(-6deg) }
      &:nth-child(6) { transform: rotate(7deg) }
    }
  }
  @media (max-width: 999px){
    .wrapper {
      grid-template-columns: 1fr;
      gap: 48px;
      .item {
        max-width: 500px;
        &:nth-child(even) {
          margin-left: auto;
        }
        &:nth-child(1) { transform: rotate(-8deg) }
        &:nth-child(2) { transform: rotate(7deg) }
        &:nth-child(3) { transform: rotate(8deg) }
        &:nth-child(4) { transform: rotate(-6deg) }
        &:nth-child(5) { transform: rotate(6deg) }
        &:nth-child(6) { transform: rotate(-3deg) }
      }
    }
  }
  .noMouseText {
    margin-bottom: ${Clamp(28, 48, 48, 'px')};
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media (pointer: fine) {
    .noMouseText {
      display: none;
    }
  }
`

const HandClick = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' fill='none'>
    <path
      stroke='#EFF0F3'
      strokeWidth='2'
      d='M16.498 10.048h-1.572s-.572-3.445-1.072-5.222c-.5-1.778-.925-2.778-2.428-2.778-1.504 0-1.934 1.244-1.934 2.778l.584 8.555-3.24-.94s-2.233-.32-3.026.94l-.384 1.567 6.65 5.944c.403.422 1.356.656 1.934.656h6.236c1.067 0 1.972-.778 2.146-1.856l.534-5.644c.477-2.791-2.216-4-4.428-4z'
    ></path>
  </svg>
)

export default Testimonials;