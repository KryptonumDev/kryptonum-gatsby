import React, { useEffect, useMemo, useState } from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/global/Seo";
import Kontakt from "../components/sections/ExtendedContact";
import Hero from "../components/sections/ExtendedContactHero";
import Summary from "../components/sections/ExtendedContactSummary";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../components/atoms/Loader";

const csvData = `https://kryptonum.eu/;https://kryptonum.eu/pl
https://kryptonum.eu/projekty/dwa-slowa/;https://kryptonum.eu/pl/portfolio/dwa-slowa
https://kryptonum.eu/projekty/brygida-helbig/;https://kryptonum.eu/pl/portfolio/brygida-helbig
https://kryptonum.eu/projekty/;https://kryptonum.eu/pl/portfolio
https://kryptonum.eu/oferta/;https://kryptonum.eu/pl
https://kryptonum.eu/projekty/9m13/;https://kryptonum.eu/pl/portfolio/9m13
https://kryptonum.eu/kontakt/;https://kryptonum.eu/pl/kontakt/
https://kryptonum.eu/blog/jak-rozmawiac-z-tworcami-stron-internetowych/;https://kryptonum.eu/pl/blog/jak-rozmawiac-z-tworcami-stron-internetowych
https://kryptonum.eu/projekty/centrum-korekty/;https://kryptonum.eu/pl/portfolio/centrum-korekty/
https://kryptonum.eu/faq/;https://kryptonum.eu/pl/faq/
https://kryptonum.eu/blog/strony-internetowe-na-lata/;https://kryptonum.eu/pl/blog/strony-internetowe-na-lata
https://kryptonum.eu/blog/;https://kryptonum.eu/pl/blog
https://kryptonum.eu/projekty/wloski-od-zera/;https://kryptonum.eu/pl/portfolio/wloski-od-zera
https://kryptonum.eu/polityka-prywatnosci/;https://kryptonum.eu/pl/polityka-prywatnosci/
https://kryptonum.eu/o-nas/;https://kryptonum.eu/pl/o-nas
https://kryptonum.eu/blog/strona-internetowa-czy-media-spolecznosciowe/;https://kryptonum.eu/pl/blog/strona-internetowa-czy-media-spolecznosciowe
https://kryptonum.eu/projekty/altwork/;https://kryptonum.eu/pl/portfolio/altwork
https://kryptonum.eu/projekty/cargem/;https://kryptonum.eu/pl/portfolio/cargem
https://kryptonum.eu/projekty/justyna-holosyniuk/;https://kryptonum.eu/pl/portfolio/justyna-holosyniuk
https://kryptonum.eu/projekty/xminer/;https://kryptonum.eu/pl/portfolio/xminer
https://kryptonum.eu/blog/jak-zdobyc-pierwszego-klienta/;https://kryptonum.eu/pl/blog/jak-zdobyc-pierwszego-klienta
https://kryptonum.eu/blog/3-sposoby-na-rozpoznawalnosc-twojej-marki/;https://kryptonum.eu/pl/blog/3-sposoby-na-rozpoznawalnosc-twojej-marki
https://kryptonum.eu/blog/jak-zdobyc-pierwszego-klienta/mailtokuba@kryptonum.eu;https://kryptonum.eu/pl
https://kryptonum.eu/page-data/blog/jak-zdobyc-pierwszego-klienta/mailtokuba@kryptonum.eu/page-data.json;https://kryptonum.eu/pl
https://kryptonum.eu/projekty/dwa-slowa;https://kryptonum.eu/pl/portfolio/dwa-slowa
https://kryptonum.eu/projekty/brygida-helbig;https://kryptonum.eu/pl/portfolio/brygida-helbig
https://kryptonum.eu/projekty;https://kryptonum.eu/pl/portfolio
https://kryptonum.eu/oferta;https://kryptonum.eu/pl
https://kryptonum.eu/projekty/9m13;https://kryptonum.eu/pl/portfolio/9m13
https://kryptonum.eu/portfolio;https://kryptonum.eu/pl/portfolio
https://kryptonum.eu/blog/jak-rozmawiac-z-tworcami-stron-internetowych;https://kryptonum.eu/pl/blog/jak-rozmawiac-z-tworcami-stron-internetowych
https://kryptonum.eu/projekty/centrum-korekty;https://kryptonum.eu/pl/portfolio/centrum-korekty
https://www.kryptonum.eu/projekty/centrum-korekty;https://kryptonum.eu/pl/portfolio/centrum-korekty
https://kryptonum.eu/faq;https://kryptonum.eu/pl/faq
https://kryptonum.eu/blog/strony-internetowe-na-lata;https://kryptonum.eu/pl/blog/strony-internetowe-na-lata
https://kryptonum.eu/blog;https://kryptonum.eu/pl/blog
https://kryptonum.eu/projekty/wloski-od-zera;https://kryptonum.eu/pl/portfolio/wloski-od-zera
https://kryptonum.eu/polityka-prywatnosci;https://kryptonum.eu/pl/polityka-prywatnosci
https://kryptonum.eu/o-nas;https://kryptonum.eu/pl/o-nas
https://kryptonum.eu/blog/strona-internetowa-czy-media-spolecznosciowe;https://kryptonum.eu/pl/blog/strona-internetowa-czy-media-spolecznosciowe
https://kryptonum.eu/projekty/altwork;https://kryptonum.eu/pl/portfolio/altwork
https://kryptonum.eu/projekty/cargem;https://kryptonum.eu/pl/portfolio/cargem
https://kryptonum.eu/projekty/justyna-holosyniuk;https://kryptonum.eu/pl/portfolio/justyna-holosyniuk
https://kryptonum.eu/projekty/xminer;https://kryptonum.eu/pl/portfolio/xminer
https://kryptonum.eu/blog/jak-zdobyc-pierwszego-klienta;https://kryptonum.eu/pl/blog/jak-zdobyc-pierwszego-klienta
https://kryptonum.eu/blog/3-sposoby-na-rozpoznawalnosc-twojej-marki;https://kryptonum.eu/pl/blog/3-sposoby-na-rozpoznawalnosc-twojej-marki
https://kryptonum.eu/sitemap-index.xml;https://kryptonum.eu/pl/sitemap-index.xml
https://kryptonum.eu/sitemap-0.xml;https://kryptonum.eu/pl/sitemap-0.xml
`
function csvToJson(csvString) {
  const lines = csvString.trim().split('\n');
  const headers = ['fromPath', 'toPath'];
  const json = [];

  for (let i = 1; i < lines.length; i++) {
    const fields = lines[i].split(';').map(field => field.trim());
    const redirect = {};

    for (let j = 0; j < headers.length; j++) {
      redirect[headers[j]] = fields[j].replace('https://kryptonum.eu', '');
    }
    redirect['isPermanent'] = true;

    json.push(redirect);
  }

  return json;
}
const jsonData = csvToJson(csvData);
console.log(JSON.stringify(jsonData, null, 2));

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