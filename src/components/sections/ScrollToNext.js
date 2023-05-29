import React, { useRef, useEffect, useState } from "react";
import { navigate } from "gatsby"
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { ArrowDown, ScrollDown } from "../atoms/Icons";

const ScrollToNext = ({ data: { heading, paragraph, title, link }}) => {
  const scrollToNext = useRef(null);
  const [scaleY, setScaleY] = useState(0);
  const scrollHeight = 300;
 useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const remainingScroll = maxScroll - scrollPosition;
      const progress = Math.max(0, Math.min(1, 1 - remainingScroll / scrollHeight));
      setScaleY(progress);
      if(remainingScroll <= 0){
        window.scrollTo({top: scrollPosition - scrollHeight});
        navigate('/', { replace: false });
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Wrapper className="max-width" ref={scrollToNext}>
      <div className="margin" style={{height: `${scrollHeight}px`}}></div>
      <div className="sticky">
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <div className="paragraph">
          <ReactMarkdown>{paragraph}</ReactMarkdown>
          <ArrowDown />
        </div>
        <div className="grid">
          <ReactMarkdown>{title}</ReactMarkdown>
          <div className="page">
            <p>{link.text}</p>
            <div className="indicator"><div className="bar" style={{ transform: `scaleY(${scaleY})`}}></div></div>
          </div>
          <ScrollDown />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  &.max-width {
    margin-top: ${Clamp(64, 128, 172, "px")};
  }
  .sticky {
    position: sticky;
    bottom: 0;
    padding-bottom: 64px;
  }
  .paragraph {
    max-width: ${300/16}rem;
    font-size: ${Clamp(16, 22, 22)};
    margin: ${Clamp(64, 64, 72)} auto;
    text-align: center;
    p {
      margin-bottom: 8px;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: ${Clamp(20, 32, 30)};
    svg {
      margin-left: auto;
    }
    .page {
      text-align: center;
      .indicator {
        width: 4px;
        height: 100px;
        background-color: var(--neutral-800);
        margin: 32px auto 0;
        position: relative;
        .bar {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(266deg, #2DD282, #90F4E8 100%);
          transform-origin: top;
        }
      }
    }
  }
`

export default ScrollToNext;