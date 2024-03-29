import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Clamp } from '../../utils/functions';
import { GatsbyImage } from 'gatsby-plugin-image';

const ListWithOverflowIcon = ({ data: { blocks } }) => {
  return (
    <Wrapper>
      {blocks.map(({ icon, title, description, img }, i) => (
        <div className="item" key={i} data-isImg={Boolean(img)}>
          <GatsbyImage
            image={icon.asset.gatsbyImageData}
            alt={icon.asset.altText || ''}
            className="icon"
          />
          <ReactMarkdown className="title" components={{ 'p': 'h2' }}>{title}</ReactMarkdown>
          {img && (
            <GatsbyImage
              image={img.asset.gatsbyImageData}
              alt={img.asset.altText || ''}
              className="img"
            />
          )}
          <ReactMarkdown className="description">{description}</ReactMarkdown>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: ${Clamp(32, 48, 48, 'px')};
  .item {
    padding: ${Clamp(24, 32, 32, 'px')} ${Clamp(16, 24, 24, 'px')};
    border: 1px solid var(--neutral-700);
    margin-top: 30px;
    display: grid;
    gap: 32px;
    @media (min-width: 800px){
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
      .icon {
        grid-column: 3/1;
      }
      &[data-isImg="true"]{
        .title {
          max-width: 50%;
          grid-column: 3/1;
        }
      }
    }
    .icon {
      margin: 0 auto;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 1px solid var(--neutral-700);
      background: var(--neutral-950);
      margin-top: calc(${Clamp(-32, -32, -24, 'px')} - 30px);
      img {
        padding: 12px;
      }
    }
    h2 {
      font-size: ${Clamp(18, 28, 28)};
    }
    .description {
      font-size: ${Clamp(16, 18, 18)};
      p:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
`

export default ListWithOverflowIcon;