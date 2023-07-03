import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../atoms/Button"
import { Label } from "../../moleculas/FormInput"
import { Checkbox } from "../../moleculas/FormCheckbox"
import { emailRegex } from "../../../constants/regex"

const HelpDesk_Form = () => {
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
        title='Imię'
        name='name'
        register={register('name', { required: true })}
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
        text='Zgadzam się na <a href="/pl/polityka-prywatnosci">przetwarzanie moich danych</a>'
        name='check'
        register={register('check', { required: true })}
        errors={errors}
      />
      <Button theme="primary">Wysyłam zapytanie</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: grid;
  gap: 32px;
  button {
    max-width: 400px;
  }
`

export default HelpDesk_Form;