import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../atoms/Button"
import { Label } from "../../moleculas/FormInput"
import { Checkbox } from "../../moleculas/FormCheckbox"
import { emailRegex } from "../../../constants/regex"
import { AnimatePresence, motion } from "framer-motion"
import { Clamp } from "../../../utils/functions"

const FaqContact = ({ cta }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [submitProccessing, setSubmitProccessing] = useState(false)

  const onSubmit = (data) => {
    setSubmitProccessing(true)
    fetch('/api/faq-contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          reset()
          setIsEmailSent('success')
          setSubmitProccessing(false)
        } else {
          setIsEmailSent('failed')
          setSubmitProccessing(false)
        }
      })
      .catch(() => {
        setIsEmailSent('failed')
      })
  }

  return (
    <Wrapper className="form" onSubmit={handleSubmit(onSubmit)}>
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
        name='check'
        register={register('check', { required: true })}
        errors={errors}
      />
      <Button theme="primary">{cta || 'Wyślij wiadomość'}</Button>
      <AnimatePresence>
        {isEmailSent === 'success' && (
          <Overlay className="overlay" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
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
          <Overlay className="overlay" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
            <div className="grid">
              <h2>
                <strong>Błąd</strong> serwera!
              </h2>
              <p>
                Spróbuj ponownie później lub skontaktuj się z nami <strong>telefonicznie</strong>.
              </p>
              <Button disabled={submitProccessing} type='button' theme="secondary" onClick={() => setIsEmailSent(false)}>Spróbuj ponownie</Button>
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
  max-width: 500px;
`

const Overlay = styled(motion.div)`
  position: absolute;
  z-index: 4;
  inset: -2px;
  border-radius: 4px;
  background: var(--neutral-900, #101012);
  padding: ${Clamp(24, 48, 64)} ${Clamp(16, 64, 64)};
  display: grid;
  .grid {
    margin: auto;
    h2 {
      margin-bottom: 16px;
    }
    p {
      font-size: ${Clamp(20, 22, 22)};
    }
    button{
      margin-top: 64px;
      margin-left: 0;
      width: fit-content;
    }
  }
`

export default FaqContact;