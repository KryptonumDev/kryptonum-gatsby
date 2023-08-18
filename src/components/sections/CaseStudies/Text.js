import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import { Clamp } from '../../../utils/functions';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '../../atoms/Button';

const Participated = ({ data: { heading, blocks } }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <div className="wrapper">
        {blocks.map((item, i) => (
          <div className="item" key={i}>
            {item.icon ? (
              <GatsbyImage
                image={item.icon.asset.gatsbyImageData}
                alt={item.icon.asset.altText || ''}
                className="icon person-border"
              />
            ) : (
              <ReactMarkdown className='title'>{item.title}</ReactMarkdown>
            )}
            <ReactMarkdown
              className='description'
              components={{
                li: ({ children, ordered}) => <li>{!ordered && <BulletListIcon />}<span>{children}</span></li>,
                a: ({ href, children }) => <Button theme='secondary' to={href}>{children}</Button>
              }}
            >{item.description}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    width: calc(50% - ${Clamp(12, 16, 16, 'px')});
    font-size: ${Clamp(22, 28, 28)};
  }
  .wrapper {
    .item {
      width: calc(50% + 188px);
      margin-left: auto;
      display: grid;
      grid-template-columns: 188px 2fr;
      gap: 16px ${Clamp(24, 32, 32, 'px')};
      &:not(:last-child) {
        margin-bottom: ${Clamp(28, 40, 40, 'px')};
      }
      .icon {
        width: ${Clamp(48, 64, 64, 'px')};
        height: ${Clamp(48, 64, 64, 'px')};
        margin-left: auto;
        img {
          padding: 4px;
        }
      }
      .title {
        margin-left: auto;
        text-align: right;
      }
      .title,
      .description {
        font-size: ${Clamp(16, 18, 18)};
      }
      .description {
        a {
          font-size: inherit;
        }
        ul {
          list-style-type: none;
          li {
            &:not(:last-child) {
              margin-bottom: ${Clamp(16, 16, 24, 'px')};
            }
            svg {
              margin-top: 1px;
            }
            display: grid;
            grid-template-columns: 24px 1fr;
            gap: 4px;
          }
        }
      }
    }
  }
  @media (max-width: 999px){
    h2 {
      width: 100%;
      margin-bottom: ${Clamp(28, 64, 64, 'px')};
    }
    .wrapper {
      .item {
        width: 100%;
      }
    }
  }
  @media (max-width: 499px){
    .wrapper {
      .item {
        grid-template-columns: 1fr;
        .icon,
        .title {
          margin-left: 0;
          text-align: left;
        }
      }
    }
  }
`

const BulletListIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
    <path
      stroke='#EFF0F3'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M9 18l6-6-6-6'
    ></path>
  </svg>
)

export default Participated;