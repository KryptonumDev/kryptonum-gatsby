import React, { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../../atoms/Button"
import { Calendar } from "../../../moleculas/FormCalendar"
import { Checkbox } from "../../../moleculas/FormCheckbox"

export default function SixthStep({ prevData, setData, setStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: { ...prevData?.Date }
  })

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

  const onSubmit = (data) => {
    setData({ ...prevData, 'Date': {...data, 'date': inputValue} })
    setStep((step) => step + 1)
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>To kiedy się <strong>widzimy</strong>? Umów termin calla</h2>

      <Calendar
        chosenDate={chosenDate}
        setChosenDate={setChosenDate}
        chosenTime={chosenTime}
        setChosenTime={setChosenTime}
        inputValue={inputValue}
      />
      <Checkbox
        name='privacy-policy'
        register={register('privacy-policy', { required: true })}
        errors={errors}
      />
      <Button theme="primary">Wyślij formularz?</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`

  h2{
    margin-bottom: 42px;
    font-size: 1.875rem;
  }

  label{
    margin-top: 42px;
    margin-bottom: 40px;
  }
`