import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Clamp } from '../../utils/functions';

const ImageComponent = ({ data: { isMockup, img } }) => {
  return (
    <Wrapper className={isMockup ? 'mockup' : ''}>
      {isMockup && (
        <MockupFrame />
      )}
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  &.mockup {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${Clamp(8, 16, 24, 'px')};
  }
  svg {
    width: 100%;
    height: auto;
    position: absolute;
  }
  .img {
    z-index: 2;
  }
`

const MockupFrame = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1094'
    height='656'
    viewBox='0 0 1094 656'
    fill='none'
  >
    <rect
      width='1090'
      height='652'
      x='3'
      y='3'
      stroke='#5B5F67'
      strokeWidth='2'
      rx='21'
    ></rect>
    <path
      fill='#5B5F67'
      d='M62 0h40v2H62zm50 0h40v2h-40zM0 70V30h2v40z'
    ></path>
  </svg>
)

export default ImageComponent;