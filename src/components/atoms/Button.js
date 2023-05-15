import React from "react";
import { Link } from "gatsby";
import { ArrowTopRight } from "./Icons";

const Button = ({theme = 'secondary', children, to, className, ...props}) => {
  const isExternal = to && to.startsWith('https://');
  return (
    <>
      {to ? (
        isExternal ? (
          <a
            className={`cta ${theme}${className ? ` ${className}` : ''}`}
            href={to}
            {...props}
          >
            <span data-text={theme === 'secondary' ? children : undefined}>{children}</span>
            <ArrowTopRight />
          </a>
        ) : (
          <Link
            className={`cta ${theme}${className ? ` ${className}` : ''}`}
            to={to}
            {...props}
          >
            <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
            <ArrowTopRight />
          </Link>
        )
      ) : (
        <button
          className={`cta primary${className ? ` ${className}` : ''}`}
          type="submit"
          {...props}
        >
          <span>{children}</span>
          <ArrowTopRight />
        </button>
      )}
    </>
  )
}
 
export default Button;