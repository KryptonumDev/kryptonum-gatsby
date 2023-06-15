import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "./Logos";

const easeInOut = (t) => {
  return 0.5 - Math.cos(t * Math.PI) / 2;
};

const Showcase = ({
  data: {
    showcase_Heading,
    showcase_Paragraph,
    showcase_List,
    showcase_SummaryLeft,
    showcase_SummaryRight,
  }
}) => {
  const listRef = useRef();
  const [animationValue, setAnimationValue] = useState(0);
 
  const handleScroll = () => {
    const list = listRef.current;
    const windowHeight = window.innerHeight;
    const { top, bottom } = list.getBoundingClientRect();
    const distance = bottom - top;
    const scrollPosition = windowHeight / 2 - top;
    const value = scrollPosition / distance;
    let animValue = 0;

    if (top < windowHeight / 2 && bottom > windowHeight / 2) {
        animValue = easeInOut(value);
      } else if (bottom < windowHeight * 1.5) {
        animValue = 1;
      } else if (top > windowHeight * 0.5) {
        animValue = 0;
      }
      animValue = window.innerWidth >= 3000
        ? `-${animValue * 200}%`
        : `-${animValue * (3000 + window.innerWidth)}px`;
      setAnimationValue(animValue);
  };
  useEffect(() => {
    const handleAnimationFrame = () => {
      handleScroll();
      requestAnimationFrame(handleAnimationFrame);
    };
    handleAnimationFrame();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2" className="heading">{showcase_Heading}</DecorativeHeading>
        <ReactMarkdown className="paragraph">{showcase_Paragraph}</ReactMarkdown>
      </header>
      <div className="list" ref={listRef}>
        <div className="showcase" style={{transform: `translate(${animationValue}, -50%)`}}>
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
          <Logo5 />
        </div>
        {showcase_List.map((item, i) => (
          <div className="item" key={i}>
            <ReactMarkdown className="title">{item.title}</ReactMarkdown>
            <ReactMarkdown className="description">{item.description}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="summary">
        <p>{showcase_SummaryLeft}</p>
        <p>{showcase_SummaryRight}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    max-width: ${688/16}rem;
    text-align: center;
    &,
    .heading {
      margin: 0 auto;
      margin-bottom: ${Clamp(28, 32, 48, 'px')};
    }
    .paragraph {
      p:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }
  .title, .paragraph p:first-child, .summary {
    font-size: ${Clamp(20, 32, 30)};
  }
  .description, .paragraph {
    font-size: ${Clamp(16, 22, 22)};
  }
  .list {
    position: relative;
    margin-top: 128px;
    text-align: center;
    height: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .item {
      .title {
        margin-bottom: ${Clamp(8, 16, 16, 'px')}
      }
      max-width: ${626/16}rem;
      margin: 0 auto;
    }
    .showcase {
      position: fixed;
      top: 50%;
      left: 100%;
      transform: translate(0%, -50%);
      display: flex;
      width: 100vw;
      min-width: 3000px;
      justify-content: space-between;
      align-items: center;
      mix-blend-mode: difference;
    }
  }
  .summary {
    margin-top: 128px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default Showcase;