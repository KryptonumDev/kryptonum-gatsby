import React from "react"
import styled from "styled-components"
import { Error } from "../atoms/Icons"

export const Checkbox = ({ icon, text, name, register, errors, error }) => (
  <Wrapper className={errors[name] ? 'errored' : ''}>
    <input type="checkbox" {...register} />
    <span className="checkbox" />
    <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
    {icon}
    {error && (
      <>
        {errors[name] && <span className="error"><Error /> {error}</span>}
      </>
    )}
  </Wrapper>
)

const Wrapper = styled.label`
  position: relative;
  display: flex;
  gap: 12px;
  padding: 20px 22px;
  background: var(--neutral-900);
  border: 1px solid var(--neutral-800);
  border-radius: 2px;
  transition: border-color .3s var(--easing);
  cursor: pointer;

  &.errored{
    border-color: #EE6470;
  }

  .error{
    position: absolute;
    left: 0;
    top: -2px;
    transform: translateY(-100%);
    color: #EE6470; 
    font-size: 1rem;
    display: flex;
    gap: 4px;
    align-items: center;
  }

  input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  input:focus-visible ~ .checkbox{
    outline: 2px solid #26D9C3;
    outline-offset: 5px;
  }

  input:checked ~ .checkbox{
    &::after{
      transform: translate(-50%, -50%) scale(1);
    }
  }


  .checkbox{
    border: 2px solid var(--neutral-200);
    width: 30px;
    height: 30px;
    border-radius: 2px;
    position: relative;
    min-width: 30px;

    &::after{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition:  transform .3s var(--easing);
      width: 16px;
      height: 16px;
      border-radius: 2px;
      background-color: var(--neutral-200);
    }
  }
`
