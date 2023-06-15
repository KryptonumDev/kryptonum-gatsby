import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../../atoms/Button"
import { Radio } from "../../../moleculas/FormRadio"

export default function FourthStep({ prevData, setData, setStep }) {
  const {
    register,
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {...prevData['Deadline & Budget'] }
  })

  const onSubmit = (data) => {
    setData({ ...prevData, 'Deadline & Budget': data })
    setStep((step) => step + 1)
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>Szanujemy <strong>deadline'y</strong>. Jaki jest Twój? (opcjonalne)</h2>
      <div className="radio-group">
        <Radio title='3-4 tyg.' register={register('deadline')} />
        <Radio title='1-3 mies.' register={register('deadline')} />
        <Radio title='3-6 mies.' register={register('deadline')} />
        <Radio title='6+ mies.' register={register('deadline')} />
      </div>
      <h2>Budżet ważna rzecz. Pokaż, w jakim zakresie się <strong>spotkamy</strong>: (opcjonalne)</h2>
      <div className="radio-group">
        <Radio title='14–26 tys. zł' register={register('budget')} />
        <Radio title='26–32 tys. zł' register={register('budget')} />
        <Radio title='32–50 tys. zł' register={register('budget')} />
        <Radio title='50 tys.+ zł' register={register('budget')} />
      </div>
      <Button>Whoa, jesteś już za półmetkiem!</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  h2{
    margin-bottom: 24px;
  }

  .radio-group{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }
`