import React from "react"
import styled from "styled-components"
import DecorativeHeading from "../atoms/DecorativeHeading";

export default function Hero() {
  return (
    <Wrapper>
      <DecorativeHeading type="h1">Daj znać, co Ci chodzi po głowie!</DecorativeHeading>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`