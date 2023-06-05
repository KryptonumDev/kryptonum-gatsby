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
    .item:first-child,
    .item.mostPopular {
      .title {
        font-weight: 400;
        color: var(--primary-400);
        background-image: var(--gradient);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .item:not(:first-child, .mostPopular):not(:hover){
      .cta {
        filter: grayscale(100%);
      }
    }
    .item:first-child {
      grid-column: 4/1;
      background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
      var(--gradient) border-box;
      border: 1px solid transparent;
      padding: 48px;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 32px;
      align-items: flex-start;
      grid-template-areas: "a d d" "e b ." "e c .";
      .benefits {
        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 24px;
        }
      }
    }
    .item.mostPopular {
      background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
      var(--gradient) border-box;
      border: 1px solid transparent;
      position: relative;
      .badge {
        position: absolute;
        left: -1px;
        top: -1px;
        transform: translateY(-100%);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 24px;
        background: var(--gradient);
        color: var(--neutral-950);
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
      }
      border-top-left-radius: 0;
    }
    .item {
      display: grid;
      border: 1px solid var(--neutral-800);
      border-radius: 2px;
      padding: 32px 22px;
      font-size: ${Clamp(16, 20, 22)};
      grid-template-areas: "a" "b" "c" "d" "e";
      .info {
        grid-area: a;
      }
      .title {
        font-size: ${Clamp(20, 32, 30)};
      }
      .subpages {
        border-top: 1px solid var(--neutral-800);
        border-bottom: 1px solid var(--neutral-800);
        padding: 16px 0%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .price {
        grid-area: b;
      }
      .cta {
        grid-area: c;
        font-size: ${Clamp(16, 18, 20)};
      }
      .benefits {
        grid-area: d;
        p {
          margin-bottom: 16px;
        }
        li {
          list-style-type: none;
          display: flex;
          align-items: center;
          gap: 8px;
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
          &:not(:last-child){
            margin-bottom: 12px;
          }
        }
      }
      .hint {
        grid-area: e;
      }
      .benefits li,
      .hint {
        font-size: 16px;
      }
    }
  }
`

export default Pricing;