import React from "react"
import styled from "styled-components"
import { Error } from "../atoms/Icons"

export const Label = ({ rows, placeholder, title, name, register, errors, error = 'To pole jest wymagane' }) => (
  <Wrapper>
    <span className="legend">{title}</span>
    {rows
      ? <textarea rows={rows} placeholder={placeholder} className={errors[name] ? 'errored input' : 'input'} {...register} />
      : <input placeholder={placeholder} className={errors[name] ? 'errored input' : 'input'} {...register} />}
    <span className="border" />
    {errors[name] && <span className="error"><Error /> {error}</span>}
  </Wrapper>
)

const Wrapper = styled.label`
  position: relative;
  display: flex;
  margin-top: 18px;

  .error{
    position: absolute;
    right: 0;
    top: -10px;
    transform: translateY(-100%);
    color: #EE6470; 
    font-size: 1rem;
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .legend{
    padding: 4px 16px;
    color: var(--neutral-200);
    background: var(--neutral-950);
    position: absolute;
    left: 12px;
    top: 0; 
    transform: translateY(-50%);
  }

  .border{
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 2px;
    background-color: var(--neutral-700);
    transition: background-color .3s var(--easing);

    &::after{
      content: "";
      background: var(--gradient);
      position: absolute;
      inset: 0;
      border-radius: 2px;
      opacity: 0;
      transition: opacity .3s var(--easing);
    }
  }

  .input:hover ~ .border{
    background-color: var(--neutral-300);
  }

  .input.errored ~ .border{
    background-color: #EE6470;
  }

  .input:focus-visible ~ .border::after{
    opacity: 1;
  }

  .input{
    background: var(--neutral-950);
    padding: 12px 16px 14px;
    margin: 2px;
    border: none;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    color: var(--neutral-200);
    font-size: 1.25rem;
    resize: none;

    :focus-visible{
      outline: none;
    }
  }
`
