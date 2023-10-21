import React from "react"
import styled from "styled-components"
import { Clamp } from "../../utils/functions"

export const Radio = ({ className, title, register }) => (
  <Wrapper className={className}>
    <input type="radio" {...register} value={title} id={title} />
    <span className="radio" />
    <p>{title}</p>
  </Wrapper>
)

const Wrapper = styled.label`
  padding: 16px ${Clamp(8, 16, 20, 'px')};
  background: var(--neutral-900);
  border: 1px solid var(--neutral-800);
  border-radius: 2px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  position: relative;
  align-items: center;
  transition: border-color .3s var(--easing);
  cursor: pointer;

  &.errored{
    border-color: #EE6470;
  }

  input{
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  input:checked ~ .radio::after{
    transform: translate(-50%, -50%) scale(1);
  }

  .radio{
    width: ${Clamp(24, 24, 34, 'px')};
    height: ${Clamp(24, 24, 34, 'px')};
    border: 2px solid #EFF0F3;
    border-radius: 50%;
    position: relative;
    &::after{
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 62%;
      height: 62%;
      border-radius: 50%;
      background: #EFF0F3;
      transition: transform .3s var(--easing);
    }
  }
`
