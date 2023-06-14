import React from "react"
import styled from "styled-components"

export const Range = ({ left, right, register }) => (
  <Wrapper>
    <span className="left">{left}</span>
    <div className="input-wrap">
      <input {...register} type="range" min={1} defaultValue={4} max={7} />
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

  .right{
    text-align: right;
  }

  .left, .right{
    font-size: 1.25rem;
  }

  .input-wrap{
    position: relative;
    width: 100%;
    height: 10px;

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
  }

    .dots{
      position: absolute;
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
