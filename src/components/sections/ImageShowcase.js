import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import { Clamp } from '../../utils/functions';

const ImageShowcase = ({ data: { images, cta } }) => {
  return (
    <Wrapper>
      {images.map((image, i) => (
        <GatsbyImage
          image={image.asset.gatsbyImageData}
          alt={image.asset.altText || ''}
          className={`img img-${i}`}
          key={i}
        />
      ))}
      {cta?.href && (
        <Button data={cta} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .img {
    display: block;
    &.img-0 {
      width: 40%;
    }
    &.img-1 {
      margin-left: auto;
      margin-top: -20%;
      width: 65%;
    }
  }
  @media (max-width: 699px){
    .img {
      &.img-0 {
        width: 70%;
      }
      &.img-1 {
        margin-top: -5%;
        width: 90%;
      }
    }
  }
  text-align: center;
  .cta {
    margin-top: ${Clamp(32, 48, 48, 'px')}
  }
`

export default ImageShowcase;