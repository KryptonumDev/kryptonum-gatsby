import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions'
import { Cursor } from "../atoms/Icons";
import Faq4Grid from "../organisms/faq/Faq4Grid";
import FaqPayment from "../organisms/faq/FaqPayment";
import FaqTime from "../organisms/faq/FaqTime";
import FaqInfo from "../organisms/faq/FaqInfo";
import FaqWhy from "../organisms/faq/faqWhy";
import FaqCopy from "../organisms/faq/FaqCopy";
import FaqWordpress from "../organisms/faq/FaqWordpress";

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
          info {
            question
            paragraph
            firstHeading
            firstList
            secondHeading
            secondList
            thirdHeading
            thirdList
            summary
          }
          why {
            question
            heading
            paragraph
            list
            summary
          }
          cooperation {
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
          logo {
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
          seo {
            question
            heading
            paragraph
            secondParagraph
            subheading
          }
          copy {
            question
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED, width: 700)
              }
            }
            heading
            paragraph
            summary
          }
          wordpress {
            question
            heading
            paragraph
            subheading
            secondParagraph
            cta {
              theme
              href
              text
            }
            summary
            summaryCta {
              theme
              href
              text
            }
          }
        }
      }
    }
  `);

  const { price, payment, time, info, why, cooperation, logo, seo, copy, wordpress } = faq;

  const faqs = [
    {
      question: price.question,
      answer: <Faq4Grid data={{
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
    {
      question: info.question,
      answer: <FaqInfo data={{
        paragraph: info.paragraph,
        firstHeading: info.firstHeading,
        firstList: info.firstList,
        secondHeading: info.secondHeading,
        secondList: info.secondList,
        thirdHeading: info.thirdHeading,
        thirdList: info.thirdList,
        summary: info.summary,
      }} />,
    },
    {
      question: why.question,
      answer: <FaqWhy data={{
        heading: why.heading,
        paragraph: why.paragraph,
        list: why.list,
        summary: why.summary,
      }} />,
    },
    {
      question: cooperation.question,
      answer: <Faq4Grid data={{
        heading: cooperation.heading,
        paragraph: cooperation.paragraph,
        secondParagraph: cooperation.secondParagraph,
        subheading: cooperation.subheading,
        cta: cooperation.cta,
      }} />,
    },
    {
      question: logo.question,
      answer: <Faq4Grid data={{
        heading: logo.heading,
        paragraph: logo.paragraph,
        secondParagraph: logo.secondParagraph,
        subheading: logo.subheading,
        cta: logo.cta,
      }} />,
    },
    {
      question: seo.question,
      answer: <Faq4Grid data={{
        heading: seo.heading,
        paragraph: seo.paragraph,
        secondParagraph: seo.secondParagraph,
        subheading: seo.subheading,
      }} />,
    },
    {
      question: copy.question,
      answer: <FaqCopy data={{
        img: copy.img,
        heading: copy.heading,
        paragraph: copy.paragraph,
        summary: copy.summary,
      }} />,
    },
    {
      question: wordpress.question,
      answer: <FaqWordpress data={{
        heading: wordpress.heading,
        paragraph: wordpress.paragraph,
        subheading: wordpress.subheading,
        secondParagraph: wordpress.secondParagraph,
        cta: wordpress.cta,
        summary: wordpress.summary,
        summaryCta: wordpress.summaryCta,
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
            {faq.answer}
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
    &:nth-child(-n+9) summary p::before {
      content: "/0" counter(counter);
    }
    summary {
      &::marker,
      &::-webkit-details-marker {
        display: none;
      }
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
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
        display: grid;
        grid-template-columns: auto 1fr;
        &::before {
          content: "/" counter(counter);
          display: inline-block;
          width: 2rem;
          font-size: 1rem;
          margin-top: 2px;
          margin-right: ${Clamp(8, 16, 16, "px")};
        }
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