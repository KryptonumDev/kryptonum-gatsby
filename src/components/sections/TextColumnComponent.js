import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import DecorativeHeading from '../atoms/DecorativeHeading';
import { Clamp } from '../../utils/functions';
import Button from '../atoms/Button';

const TextColumnComponent = ({ data: { heading, items } }) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      </header>
      <div className="wrapper">
        {items.map((item, i) => (
          <div className="item" key={i}>
            <ReactMarkdown
              className='description'
              components={{
                a: ({ href, children }) => <Button theme='secondary' to={href}>{children}</Button>
              }}
            >{item}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  header {
    max-width: calc(628rem/16);
    margin-bottom: ${Clamp(28, 64, 82, 'px')};
    h2 {
      font-size: ${Clamp(18, 28, 28)};
    }
  }
  .wrapper {
    display: grid;
    gap: ${Clamp(24, 32, 32, 'px')};
    .description {
      font-size: ${Clamp(16, 18, 18)};
      & > *:not(:last-child) {
        margin-bottom: 12px;
      }
    }
    @media (min-width: 800px){
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default TextColumnComponent;