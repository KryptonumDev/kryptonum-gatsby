import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Clamp } from '../../utils/functions';
import DecorativeHeading from '../atoms/DecorativeHeading';

const Process = ({ data: { heading, blocks } }) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      </header>
      <div className="wrapper">
        {blocks.map(({ title, description }, i) => (
          <div className="item" key={i}>
            <ReactMarkdown className="title" components={{ 'p': 'h3' }}>{title}</ReactMarkdown>
            <ReactMarkdown className="description">{description}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  header {
    max-width: calc(380rem/16);
    text-align: center;
    margin: 0 auto 34px;
    h2 {
      font-size: ${Clamp(18, 28, 28)};
    }
  }
  .wrapper {
    display: grid;
    gap: ${Clamp(24, 24, 32, 'px')};
    @media (min-width: 900px){
      grid-template-columns: 1fr 1fr;
    }
    counter-reset: counter;
    .item {
      counter-increment: counter;
      margin-top: 25px;
      &::before {
        content: counter(counter);
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: calc(18rem/16);
        border-radius: 50%;
        border: 1px solid var(--neutral-700);
        background: var(--neutral-950);
        margin: -57px auto 16px;
      }
      border: 1px solid var(--neutral-700);
      padding: 32px ${Clamp(24, 32, 48, 'px')} 48px;
      h3 {
        font-size: ${Clamp(18, 28, 28)};
        margin-bottom: ${Clamp(32, 32, 64, 'px')};
      }
      .description {
        p:not(:last-child){
          margin-bottom: ${Clamp(16, 24, 24, 'px')};
        }
      }
    }
  }
`

export default Process;