import React from "react"
import styled from "styled-components"
import Form from "../../organisms/forms/ContactHero"
import DecorativeHeading from "../../atoms/DecorativeHeading"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function Hero({ heading, subheading }) {
  return (
    <Wrapper>
      <div>
        <DecorativeHeading>{heading}</DecorativeHeading>
        <ReactMarkdown className="subheading">{subheading}</ReactMarkdown>
        <Form />
      </div>
      <div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  form {
    max-width: 520px;
  }
  .subheading {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`