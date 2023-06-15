import React from "react"
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

  const onSubmit = (data) => {
    setData({ ...prevData, 'Date': data })
    setStep((step) => step + 1)
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>To kiedy się <strong>widzimy</strong>? Umów termin calla</h2>

      <Calendar
        name='date'
        register={register('date')}
        errors={errors}
      />

      <Checkbox
        text='Zgadzam się na <a href="/polityka-prywatnosci">przetwarzanie moich danych</a>'
        name='privacy-policy'
        register={register('privacy-policy', { required: true })}
        errors={errors}
      />
      <Checkbox
        text='Zapisuję się do newslettera'
        name='newsletter'
        register={register('newsletter')}
        errors={errors}
      />
      <Button>Wyślij formularz?</Button>
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