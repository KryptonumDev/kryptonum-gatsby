import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Desktop, Star, Tick } from "../../atoms/Icons";

const Pricing = ({
  data: {
    pricing_Heading,
    pricing_Plans 
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{pricing_Heading}</DecorativeHeading>
      <div className="wrapper">
        {pricing_Plans.map((plan, i) => (
          <div className={`item${plan.mostPopular ? ' mostPopular' : ''}`} key={i}>
            <div className="content">
              {plan.mostPopular && (
                <div className="badge">
                  <Star />
                  <span>Najczęściej wybierane</span>
                </div>
              )}
              <div className="info">
                <h3 className="title">{plan.title}</h3>
                <p className="description">{plan.description}</p>
                <p className="subpages">
                  <Desktop />
                  <span>{plan.subpages}</span>
                </p>
              </div>
              <p className="price">{plan.price}</p>
              <Button theme={plan.cta.theme} to={plan.cta.href}>{plan.cta.text}</Button>
              <div className="benefits">
                <p>Korzyści:</p>
                <ul>
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className={`${benefit.highlighted && 'highlighted'}`}>
                      <Tick />
                      <span>{benefit.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {i === 0 && (
                <p className="hint">{plan.hint}</p>
              )}
            </div>
            <p className="hint">{plan.hint}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin-bottom: ${Clamp(28, 48, 64, 'px')};
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    gap: 104px 32px;
    .item {
      &:first-child,
      &.mostPopular {
        .title {
          font-weight: 400;
          color: var(--primary-400);
          background-image: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      &:not(:first-child, .mostPopular):not(:hover){
        .cta {
          filter: grayscale(100%);
        }
      }
      &:first-child {
        .content {
          background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                      var(--gradient) border-box;
          border: 1px solid transparent;
          padding: ${Clamp(16, 24, 48, 'px')} ${Clamp(22, 24, 48, 'px')};
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 32px;
          align-items: flex-start;
          grid-template-areas: "info benefits benefits" ". price ." "hint cta .";
        }
        grid-column: 4/1;
        .benefits {
          ul {
            grid-template-columns: 1fr 1fr;
          }
        }
        > .hint {
          display: none;
        }
      }
      &.mostPopular {
        .content {
          background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
          var(--gradient) border-box;
          border: 1px solid transparent;
          border-top-left-radius: 0;
        }
        position: relative;
        .badge {
          position: absolute;
          left: 0;
          top: 0;
          transform: translateY(-100%);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 24px;
          font-size: 16px;
          height: 40px;
          background: var(--gradient);
          color: var(--neutral-950);
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
        }
      }
      &:not(:first-child){
        .benefits {
          margin-top: 40px;
        }
        .hint {
          margin-top: 24px;
        }
      }
      
      .content {
        display: grid;
        border: 1px solid var(--neutral-800);
        padding: 32px 22px;
        border-radius: 2px;
        font-size: ${Clamp(16, 20, 22)};
        grid-template-areas: "info" "price" "cta" "benefits" "hint";
      }
      .info {
        grid-area: info;
        .title {
          font-size: ${Clamp(20, 32, 30)};
          margin-bottom: 4px;
        }
        .subpages {
          border-top: 1px solid var(--neutral-800);
          border-bottom: 1px solid var(--neutral-800);
          padding: 16px 0%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: ${Clamp(24, 24, 32, 'px')};
        }
      }
      .price {
        grid-area: price;
        margin: ${Clamp(32, 32, 48, 'px')} 0 16px;
      }
      .cta {
        grid-area: cta;
        font-size: ${Clamp(16, 18, 20)};
        padding-left: 24px;
        padding-right: 24px;
      }
      .benefits {
        grid-area: benefits;
        p {
          margin-bottom: 16px;
        }
        ul {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px 24px;
        }
        li {
          list-style-type: none;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          svg {
            margin-top: 4px;
          }
          &.highlighted {
            span {
              color: var(--primary-400);
              background-image: var(--gradient);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            svg {
              stroke: url(#tick);
            }
          }
        }
      }
      .hint {
        grid-area: hint;
      }
      .benefits li,
      .hint {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 1299px){
    .wrapper {
      grid-template-columns: 1fr;
      gap: ${Clamp(32, 64, 64)};
      .item {
        &:first-child {
          .content {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            column-gap: 24px;
            grid-template-areas: "info benefits" "price benefits" "cta benefits";
            > .hint {
              display: none;
            }
          }
          grid-column: unset;
          .benefits {
            ul {
              grid-template-columns: 1fr;
            }
          }
          > .hint {
            display: block;
          }
        }
        &.mostPopular {
          margin-top: 40px;
        }
        &:not(:first-child){
          .benefits {
            margin-top: 0;
          }
          .hint {
            margin-top: 12px;
          }
        }
        .content {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          column-gap: 24px;
          grid-template-areas: "info benefits" "price benefits" "cta benefits";
        }
        .hint {
          margin-top: 12px;
        }
      }
    }
  }
  @media (max-width: 699px){
    .wrapper {
      .item {
        &:first-child {
          .content {
            grid-template-columns: 1fr;
            grid-template-areas: "info" "price" "cta" "benefits";
          }
        }
        .content {
          grid-template-columns: 1fr;
          grid-template-areas: "info" "price" "cta" "benefits";
          .benefits {
            margin-top: 24px;
          }
        }
        .hint {
          font-size: 14px;
        }
      }
    }
  }
`

export default Pricing;