import React from "react"
import styled from "styled-components"
import Form from "../../organisms/forms/ContactHero"
import DecorativeHeading from "../../atoms/DecorativeHeading"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function Hero({ data }) {
  return (
    <Wrapper>
      <div>
        <DecorativeHeading type="h1">Ruszasz na podbój onlajnu?</DecorativeHeading>
        <ReactMarkdown className="main-text">Zgłoś się do nas, by wystartować w dobrym [ kierunku! ]</ReactMarkdown>
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

  form{
    max-width: 520px;
  }

  .main-text{
    margin-top: 32px;
    margin-bottom: 32px;
  }
`