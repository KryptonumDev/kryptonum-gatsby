import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions'
import { Cursor } from "../atoms/Icons";
import FaqPrice from "../organisms/faq/FaqPrice";
import FaqPayment from "../organisms/faq/FaqPayment";
import FaqTime from "../organisms/faq/FaqTime";

const Faq = ( { heading } ) => {
  const { global: { faq } } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        faq {
          heading
          hint
          price {
            question
            heading
            paragraph
            secondParagraph
            subheading
            cta {
              theme
              text
              href
            }
          }
          payment {
            question
            heading
            paragraph
            secondParagraph
            thirdParagraph
            text
            list
          }
          time {
            question
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED, width: 700)
              }
            }
            heading
            paragraph
            cta {
              theme
              href
              text
            }
            listHeading
            list
          }
        }
      }
    }
  `);

  const { price, payment, time } = faq;

  const faqs = [
    {
      question: price.question,
      answer: <FaqPrice data={{
        heading: price.heading,
        paragraph: price.paragraph,
        secondParagraph: price.secondParagraph,
        subheading: price.subheading,
        cta: price.cta,
      }} />,
    },
    {
      question: payment.question,
      answer: <FaqPayment data={{
        heading: payment.heading,
        paragraph: payment.paragraph,
        secondParagraph: payment.secondParagraph,
        thirdParagraph: payment.thirdParagraph,
        text: payment.text,
        list: payment.list,
      }} />,
    },
    {
      question: time.question,
      answer: <FaqTime data={{
        img: time.img,
        heading: time.heading,
        paragraph: time.paragraph,
        cta: time.cta,
        listHeading: time.listHeading,
        list: time.list,
      }} />,
    },
  ];

  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading || faq.heading}</DecorativeHeading>
        <p className="hint">
          <Cursor />
          <span>{faq.hint}</span>
        </p>
      </header>
      <div className="wrapper">
        {faqs.map((faq, i) => (
          <details key={i}>
            <summary>
              <p>{faq.question}</p>
              <div className="plus-icon"><span></span><span></span></div>
            </summary>
            <div className="answer">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    display: grid;
    grid-template-columns: auto auto;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: ${Clamp(24, 32, 72, 'px')};
    .hint {
      display: flex;
      gap: 8px;
      font-size: ${Clamp(16, 22, 22)};
    }
    @media (max-width: 999px){
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }
  counter-reset: counter;
  details {
    counter-increment: counter;
    summary {
      &::marker,
      &::-webkit-details-marker {
        display: none;
      }
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 34px 0;
      position: relative;
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: var(--neutral-800);
      }
      &::after {
        transform: scaleX(0);
        transform-origin: right;
        background-image: var(--gradient);
        transition: transform .8s var(--easing);
      }
      cursor: pointer;
      p {
        &::before {
          content: "/" counter(counter);
          display: inline-block;
          width: 2rem;
          font-size: 1rem;
          margin-right: ${Clamp(8, 16, 16, "px")};
        }
      }
      &:nth-child(-n+9) p::before {
        content: "/0" counter(counter);
      }
      .plus-icon {
        span {
          display: block;
          width: 22px;
          height: 2px;
          background-color: var(--neutral-200);
          border-radius: 4px;
          &:nth-child(2) {
            transform: translateY(-2px) rotate(90deg);
            transition: transform .3s;
          }
        }
      }
    }
    .answer {
      margin: 48px 0 96px;
    }
    &[open]{
      summary {
        .plus-icon span:nth-child(2) {
          transform: translateY(-2px) rotate(90deg) scaleX(0);
        }
        &::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
      .answer {
        animation: details-show .3s;
      }
    }
    @keyframes details-show {
      from {
        opacity: 0;
        transform: translateY(-13px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`
 
export default Faq;