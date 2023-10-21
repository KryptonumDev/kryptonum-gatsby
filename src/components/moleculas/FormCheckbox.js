import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Error } from "../atoms/Icons"
import { Clamp } from "../../utils/functions"

export const Checkbox = ({ icon, text, name, register, errors, error }) => (
  <Wrapper className={errors[name] ? 'errored' : ''}>
    <input type="checkbox" {...register} />
    <span className="checkbox" />
    {text ? (
      <p dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
      <p>Zgadzam się na <Link to="/pl/polityka-prywatnosci">przetwarzanie moich danych</Link></p>
    )}
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
  padding: 16px ${Clamp(8, 16, 20, 'px')};
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
  p {
    margin-top: 2px;
    a {
      text-decoration: underline;
    }
  }
  .checkbox{
    border: 2px solid var(--neutral-200);
    width: ${Clamp(28, 28, 32, 'px')};
    height: ${Clamp(28, 28, 32, 'px')};
    border-radius: 2px;
    position: relative;
    flex-shrink: 0;
    &::after{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition:  transform .3s var(--easing);
      width: 62%;
      height: 62%;
      border-radius: 1px;
      background-color: var(--neutral-200);
    }
  }
`
