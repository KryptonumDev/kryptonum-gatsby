import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from "../../utils/functions";
import { ScrollDown } from "../atoms/Icons";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useInView } from "framer-motion";

export default function Hero({ setStep, data }) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const handleScroll = (e) => {
    e.preventDefault()
    setStep(1)
  };

  useEffect(() => {
    if (isInView) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  return (
    <Wrapper >
      <div className="sticky">
        <div className="grid">
          <div>
            <DecorativeHeading type="h1">{data.hero_Heading}</DecorativeHeading>
            <ReactMarkdown className="left">{data.hero_Subheading}</ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown className="top">{data.hero_Paragraph}</ReactMarkdown>
            <ReactMarkdown className="bot" components={{ 'p': 'h3' }}>{data.hero_Paragraph2}</ReactMarkdown>
          </div>
        </div>
        <div className="scroll">
          <ReactMarkdown >{data.hero_ScrollText}</ReactMarkdown>
          <ScrollDown />
        </div>
      </div>
      <div className="bottom" ref={ref} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 50px;

  @media (max-height: 750px) {
    margin-top: 0;
  }

  @media (max-width: 1240px) {
    margin-top: 0;
  }

  .sticky{
    position: sticky;
    top: 200px;
    padding-bottom: 64px;
  }
  .scroll {
    text-align: center;
    margin: 64px auto 0 auto;
    width: 350px;
    font-size: 22px;
    p {
      margin-bottom: 16px;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 740fr 520fr;
    align-items: flex-end;
    gap: 32px;

    @media (max-width: 1024px) {
      display: block;

      .left{
        margin-bottom: 24px;
      }
    }
  }
  .left {
    font-size: ${Clamp(16, 22, 30)};
    margin-top: 32px;
    em {
      color: var(--neutral-700);
      font-style: normal;
    }
  }
  .top {
    font-size: ${Clamp(16, 22, 22)};
  }
  .bot {
    font-size: ${Clamp(20, 30, 30)};
    margin-top: 16px;
  }
`