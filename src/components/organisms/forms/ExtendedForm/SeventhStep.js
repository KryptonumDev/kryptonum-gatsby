import React from "react";
import styled from "styled-components";

export default function SeventhStep({ name, time }) {
  return (
    <Wrapper>
      <h2>
        Formularz został <strong>wysłany</strong>! Spodziewaj się od nas maila
      </h2>
      <p>
        {name}, było super! Powtórzymy to kiedyś?
      </p>
      <p>
        A w ogóle to dobra robota! Całość zajęła Ci {time}! Przybij pionę!
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 32px;
  
  h2{
    font-size: 1.875rem;
    max-width: 640px;
  }

  p{
    font-size: 1.375rem;
    max-width: 520px;
  }
`