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
        inset: -16px;
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
`

export default Testimonials;