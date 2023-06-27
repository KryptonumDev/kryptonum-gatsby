import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp, scrollLock } from "../../utils/functions";
import { ScrollDown } from "../atoms/Icons";

export default function Hero({setStep}) {

  useEffect(() => {
    const handleScroll = (e) => {
      setStep(1)
    };
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <Wrapper >
      <div className="sticky">
        <div className="grid">
          <div>
            <DecorativeHeading type="h1">Daj znać, co Ci chodzi po głowie!</DecorativeHeading>
            <p className="left">Ruszasz na podbój kosmosu onlajnu? Przyda Ci się solidne [ wsparcie ] z ziemi!</p>
          </div>
          <div>
            <p className="top">Podziel się z nami swoimi zamiarami, a my odwdzięczymy się wstępną wyceną i [ planem działań ].</p>
            <p className="bot">Całość nie zajmie Ci dłużej niż 4 minuty 17 sekund. Słowo!</p>
          </div>
        </div>
        <div className="scroll">
          <p>[ Scrolluj ], by przejść do formularza</p>
          <ScrollDown />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${Clamp(64, 128, 172, "px")};

  .sticky{
    position: sticky;
    top: 200px;
    padding-bottom: 64px;
  }

  .scroll{
    text-align: center;
    margin: 64px auto 0 auto;
    width: 350px;
    font-size: 22px;

    p{
      margin-bottom: 16px;
    }
  }

  .grid{
    display: grid;
    grid-template-columns: 740fr 520fr;
    align-items: flex-end;
    gap: 32px;
  }

  .left{
    font-size: ${Clamp(16, 22, 30)};
    margin-top: 32px;
  }

  .top{
    font-size: ${Clamp(16, 22, 22)};
  }

  .bot{
    font-size: ${Clamp(20, 30, 30)};
    margin-top: 16px;
  }
`