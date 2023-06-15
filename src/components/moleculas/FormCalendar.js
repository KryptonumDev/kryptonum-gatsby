import React, { useMemo, useState } from "react"
import styled from "styled-components"
import { CalendarDateDropdown } from "../atoms/CalendarDateDropdown"
import { CalendarTimeDropdown } from "../atoms/CalendarTimeDropdown"
import { CalendarIcon } from "../atoms/Icons"

export const Calendar = ({ name, errors, register }) => {
  const [openedPopup, setOpenedPopup] = useState(false)
  const [chosenDate, setChosenDate] = useState(null)
  const [chosenTime, setChosenTime] = useState(null)
  const inputValue = useMemo(() => {
    let str = ''
    if (chosenDate && chosenTime) {
      str = chosenDate.format('DD/MM/YYYY') + '  |  ' + chosenTime
    } else if (chosenDate) {
      str = chosenDate.format('DD/MM/YYYY') + '  |  Godzina'
    }

    return str
  }, [chosenDate, chosenTime])
  return (
    <Wrapper>
      <div className="input-wrap">
        <span className="legend">Wybierz datę i godzinę (opcjonalne)</span>
        <input
          {...register('date', { required: true, validate: () => chosenDate && chosenTime })}
          value={inputValue}
          onFocus={() => { openedPopup ? null : setOpenedPopup('date') }}
          onClick={() => { setOpenedPopup('date') }}
          className="input"
          placeholder="26/01/2023  |  Godzina"
        />
        <CalendarIcon />
        <span className="border" />
      </div>
      {openedPopup === 'date' && (
        <CalendarDateDropdown
          chosenDate={chosenDate}
          setChosenDate={setChosenDate}
          setOpenedPopup={setOpenedPopup}
        />
      )}
      {openedPopup === 'time' && (
        <CalendarTimeDropdown
          chosenDate={chosenDate}
          chosenTime={chosenTime}
          setChosenTime={setChosenTime}
          setOpenedPopup={setOpenedPopup}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  .input-wrap{
    position: relative;
    max-width: 520px;

    svg{
      position: absolute;
      right: 16px;
      top: 12px;
    }
  }

  .legend{
    padding: 4px 16px;
    color: var(--neutral-200);
    background: var(--neutral-950);
    position: absolute;
    left: 12px;
    top: 0; 
    transform: translateY(-50%);
  }

  .border{
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 2px;
    background-color: var(--neutral-700);
    transition: background-color .3s var(--easing);

    &::after{
      content: "";
      background: var(--gradient);
      position: absolute;
      inset: 0;
      border-radius: 2px;
      opacity: 0;
      transition: opacity .3s var(--easing);
    }
  }

  .input:hover ~ .border{
    background-color: var(--neutral-300);
  }

  .input.errored ~ .border{
    background-color: #EE6470;
  }

  .input:focus-visible ~ .border::after{
    opacity: 1;
  }

  .input{
    background: var(--neutral-950);
    padding: 12px 16px 14px;
    margin: 2px;
    border: none;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    color: var(--neutral-200);
    font-size: 1.25rem;
    resize: none;

    :focus-visible{
      outline: none;
    }
  }
`