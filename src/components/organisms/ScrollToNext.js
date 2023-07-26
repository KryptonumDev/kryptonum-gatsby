import React, { useRef, useEffect, useState } from "react";
import { navigate } from "gatsby"
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { ArrowDown, ScrollDown } from "../atoms/Icons";
import { GatsbyImage } from "gatsby-plugin-image";

const easeOut = (t) => {
  return 1 - Math.pow(1 - t, 3);
};
const scrollHeight = 800;

const ScrollToNext = ({ data: { heading, paragraph, title, link }}) => {
  const scrollToNext = useRef(null);
  const [scaleY, setScaleY] = useState(0);
  const locationPath = typeof window !== 'undefined' ? window.location.pathname : '';
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const remainingScroll = maxScroll - scrollPosition;
      let progress = Math.max(0, Math.min(1, 1 - remainingScroll / scrollHeight));
      progress = easeOut(progress);
      setScaleY(progress);
      if(remainingScroll <= 0){
        window.scrollTo({top: scrollPosition - scrollHeight});
        navigate(link.href, { replace: false });
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [locationPath]);

  return (
    <Wrapper className="max-width" ref={scrollToNext}>
      <div className="margin" style={{height: `${scrollHeight}px`}}></div>
      <div className="sticky">
        {heading && (
          <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        )}
        <div className="paragraph">
          <ReactMarkdown>{paragraph}</ReactMarkdown>
          <ArrowDown />
        </div>
        <div className="grid">
          <ReactMarkdown>{title}</ReactMarkdown>
          <div className="page">
            {link.person ? (
              <div className="person">
                <GatsbyImage
                  image={link.person.img.asset.gatsbyImageData}
                  alt={link.person.img.asset.altText || ''}
                  className="person-border"
                />
                <div className="copy">
                  <p className="name">{link.person.name}</p>
                  <p className="cryptonym">{link.person.cryptonym}</p>
                </div>
              </div>
            ) : (
              <p>{link.text}</p>
            )}
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
  h2 {
    grid-template-columns: auto auto;
    span:nth-of-type(1){
      max-width: unset;
    }
    span:nth-of-type(2){
      transform: translateY(50%);
      margin-bottom: ${Clamp(28, 50, 48, "px")};
      font-size: unset;
      max-width: unset;
    }
  }
  .sticky {
    position: sticky;
    bottom: 0;
    padding-bottom: 64px;
  }
  .paragraph {
    max-width: ${Clamp(210, 290, 300, "px")};
    font-size: ${Clamp(16, 22, 22)};
    margin: ${Clamp(64, 64, 72, "px")} auto ${Clamp(24, 32, 40, "px")};
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
          transform-origin: bottom;
        }
      }
      .person {
        width: fit-content;
        margin: 0 auto;
        text-align: left;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        align-items: center;
        .person-border {
          width: ${Clamp(120, 144, 180, 'px')};
          height: ${Clamp(120, 144, 180, 'px')};
        }
        .name {
          font-size: ${Clamp(24, 32, 30)};
        }
        .cryptonym {
          font-size: ${Clamp(16, 20, 22)};
        }
      }
    }
  }
  @media (max-width: 1189px){
    h2 {
      span {
        max-width: ${625/16}rem;
      }
      span:nth-of-type(2) {
        justify-self: flex-end;
        transform: none;
        margin: 32px 0 0 0;
        grid-column: 2/-1;
      }
    }
    .grid {
      grid-template-columns: 1fr;
      text-align: center;
      gap: ${Clamp(16, 48, 64, "px")};
      svg {
        display: none;
      }
    }
  }
`

export default ScrollToNext;