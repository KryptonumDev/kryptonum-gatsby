import React, { useMemo, useState } from "react"
import styled from "styled-components"
import FirstStep from "../organisms/forms/ExtendedForm/FirstStep"
import SecondStep from "../organisms/forms/ExtendedForm/SecondStep"
import ThirdStep from "../organisms/forms/ExtendedForm/ThirdStep"
import FourthStep from "../organisms/forms/ExtendedForm/FourthStep"
import FifthStep from "../organisms/forms/ExtendedForm/FifrthStep"
import SixthStep from "../organisms/forms/ExtendedForm/SixthStep"
import { AnimatePresence, motion } from "framer-motion"
import SeventhStep from "../organisms/forms/ExtendedForm/SeventhStep"
import { Prev } from "../atoms/Icons"

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

export default function Kontakt() {

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const startTime = useMemo((time) => {
    if (step === 1 && !time) {
      return new Date().getTime();
    }
    return null
  }, [step])

  const endTime = useMemo((time) => {
    if (step === 7 && !time) {
      const totalTime = new Date().getTime() - startTime

      const minutes = Math.floor(totalTime / 60000); // 1 минута = 60000 миллисекунд
      const seconds = Math.floor((totalTime % 60000) / 1000); // 1 секунда = 1000 миллисекунд

      return minutes + " minuty " + seconds + " sekund";
    }
    return null
  }, [step])

  return (
    <Wrapper>
      <div>
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
                {step === 6 && (
                  <ButtonText id='6'>Informacje</ButtonText>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div>
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
          {step === 6 && (
            <StepWrap id='6'>
              <SixthStep
                setData={setFormData}
                prevData={formData}
                setStep={setStep}
              />
            </StepWrap>
          )}
          {step === 7 && (
            <StepWrap id='6'>
              <SeventhStep
                name={formData.Client.name}
                time={endTime}
              />
            </StepWrap>
          )}
        </AnimatePresence>
      </div>
    </Wrapper >
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 32px;
  grid-template-columns: 300px 1fr;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  label{
    max-width: 520px;
  }
`