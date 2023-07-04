import React from "react"
import styled from "styled-components";
import LatestBlogEntries from "./LatestBlogEntries";
import { Clamp } from "../../utils/functions";

export default function   Summary({ name, endTime }) {
  return (
    <Wrapper>
      <div className="text-part">
        <h2>
          Formularz został <strong>wysłany</strong>! Spodziewaj się od nas maila
        </h2>
        <p>
          {name}, było super! Powtórzymy to kiedyś?
        </p>
        <p>
          A w ogóle to dobra robota! Całość zajęła Ci {endTime}! Przybij pionę!
        </p>
      </div>
      <LatestBlogEntries heading={'Chcesz zobaczyć, co u nas?'} />
    </Wrapper>
  )
}

const Wrapper = styled.section`

  .text-part{
    display: grid;
    gap: 32px;
    padding-left: 110px;
    margin: 80px auto 76px auto;
    width: fit-content;

    @media (max-width: 999px) {
      padding-left: 0;
      margin: 0 0 80px 0;
    }
  }
  
  h2{
    font-size: ${Clamp(28, 30, 30)};
    max-width: 640px;
  }

  p{
    font-size: ${Clamp(16, 22, 22)};
    max-width: 520px;
  }
`