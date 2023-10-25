import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Cursor } from "../../atoms/Icons";
import { motion } from 'framer-motion';

const Decode = ({
  data: {
    decode_Heading,
    decode_Hint,
    decode_List,
  }
}) => {

  const variants = {
    hidden: {
      height: 0,
      marginTop: '0',
    },
    visible: {
      height: 'auto',
      marginTop: '24px',
    },
  }
  
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{decode_Heading}</DecorativeHeading>
        <p className="hint">
          <Cursor />
          {decode_Hint}
        </p>
      </header>
      <div className="wrapper">
        {decode_List.map(({ title, description }, i) => (
          <Item title={title} description={description} variants={variants} key={i} />
        ))}
      </div>
    </Wrapper>
  );
}

const Item = ({ title, description, variants }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    console.log(titleRef.current);
  }, [])

  return (
    <motion.div
      className="item"
      initial="hidden"
      whileHover="visible"
      ref={titleRef}
    >
      <ReactMarkdown
        className='title'
      >
        {title}
      </ReactMarkdown>
      <motion.div
        variants={variants}
        className='description'
      >
        <ReactMarkdown>{description}</ReactMarkdown>
      </motion.div>
    </motion.div>
  )
}

const Wrapper = styled.section`
  header {
    margin-bottom: ${Clamp(16, 32, 72, 'px')};
    display: grid;
    gap: ${Clamp(16, 32, 32, 'px')} 32px;
    @media (min-width: 800px){
      grid-template-columns: auto auto;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
  .hint {
    font-size: ${Clamp(14, 18, 18)};
    display: flex;
    align-items: center;
    gap: 8px;
  }
  h2 {
    font-size: ${Clamp(18, 28, 28)};
  }
  .wrapper {
    display: grid;
    @media (min-width: 600px){
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1100px){
      grid-template-columns: 1fr 1fr 1fr;
    }
    gap: ${Clamp(16, 32, 32, 'px')};
    .item {
      padding: 32px ${Clamp(16, 32, 48, 'px')};
      border-radius: 2px;
      border: 1px solid var(--neutral-800);
      .title {
        font-size: ${Clamp(18, 28, 28)};
        em {
          font-style: normal;
        }
      }
      .description {
        overflow: hidden;
      }
    }
  }
`

export default Decode;