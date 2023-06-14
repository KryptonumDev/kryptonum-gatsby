import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../../atoms/Button"
import { Label } from "../../../moleculas/FormInput"
import { Radio } from "../../../moleculas/FormRadio"
import { Plus } from "../../../atoms/Icons"

export default function SecondStep({ prevData, setData, setStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => {
    setData({ ...prevData, 'Brand': data })
    setStep((step) => step + 1)
  }

  const [links, setLinks] = useState([{}])

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>Gdzie dzisiaj jest <strong>Twoja marka?</strong></h2>
      <div className="radio-group">
        <Radio title='Dopiero na starcie' register={register('experience')} defaultChecked={true}/>
        <Radio title='Trochę już przeszła' register={register('experience')} />
      </div>
      <h2>Podziel się linkami, chętnie zajrzymy</h2>
      {links.map((el, index) => (
        <Label
          title='Link (opcjonalne)'
          name={'additional link №' + (1 + index)}
          register={register('additional link №' + (1 + index))}
          errors={errors}
        />
      ))}
      <AddMoreLinks type="button" onClick={() => { (setLinks([...links, {}])) }}>
        <Plus />
        <span>Dodaj więcej linków</span>
      </AddMoreLinks>
      <hr className="divider" />
      <h2 className="area">Chcesz coś dorzucić?</h2>
      <Label
        title='Dodatkowe informacje (opcjonalne)'
        name='additional info'
        register={register('additional info')}
        errors={errors}
        placeholder='Daj znać, o czym chcesz pogadać :)'
        rows={3}
      />
      <Button className='submit'>Czas na konkrety!</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`

  h2{
    font-size: 2rem;
    margin-bottom: 24px;

    &.area{
      margin-bottom: 42px;
    }
  }

  button{
    max-width: 400px;
  }

  .radio-group{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: 740px;
    width: 100%;
    margin-bottom: 32px;
  }

  .divider{
    border-color: #212123;
    margin-top: 28px;
    margin-bottom: 40px;
  }

  .submit{
    margin-top: 40px;
  }
`

const AddMoreLinks = styled.button`
  margin-top: 12px;
  gap: 6px;
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`