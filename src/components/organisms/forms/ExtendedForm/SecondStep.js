import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../../atoms/Button"
import { Label } from "../../../moleculas/FormInput"
import { Radio } from "../../../moleculas/FormRadio"
import { SmallError, Plus } from "../../../atoms/Icons"
import { AnimatePresence, motion } from "framer-motion"
import { Clamp } from "../../../../utils/functions"

export default function SecondStep({ prevData, setData, setStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: { ...prevData?.Brand }
  })

  const onSubmit = (data) => {
    setData({
      ...prevData,
      'Brand': (() => {
        // iterate over data and remove empty values
        let a = {}
        Object.keys(data).forEach((el) => {
          if (data[el]) a[el] = data[el]
        })
        return a
      })()
    })
    setStep((step) => step + 1)
  }

  const [links, setLinks] = useState(() => {
    let a = [{}]
    // open link for each link in prevData
    if (prevData?.Brand) {
      Object.keys(prevData?.Brand).forEach((el, index) => {
        if (index > 1) {
          a.push({})
        }
      })
    }
    return a
  })

  const addMoreLinks = () => {
    setLinks([...links, {}])
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>Gdzie dzisiaj jest <strong>Twoja marka?</strong></h2>
      <div className="radio-group">
        {errors.experience && <span className='error'><SmallError /> Proszę wybrać jedną z opcji</span>}
        <Radio className={errors.experience ? 'errored' : ''} title='Dopiero na starcie' register={register('experience', { required: true })} />
        <Radio className={errors.experience ? 'errored' : ''} title='Trochę już przeszła' register={register('experience', { required: true })} />
      </div>
      <h2>Podziel się linkami, chętnie zajrzymy</h2>
      <Label
        title='Link (opcjonalne)'
        name={'additional link № 1'}
        register={register('additional link № 1')}
        errors={errors}
      />
      <AnimatePresence mode="wait">
        {links?.slice(1)?.map((_, index) => (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={index}>
            <Label
              title='Link (opcjonalne)'
              name={'additional link №' + (2 + index)}
              register={register('additional link №' + (2 + index))}
              errors={errors}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {links?.length < 5 && (
          <AddMoreLinks initial={{ opacity: 1 }} exit={{ opacity: 0 }} type="button" onClick={addMoreLinks}>
            <Plus />
            <span>Dodaj więcej linków</span>
          </AddMoreLinks>
        )}
      </AnimatePresence>
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

  .radio-group {
    display: grid;
    gap: 12px ${Clamp(12, 20, 20, 'px')};
    @media (min-width: 500px){
      grid-template-columns: 1fr 1fr;
    }
    max-width: 740px;
    width: 100%;
    margin-bottom: 32px;
    position: relative;

    .error{
      position: absolute;
      right: 0;
      top: -6px;
      transform: translateY(-100%);
      color: #EE6470; 
      font-size: 1rem;
      display: flex;
      gap: 4px;
      align-items: center;
    }
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

const AddMoreLinks = styled(motion.button)`
  margin-top: 12px;
  gap: 6px;
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`