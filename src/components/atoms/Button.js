import React from "react";
import { Link } from "gatsby";
import { ArrowTopRight } from "./Icons";

const Button = ({text, to, theme, className, ...props}) => {
  !theme && (theme = 'secondary');
  return (
    <Link
      className={`${className} cta ${theme}`}
      to={to}
      {...props}
    >
      <span
        data-text={theme === "secondary" ? text : undefined}
      >{text}</span>
      <ArrowTopRight />
    </Link>
  )
}
 
export default Button;