import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../../atoms/Button"
import { Label } from "../../../moleculas/FormInput"

export default function FifthStep({ prevData, setData, setStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: { ...prevData?.Additional }
  })

  const onSubmit = (data) => {
    setData({ ...prevData, 'Additional': data })
    setStep((step) => step + 1)
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>A może chcesz coś <strong>dodać</strong>?</h2>
      <Label
        rows={3}
        title='Dodatkowe informacje (opcjonalne)'
        name='Additional information'
        register={register('Additional information')}
        errors={errors}
      />
      <Button>Uwierzysz, że to prawie koniec?</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`

  label{
    margin-top: 42px;
    margin-bottom: 40px;
  }
`