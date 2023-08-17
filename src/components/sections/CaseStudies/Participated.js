import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import { Clamp } from '../../../utils/functions';

const Participated = ({ data: { heading, paragraph, people } }) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <ReactMarkdown className='paragraph'>{paragraph}</ReactMarkdown>
      </header>
      <div className="wrapper">
        {people.slice(0, 3).map((person, i) => (
          <div className="item" key={i}>
            <Link to={`/pl/zespol/${person.slug.current}`} className="avatar">
              <GatsbyImage
                image={person.img.asset.gatsbyImageData}
                alt={person.img.asset.altText || ''}
                className="person-border"
              />
              <p className="name">{person.name}</p>
            </Link>
            {people[i+3] && (
              <Link to={`/pl/zespol/${people[i + 3].slug.current}`} className="avatar">
                <GatsbyImage
                  image={people[i + 3].img.asset.gatsbyImageData}
                  alt={people[i + 3].img.asset.altText || ''}
                  className="person-border"
                />
                <p className="name">{people[i+3].name}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  margin: 0 calc(var(--pageMargin) * -1);
  padding: calc(${Clamp(48, 72, 106, 'px')} * .5 + ${Clamp(30, 42, 45, 'px')}) var(--pageMargin);
  header {
    margin-bottom: ${Clamp(24, 32, 48, 'px')};
    @media (min-width: 950px){
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: max-content;
      margin-bottom: 0;
      h2 {
        margin: 0 auto;
      }
    }
    max-width: 620px;
    h2 {
      margin-bottom: ${Clamp(24, 24, 34, 'px')}
    }
    .paragraph {
      font-size: ${Clamp(16, 18, 18)};
    }
  }
  .wrapper {
    width: 100%;
    aspect-ratio: 1/1;
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: calc(var(--pageMargin) * -1);
      right: calc(var(--pageMargin) * -1);
      z-index: 3;
      pointer-events: none;
      height: 250px;
    }
    &::before {
      top: -106px;
      background: linear-gradient(var(--neutral-950), rgba(0,0,0,0));
    }
    &::after {
      bottom: -106px;
      background: linear-gradient(rgba(0,0,0,0), var(--neutral-950));
    }
    .item {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      aspect-ratio: 1/1;
      border: 1px solid var(--neutral-700, #5B5F67);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      transform-origin: center;
      pointer-events: none;
      .avatar {
        z-index: 5;
        animation: rotatePerson 20s infinite linear;
        width: ${Clamp(48, 72, 106, 'px')};
        height: ${Clamp(48, 72, 106, 'px')};
        margin-top: calc(${Clamp(48, 72, 106, 'px')} * -.5);
        border-radius: 50%;
        pointer-events: all;
        &:last-child {
          align-self: flex-end;
          margin-bottom: calc(${Clamp(48, 72, 106, 'px')} * -.5);
        }
        .name {
          z-index: 3;
          position: relative;
          left: 50%;
          text-align: center;
          font-size: ${Clamp(13, 16, 18)};
          padding: ${Clamp(4, 8, 8, 'px')} ${Clamp(8, 16, 16, 'px')};
          border-radius: 2px;
          border: 1px solid var(--neutral-700);
          background-color: var(--neutral-900);
          transform: translate(-50%, -25%);
          width: fit-content;
        }
      }
      animation: rotate 20s infinite linear;
      &:hover,
      &:hover .avatar,
      &:focus-within,
      &:focus-within .avatar {
        animation-play-state: paused;
      }
      &:nth-child(odd) {
        &, .avatar {
          animation-direction: reverse;
        }
      }
      &:nth-child(1) {
        width: 100%;
        &, .avatar {
          animation-delay: -5s;
        }
      }
      &:nth-child(2) {
        width: calc(100% - (${Clamp(48, 72, 106, 'px')} * 2));
        &, .avatar {
          animation-delay: -5s;
        }
      }
      &:nth-child(3) {
        width: calc(100% - (${Clamp(48, 72, 106, 'px')} * 4));
      }
      @keyframes rotate {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
      @keyframes rotatePerson {
        0% {
          transform: rotate(0);
        }
        50% {
          transform: rotate(-180deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }
    }
  }
  @media (max-width: 949px){
    .wrapper {
      &::before {
        display: none;
      }
    }
  }
`

export default Participated;