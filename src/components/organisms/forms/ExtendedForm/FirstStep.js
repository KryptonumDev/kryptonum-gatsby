import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Label } from "../../../moleculas/FormInput"
import { emailRegex } from "../../../../constants/regex"
import Button from "../../../atoms/Button"

export default function FirstStep({ prevData, setData, setStep }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: prevData?.Client?.name || '',
      'e-mail': prevData?.Client?.['e-mail'] || '',
    }
  })

  const onSubmit = (data) => {
    setData({ ...prevData, 'Client': data })
    setStep((step) => step + 1)
  }

  const name = watch("name")

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
      <Button className='nav-cta'>{`Cześć${name ? `, ${name}` : ''}! Lecimy dalej!`}</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: grid;
  gap: 32px;

  button{
    justify-content: flex-start;
  }

  h2{
    font-size: 2rem;
  }

  button{
    max-width: 400px;
  }
`