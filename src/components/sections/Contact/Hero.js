import React from "react"
import styled from "styled-components"
import Form from "../../organisms/forms/ContactHero"

export default function Hero ({data}) {
  return (
    <Wrapper>
      <Form/>
      <div>
        
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`