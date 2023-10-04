import React from "react";
import { Link } from "gatsby";
import { ArrowTopRight } from "./Icons";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";

const Button = ({ data, theme = 'secondary', children, to, className, ...props }) => {
  if (data) {
    theme = data.theme;
    to = data.href;
    children = data.text;
  }
  
  const isExternal = to && to.startsWith('https://');
  return (
    <>
      {to ? (
        isExternal ? (
          <StyledAnchor
            as='a'
            className={`cta ${theme}${className ? ` ${className}` : ''}`}
            href={to}
            target="_blank"
            rel="noreferrer"
            {...props}
          >
            <span data-text={theme === 'secondary' ? children : undefined}>{children}</span>
            <ArrowTopRight />
          </StyledAnchor>
        ) : (
          <StyledAnchor
            as={Link}
            className={`cta ${theme}${className ? ` ${className}` : ''}`}
            to={to}
            {...props}
          >
            <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
            <ArrowTopRight />
          </StyledAnchor>
        )
      ) : (
        <StyledAnchor
          as='button'
          className={`cta ${theme}${className ? ` ${className}` : ''}`}
          type="submit"
          {...props}
        >
          <span data-text={theme === 'secondary' ? children : undefined}>{children}</span>
          <ArrowTopRight />
        </StyledAnchor>
      )}
    </>
  )
}

const StyledAnchor = styled.a`
  font-size: ${Clamp(16, 18, 18)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  position: relative;
  gap: 8px;
  svg {
    flex-shrink: 0;
    transition: transform .3s;
  }
  &.primary {
    border-radius: 2px;
    padding: 12px 42px;
    @media (max-width: 499px){
      width: 100%;
      padding: 12px 24px;
    }
    @media (max-width: 349px){
      padding: 12px 12px;
      font-size: 14px;
    }
    background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                var(--gradient) border-box;
    border: 2px solid transparent;
    span {
      color: var(--primary-400);
      background-image: var(--gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &::before, &::after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity .3s;
    }
    &::before {
      box-shadow: 0px 0px 2px #E1FFFA,
                  0px 0px 5px #6DF1DD,
                  0px 0px 25px rgba(55, 193, 131, 0.75);
    }
    &::after {
      box-shadow: 0px 0px 4px #E1FFFA,
                  0px 0px 15px #6DF1DD,
                  0px 0px 25px rgba(55, 193, 131, 0.75);
    }
    &:hover::before,
    &:active::after {
      opacity: 1;
    }
    &:active::before {
      opacity: 0;
    }
  }
  &.secondary {
    text-decoration: underline;
    span {
      position: relative;
      &::before, &::after {
        content: attr(data-text);
        position: absolute;
        left: 0;
        opacity: 0;
        transition: opacity .3s;
      }
      &::before {
        filter: drop-shadow(0px 0px 2px #E1FFFA)
                drop-shadow(0px 0px 8px #6DF1DD)
                drop-shadow(0px 0px 15px rgba(55, 193, 131, 0.5));
      }
      &::after {
        filter: drop-shadow(0px 0px 2px #FFFFFF)
                drop-shadow(0px 0px 6px #E1FFFA)
                drop-shadow(0px 0px 25px #6DF1DD)
                drop-shadow(0px 0px 35px rgba(55, 193, 131, 0.75));
      }
    }
    &:hover span::before,
    &:active span:after {
      opacity: 1;
    }
    &:active span::before {
      opacity: 0;
    }
  }
  &:hover {
    svg {
      transform: translate(3px, -3px);
    }
  }
`
 
export default Button;