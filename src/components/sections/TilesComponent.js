import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import DecorativeHeading from '../atoms/DecorativeHeading';
import { Clamp } from '../../utils/functions';

const TilesComponent = ({ data: { heading, list } }) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      </header>
      <div className="wrapper">
        {list.map(({ icon, title, description }, i) => (
          <div className={`item${icon ? ' isIcon' : ''}`} key={i}>
            {title ? (
              <ReactMarkdown className="title">{title}</ReactMarkdown>
            ) : (
              <GatsbyImage
                image={icon.asset.gatsbyImageData}
                alt={icon.asset.altText || ''}
                className='img'
              />
            )}
            <ReactMarkdown className="description">{description}</ReactMarkdown>
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
      align-items: center;
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
  }
  .wrapper {
    display: grid;
    gap: ${Clamp(16, 24, 32, 'px')} ${Clamp(24, 24, 32, 'px')};
    @media (min-width: 550px) and (max-width: 949px) {
      grid-template-columns: 1fr 1fr;
    }
    .item {
      background-color: var(--neutral-950);
      border: 1px solid var(--neutral-700);
      &:first-child {
        border: 1px solid var(--primary-400);
        background: linear-gradient(266deg, #0B0F0D, #12211F);
      }
      padding: ${Clamp(24, 32, 32, 'px')} ${Clamp(16, 24, 24, 'px')};
      .img {
        width: 48px;
        height: 48px;
        img {
          padding: 12px;
        }
        margin-bottom: ${Clamp(16, 24, 32, 'px')};
        border-radius: 50%;
        border: 1px solid var(--neutral-700);
        background-color: var(--neutral-900);
      }
      .title {
        font-size: ${Clamp(18, 28, 28)};
        margin-bottom: ${Clamp(24, 24, 32, 'px')};
      }
      .description {
        font-size: ${Clamp(16, 18, 18)};
        p:not(:last-child){
          margin-bottom: 12px;
        }
      }
      &.isIcon {
        @media (max-width: 549px){
          display: flex;
          align-items: center;
          gap: 16px;
          .img {
            margin: 0;
            flex-shrink: 0;
          }
        }
      }
    }
  }
`

export default TilesComponent;