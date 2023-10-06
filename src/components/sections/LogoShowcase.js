import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import DecorativeHeading from '../atoms/DecorativeHeading';
import { Clamp } from '../../utils/functions';

const LogoShowcase = ({ data: { heading, paragraph, proposals } }) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <ReactMarkdown className='paragraph'>{paragraph}</ReactMarkdown>
      </header>
      <div className="wrapper">
        {proposals.map(({ title, img }, i) => (
          <div className="item" key={i}>
            <div className="img">
              <GatsbyImage
                image={img.asset.gatsbyImageData}
                alt={img.asset.altText || ''}
                objectFit='contain'
                className="logo"
              />
            </div>
            {title && (
              <ReactMarkdown className="title">{title}</ReactMarkdown>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  @media (min-width: 950px){
    grid-template-columns: 1fr 1fr;
    header {
      height: 100vh;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: sticky;
      top: 0;
    }
  }
  align-items: flex-start;
  gap: 48px ${Clamp(82, 124, 252, 'px')};
  header {
    max-width: calc(517rem/16);
    h2 {
      font-size: ${Clamp(18, 28, 28)};
    }
    .paragraph {
      margin-top: ${Clamp(28, 48, 48, 'px')};
      p:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
  .wrapper {
    display: grid;
    row-gap: ${Clamp(48, 64, 82, 'px')};
    counter-reset: counter;
    .item {
      .img {
        border: 1px solid var(--neutral-700);
        padding: ${Clamp(16, 24, 32, 'px')} ${Clamp(24, 24, 48, 'px')};
        text-align: center;
        width: 100%;
        .logo {
          max-width: 500px;
          max-height: 200px;
        }
      }
      counter-increment: counter;
      .title {
        margin-top: ${Clamp(24, 32, 32, 'px')};
        font-size: ${Clamp(16, 18, 18)};
        display: grid;
        row-gap: 16px;
        &::before {
          content: "/" counter(counter);
        }
        @media (min-width: 500px){
          grid-template-columns: 64px 1fr;
        }
        @media (min-width: 500px) and (min-width: 949px) {
          margin-left: -64px;
        }
      }
      &:nth-child(-n+9) .title::before {
        content: "/0" counter(counter);
      }
    }
  }
`

export default LogoShowcase;