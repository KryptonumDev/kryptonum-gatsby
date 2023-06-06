import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp, removeMarkdown } from '../../utils/functions'
import { Clock, Cursor } from "../atoms/Icons";
import Button from '../atoms/Button';

const Faq = ({heading}) => {
  const { global: { faq } } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        faq {
          heading
          hint
          price {
            title
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
        }
      }
    }
  `);
  const questions = Array.from([
    faq.price,
  ]);
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
        {questions.map((question, i) => (
          <details key={i}>
            <summary>{question.title}</summary>
            <p>
              Requires a computer running an operating system. The computer must have some
              memory and ideally some kind of long-term storage. An input device as well
              as some form of output device is recommended.
            </p>
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
    .hint {
      display: flex;
      gap: 8px;
      font-size: ${Clamp(16, 22, 22)};
    }
  }
  details {
    @keyframes details-show {
      from {
        opacity: 0;
        transform: translateY(-13px);
      }
    }
    &[open]{
      p {
        animation: details-show .3s;
      }
    }
  }
`
 
export default Faq;