import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../atoms/Button"
import { Label } from "../../moleculas/FormInput"
import { Checkbox } from "../../moleculas/FormCheckbox"
import { emailRegex, phoneRegex } from "../../../constants/regex"

export default function Form({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => console.log(data)
  // TODO: send data to API

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Label
        title='Telefon'
        name='phone'
        register={register('phone', { required: true, pattern: phoneRegex })}
        errors={errors}
      />
      <Label
        title='Email'
        name='mail'
        register={register('mail', { required: true, pattern: emailRegex })}
        errors={errors}
      />
      <Label
        title='Temat rozmowy'
        name='message'
        register={register('message', { required: true, minLength: 3 })}
        errors={errors}
        placeholder='Daj znać, o czym chcesz pogadać :)'
        rows={3}
      />
      <Checkbox
        text='Zgadzam się na <a href="/polityka-prywatnosci">przetwarzanie moich danych</a>'
        name='check'
        register={register('check', { required: true })}
        errors={errors}
      />
      <Button theme="primary">Wyślij wiadomość</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: grid;
  gap: 32px;

  button{
    max-width: 400px;
  }
`