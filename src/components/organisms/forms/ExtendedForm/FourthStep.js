import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../../atoms/Button"
import { Radio } from "../../../moleculas/FormRadio"
import { Clamp } from "../../../../utils/functions"

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
      <h2>Szanujemy <strong>deadline&apos;y</strong>. Jaki jest Twój? (opcjonalne)</h2>
      <div className="radio-group">
        <Radio title='3-4 tyg.' register={register('deadline')} />
        <Radio title='1-3 mies.' register={register('deadline')} />
        <Radio title='3-6 mies.' register={register('deadline')} />
        <Radio title='6+ mies.' register={register('deadline')} />
      </div>
      <h2>Budżet ważna rzecz. Pokaż, w jakim zakresie się <strong>spotkamy</strong>: (opcjonalne)</h2>
      <div className="radio-group">
        <Radio title='20-34 tys. zł' register={register('budget')} />
        <Radio title='40-54 tys. zł' register={register('budget')} />
        <Radio title='50-64 tys. zł' register={register('budget')} />
        <Radio title='75 tys. + zł' register={register('budget')} />
      </div>
      <Button>Whoa, jesteś już za półmetkiem!</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  h2{
    margin-bottom: 24px;
    font-size: ${Clamp(24, 32, 48)};
  }

  .radio-group{
    display: grid;
    gap: 12px ${Clamp(12, 20, 20, 'px')};
    margin-bottom: 40px;
    @media (min-width: 500px){
      grid-template-columns: 1fr 1fr;
    }
  }
`