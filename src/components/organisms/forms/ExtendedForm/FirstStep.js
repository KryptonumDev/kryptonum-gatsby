import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../../atoms/Button"
import { Label } from "../../../moleculas/FormInput"
import { emailRegex } from "../../../../constants/regex"

export default function FirstStep({ prevData, setData, setStep }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => {
    setData({ ...prevData, 'Cllient': data })
    setStep((step) => step + 1)
  }

  const name = watch("name", false)

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>A <strong>kogo</strong> my tu mamy?</h2>
      <Label
        title='Imię'
        name='name'
        register={register('name', { required: true, minLength: 3 })}
        errors={errors}
      />
      <Label
        title='Email'
        name='e-mail'
        register={register('e-mail', { required: true, pattern: emailRegex })}
        errors={errors}
      />
      <Button>Cześć{name ? `, ${name}` : ''}! Lecimy dalej!</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: grid;
  gap: 32px;

  h2{
    font-size: 2rem;
  }

  button{
    max-width: 400px;
  }
`