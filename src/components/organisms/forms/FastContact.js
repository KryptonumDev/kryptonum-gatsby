import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../atoms/Button"
import { Label } from "../../moleculas/FormInput"
import { Checkbox } from "../../moleculas/FormCheckbox"
import { emailRegex, phoneRegex } from "../../../constants/regex"
import { AnimatePresence, motion } from "framer-motion"
import { Clamp } from "../../../utils/functions"

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const [isEmailSent, setIsEmailSent] = useState(false)

  const onSubmit = (data) => {
    fetch('/api/fast-contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => {
      reset()
      setIsEmailSent('success')
    }).catch(() => {
      setIsEmailSent('failed')
    })
  }

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
        text='Zgadzam się na <a href="/pl/polityka-prywatnosci">przetwarzanie moich danych</a>'
        name='check'
        register={register('check', { required: true })}
        errors={errors}
      />
      <Button theme="primary">Wyślij wiadomość</Button>
      <AnimatePresence>
        {isEmailSent === 'success' && (
          <Overlay initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
            <div className="grid">
              <h2>Formularz został <strong>wysłany</strong>!</h2>
              <p>Spodziewaj się od nas odpowiedzi do <strong>24 h!</strong></p>
              <Button type='button' theme="secondary" onClick={() => setIsEmailSent(false)}>Wypełnij ponownie</Button>
            </div>
          </Overlay>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEmailSent === 'failed' && (
          <Overlay initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
            <div className="grid">
              <h2>
                <strong>Błąd</strong> serwera!
              </h2>
              <p>
                Spróbuj ponownie później lub skontaktuj się z nami <strong>telefonicznie</strong>.
              </p>
              <Button type='button' theme="secondary" onClick={() => setIsEmailSent(false)}>Spróbuj ponownie</Button>
            </div>
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  position: relative;
  display: grid;
  gap: 32px;
  button {
    max-width: 400px;
  }
`

const Overlay = styled(motion.div)`
  position: absolute;
  z-index: 2;
  inset: -2px;
  /* pointer-events: none;
  opacity: 0; */
  border-radius: 4px;
  background: var(--neutral-900, #101012);
  padding: 8px 64px;
  display: grid;
  align-items: center;

  .grid{
    display: grid;
    gap: 32px;
    height: fit-content;

    p{
      font-size: ${Clamp(20, 32, 32, 'rem')};
    }
  }

  button{
    margin-top: 64px;
    margin-left: 0;
    width: fit-content;
  }
`