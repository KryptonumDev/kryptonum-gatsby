import React from "react"
import styled from "styled-components"

export const Range = ({ left, right, register }) => (
  <Wrapper>
    <span className="left">{left}</span>
    <div className="input-wrap">
      <input {...register} type="range" min={'1'} defaultValue={'4'} max={'7'} />
      <div className="dots">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
    <span className="right">{right}</span>
  </Wrapper>
)

const Wrapper = styled.label`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 158px 1fr 158px;
  gap: 12px;
  margin-top: 18px;
  padding: 8px 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    grid-template-areas: 
    'left right'
    'input input';
  }

  .right{
    text-align: right;
    @media (max-width: 1024px){
      grid-area: right;
    }
  }

  .left{
    @media (max-width: 1024px){
      grid-area: left;
    }
  }

  .left, .right{
    font-size: 1.25rem;
  }

  .input-wrap{
    position: relative;
    width: 100%;
    height: 10px;

    @media (max-width: 1024px){
      grid-area: input;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    input{
      position: absolute;
      inset: 0;
      background: transparent;
      border-radius: 15px;
      width: 100%;
      height: 10px;
      -webkit-appearance: none;
      appearance: none;
      background: var(--neutral-800);
      cursor: pointer;

      &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 28px;
          width: 28px;
          border-radius: 64px;
          background: var(--neutral-200, #EFF0F3);
          cursor: pointer;
          z-index: 2;
          position: relative;
      }

      &::-moz-range-thumb {
          height: 28px;
          width: 28px;
          border-radius: 64px;
          background: var(--neutral-200, #EFF0F3);
          cursor: pointer;
          z-index: 2;
          position: relative;
      }

      &::-ms-thumb {
          height: 28px;
          width: 28px;
          border-radius: 64px;
          background: var(--neutral-200, #EFF0F3);
          cursor: pointer;
          z-index: 2;
          position: relative;
      }
    }

    .dots{
      position: absolute;
      z-index: 0;
      display: flex;
      justify-content: space-between;
      left: 5px;
      right: 5px;
      top: 50%;
      pointer-events: none;
      transform: translateY(-50%);
    }

    span{
      background: var(--neutral-700);
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
  }
`
