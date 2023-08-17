import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import { Clamp } from '../../../utils/functions';
import { GatsbyImage } from 'gatsby-plugin-image';

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
            <ReactMarkdown className='description'>{item.description}</ReactMarkdown>
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
        margin-bottom: ${Clamp(28, 48, 48, 'px')};
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

export default Participated;