import React from "react";
import ReactMarkdown from 'react-markdown'
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Quote } from "../atoms/Icons";
import Button from '../atoms/Button';
import { Clamp } from "../../utils/functions";

const TestimonialsSwiper = ({testimonials}) => {
  return (
    <Wrapper>
      {testimonials.nodes.map((testimonial, i) => (
        <div className={`item ${testimonial.img ? '' : 'noImg'}`} key={i}>
          {testimonial.img && (
            <GatsbyImage image={testimonial.img.asset.gatsbyImageData} alt={testimonial.img.asset.altText || ''} className="img" objectFit="contain" />
          )}
          <div className="content">
            <Quote />
            <ReactMarkdown>{testimonial.text}</ReactMarkdown>
          </div>
          <div className="info">
            <h3>
              {testimonial.name}
              <span>{testimonial.project}</span>
            </h3>
            <Button theme={testimonial.cta.theme} to={testimonial.cta.href}>{testimonial.cta.text}</Button>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
 
const Wrapper = styled.div`
  .item {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    background-color: var(--neutral-900);
    display: grid;
    align-items: center;
    padding: 72px 32px 64px;
    grid-template-columns: 240px 2fr 1.2fr;
    &.noImg {
      padding: 72px 32px 64px 64px;
      grid-template-columns: 2fr 1.2fr;
    }
    gap: 48px;
    .img {
      margin-bottom: -64px;
      align-self: end;
    }
    .content {
      svg {
        margin-bottom: 1rem;
      }
      p {
        font-size: ${Clamp(16, 22, 30)};
      }
      margin-right: 8px;
    }
    .info {
      h3 {
        font-size: ${Clamp(20, 32, 30)};
        margin-bottom: 24px;
        span {
          display: block;
          font-size: ${22/30}em;
        }
      }
      margin-left: 8px;
      position: relative;
      padding: 2rem 0;
      &::before {
        content: '';
        width: 2px;
        height: 100%;
        position: absolute;
        left: -33px;
        bottom: 0;
        background-color: var(--neutral-800);
      }
    }
  }
  @media (max-width: 1189px){
    .item {
      grid-template-columns: 1fr 2fr;
      padding: 32px;
      &.noImg {
        padding: 32px;
        .content {
          grid-column: 3 / 1;
        }
      }
      align-items: flex-end;
      gap: 24px;
      .img {
        margin-bottom: -32px;
      }
      .info {
        order: -1;
        grid-column: 3 / 1;
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: space-between;
        h3 {
          margin-bottom: 0;
          span {
            margin-top: .5rem;
          }
        }
        margin-left: 0;
        margin-bottom: 40px;
        padding: 0;
        &::before {
          content: '';
          width: 100%;
          height: 1px;
          left: 0;
          bottom: -32px;
        }
      }
    }
  }
  @media (max-width: 599px){
    .item {
      grid-template-columns: 1fr;
      padding: 24px;
      gap: 34px;
      &.noImg {
        grid-template-columns: 1fr;
        padding: 24px;
        .content {
          grid-column: unset;
        }
      }
      .img {
        width: 100%;
        height: 200px;
        order: 2;
        margin-bottom: -24px;
      }
      .content {
        text-align: center;
        svg {
          width: 24px;
          height: 24px;
        }
      }
      .info {
        grid-column: unset;
        display: block;
        h3 {
          margin-bottom: 1rem;
          span {
            margin-top: 4px;
          }
        }
        margin-bottom: 32px;
        &::before {
          bottom: -32px;
        }
      }
    }
  }
`

export default TestimonialsSwiper;