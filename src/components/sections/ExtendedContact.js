import React, { useEffect } from "react"
import styled from "styled-components"
import FirstStep from "../organisms/forms/ExtendedForm/FirstStep"
import SecondStep from "../organisms/forms/ExtendedForm/SecondStep"
import ThirdStep from "../organisms/forms/ExtendedForm/ThirdStep"
import FourthStep from "../organisms/forms/ExtendedForm/FourthStep"
import FifthStep from "../organisms/forms/ExtendedForm/FifrthStep"
import SixthStep from "../organisms/forms/ExtendedForm/SixthStep"
import { AnimatePresence, motion } from "framer-motion"
import { Prev } from "../atoms/Icons"
import Navigation from "../organisms/forms/ExtendedForm/Navigation"

const StepWrap = ({ id, children }) => (
  <motion.div key={id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
    {children}
  </motion.div>
)

const ButtonText = ({ id, children }) => (
  <motion.span key={id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
    <Prev /> {children}
  </motion.span>
)

export default function Kontakt({ step, setStep, formData, setFormData, endTime }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step])

  return (
    <Wrapper>
      <div className="nav">
        <Navigation step={step} setStep={setStep} />
      </div>
      <div className="left-wrap">
        <AnimatePresence mode='wait'>
          {step > 1 && (
            <motion.button initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} onClick={() => { setStep((step) => step - 1) }}>
              <AnimatePresence mode='wait'>
                {step === 2 && (
                  <ButtonText id='2'>Poznajmy się!</ButtonText>
                )}
                {step === 3 && (
                  <ButtonText id='3'>Twoja marka</ButtonText>
                )}
                {step === 4 && (
                  <ButtonText id='4'>Potrzeba</ButtonText>
                )}
                {step === 5 && (
                  <ButtonText id='5'>Czas i budżet</ButtonText>
                )}
                {step > 5 && (
                  <ButtonText id='6'>Informacje</ButtonText>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className="right-wrap">
        <AnimatePresence mode='wait'>
          {step === 1 && (
            <StepWrap id='1'>
              <FirstStep
                setData={setFormData}
                prevData={formData}
                setStep={setStep}
              />
            </StepWrap>
          )}
          {step === 2 && (
            <StepWrap id='2'>
              <SecondStep
                setData={setFormData}
                prevData={formData}
                setStep={setStep}
              />
            </StepWrap>
          )}
          {step === 3 && (
            <StepWrap id='3'>
              <ThirdStep
                setData={setFormData}
                prevData={formData}
                setStep={setStep}
              />
            </StepWrap>
          )}
          {step === 4 && (
            <StepWrap id='4'>
              <FourthStep
                setData={setFormData}
                prevData={formData}
                setStep={setStep}
              />
            </StepWrap>
          )}
          {step === 5 && (
            <StepWrap id='5'>
              <FifthStep
                setData={setFormData}
                prevData={formData}
                setStep={setStep}
              />
            </StepWrap>
          )}
          {step > 5 && (
            <StepWrap id='6'>
              <SixthStep
                setData={setFormData}
                prevData={formData}
                setStep={setStep}
              />
            </StepWrap>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 40px 32px;
  grid-template-columns: clamp(240px, calc(240vw/10.24), 300px) 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: 
  'nav nav'
  'left right';
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 920px) {
    gap: 24px;
    grid-template-areas: 
    'nav right'
    'left right';
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-areas:
    'left'
    'nav'
    'right';
  }

  button{
    max-width: unset;
    width: fit-content;
  }
  label{
    max-width: 520px;
  }

  .nav{
    grid-area: nav;
  }
  .left-wrap{
    grid-area: left;
  }
  .right-wrap{
    grid-area: right;
  }    
`