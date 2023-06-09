import React, { useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import SimpleCtaSection from "../SimpleCtaSection";

const Advantages = ({ heading, advantages, simpleCtaSection }) => {
  const [scales, setScales] = useState({ scale1: 0, scale2: 0, scale3: 0, scale4: 0 });
  useEffect(() => {
    const advantages = document.querySelectorAll('.advantages-item');
    const handleScroll = () => {
      const offset = (window.innerHeight / 2) * -1;
      const newScales = { ...scales };
      advantages.forEach((advantage, i) => {
        const { top, height } = advantage.getBoundingClientRect();
        let scaleX = 0.6 - (Math.abs(top - offset) / ((height / 2) + offset * 1.5)) * 0.6;
        if(top - offset >= 0){
          scaleX = .6;
        } else if(Math.abs(top - offset) >= height / 2) {
          scaleX = 0;
        }
        newScales[`scale${i + 1}`] = scaleX;
      })
      setScales(newScales);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
  }, [])

  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      </header>
      <div className="advantages">
        {advantages.map((advantage, i) => (
          <AdvantageItem className="advantages-item" key={i} data-scale={scales[`scale${i + 1}`]}>
            <div className="copy">
              <ReactMarkdown components={{ p: 'h3' }}>{advantage.title}</ReactMarkdown>
              <ReactMarkdown>{advantage.description}</ReactMarkdown>
            </div>
            <GatsbyImage
              image={advantage.img.asset.gatsbyImageData}
              alt={advantage.img.asset.altText || ''}
              className="img"
            />
          </AdvantageItem>
        ))}
      </div>
      <SimpleCtaSection data={simpleCtaSection} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    max-width: ${720/16}rem;
    h2 {
      margin-bottom: ${Clamp(28, 64, 64, "px")};
    }
  }
  .simpleCtaSection {
    margin-top: ${Clamp(80, 144, 144, "px")};
  }
  .advantages-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-template-rows: 1fr 2fr;
    &:not(:last-child){
      margin-bottom: ${Clamp(48, 64, 64, "px")};
    }
    .copy {
      z-index: 3;
      h3 {
        font-size: ${Clamp(20, 32, 30)};
        margin-bottom: ${Clamp(24, 24, 32, "px")};
      }
      p {
        font-size: ${Clamp(16, 22, 22)};
        &:not(:last-child) {
          margin-bottom: ${Clamp(16, 24, 24, "px")};
        }
      }
    }
    .img {
      margin-left: -100%;
      position: sticky;
      top: 0;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--neutral-950);
        z-index: 1;
        transform-origin: left;
        transform: scaleX(0.6);
      }
    }
    &:nth-child(2n) {
      .img {
        order: -1;
        margin-right: -100%;
        margin-left: 0;
        &::before {
          left: unset;
          right: 0;
          transform-origin: right;
        }
      }
    }
  }
`

const AdvantageItem = styled.div`
  .img {
    &::before {
      transform: scaleX(${props => `${props['data-scale']}`}) !important;
    }
  } 
`

export default Advantages;