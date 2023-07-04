import React, { useEffect, useMemo, useState } from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/global/Seo";
import Kontakt from "../components/sections/ExtendedContact";
import Hero from "../components/sections/ExtendedContactHero";
import Summary from "../components/sections/ExtendedContactSummary";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../components/sections/Loader";

const BriefPage = ({ data }) => {

  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [startTime, setStartTime] = useState(null)
  const [isEmailSent, setIsEmailSent] = useState(false)

  useEffect(() => {
    if (step === 1 && !startTime) {
      setStartTime(new Date().getTime())
    }

    if (step === 7 && !isEmailSent) {
      fetch('/api/brief-contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(() => {
        setIsEmailSent('success')
      }).catch(() => {
        setIsEmailSent('failed')
      })
    }
  }, [step])

  const endTime = useMemo((time) => {
    if (step === 7 && !time) {
      const totalTime = new Date().getTime() - startTime

      const minutes = Math.floor(totalTime / 60000);
      const seconds = Math.floor((totalTime % 60000) / 1000);

      return minutes + ':' + seconds
    }
    return null
  }, [step])

  return (
    <AnimatePresence mode="wait">

      {step === 0 && (
        <motion.div key='hero' exit={{ opacity: 0, x: -10 }}>
          <Hero data={data.page} setStep={setStep} />
        </motion.div>
      )}
      {(step > 0 && step < 8 && !isEmailSent) && (
        <motion.div key='kontakt' initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
          <Kontakt step={step} setStep={setStep} formData={formData} setFormData={setFormData} endTime={endTime} />
        </motion.div>
      )}
      {(step === 7 && !isEmailSent) && (
        <motion.div key='loader' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Loader />
        </motion.div>
      )}
      {(step === 7 && isEmailSent === 'failed') && (
        <>Fail</>
      )}
      {(step === 7 && isEmailSent === 'success') && (
        <motion.div key='summary' initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
          <Summary name={formData?.Client?.name} endTime={endTime} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const query = graphql`
  query {
    page : sanityBrief {
      hero_Heading
      hero_Paragraph
      hero_Paragraph2
      hero_ScrollText
      hero_Subheading
      seo {
        title
        description
      }
    }
  }
`

export default BriefPage

export const Head = ({
  data: { page: { seo: {
    title,
    description
  } } }
}) => (
  <SEO
    title={title}
    description={description}
    url='/pl/brief-z-kryptonum'
  />
)