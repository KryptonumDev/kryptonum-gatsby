import React from "react"
import styled from "styled-components"

export const Radio = ({ defaultChecked, title, register }) => (
  <Wrapper>
    <input type="radio" {...register} value={title} id={title} defaultChecked={defaultChecked}/>
    <span className="radio" />
    <p>{title}</p>
  </Wrapper>
)

const Wrapper = styled.label`
  padding: 12px 20px 14px;
  background: var(--neutral-900);
  border: 1px solid var(--neutral-800);
  border-radius: 2px;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  position: relative;
  align-items: center;

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
    width: 40px;
    height: 40px;
    border: 2px solid #EFF0F3;
    border-radius: 50%;
    position: relative;

    &::after{
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #EFF0F3;
      transition: transform .3s var(--easing);
    }
  }
`
