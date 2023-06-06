import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../atoms/DecorativeHeading';
import Button from '../atoms/Button';
import ReactMarkdown from "react-markdown";
import { Clamp } from "../../utils/functions";

const QuickForm = ( { data: { heading, subheading, cta } } ) => {
  const {
    global : {
      quickForm_Paragraph,
      quickForm_Person,
      quickForm_Tel
    }
  } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        quickForm_Paragraph
        quickForm_Person {
          name
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 96, height: 96)
            }
          }
        }
        quickForm_Tel
      }
    }
  `)
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <ReactMarkdown className="subheading">{subheading}</ReactMarkdown>
      </header>
      <form action="post">
        <div className="input">
          <label>
            <span>Imię</span>
            <input type="text" />
          </label>
        </div>
        <div className="input">
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
        </div>
        <div className="input">
          <label>
            <span>Telefon</span>
            <input type="tel" />
          </label>
        </div>
        <div className="input legal">
          <label>
            <input type="checkbox" name="legal" />
            <span>Zgadzam się na <Link to="/polityka-prywatnosci">przetwarzanie moich danych</Link></span>
          </label>
        </div>
        <Button>{cta}</Button>
      </form>
      <div className="info">
        <p>{quickForm_Paragraph}</p>
        <div className="person">
          <p className="strong">{quickForm_Person.name}</p>
          <GatsbyImage
            image={quickForm_Person.img.asset.gatsbyImageData}
            alt={quickForm_Person.img.asset.altText || ''}
            class="img person-border"
          />
          <a href={`tel:${quickForm_Tel.replace(/\s/g, '')}`}>{quickForm_Tel}</a>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 32px;
  background-color: var(--neutral-900);
  padding: ${Clamp(32, 48, 64, 'px')} ${Clamp(16, 64, 96, 'px')};
  h2 {
    margin-bottom: 12px;
  }
  .subheading {
    font-size: ${Clamp(20, 32, 30)};
  }
  .info {
    grid-column: 3/1;
    padding-top: ${Clamp(16, 20, 24, 'px')};
    border-top: 1px solid var(--neutral-800);
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 48px;
    justify-content: center;
    align-items: center;
    font-size: ${Clamp(20, 32, 30)};
    .person {
      display: grid;
      grid-template-columns: repeat(3, auto);
      column-gap: 12px;
      align-items: center;
    }
  }
  form {
    .input {
      width: 100%;
      margin-bottom: 32px;
      span {
        display: inline-block;
        margin-left: 12px;
        padding: 0 16px;
        background-color: var(--neutral-900);
        transform: translateY(50%);
        pointer-events: none;
      }
      input {
        width: 100%;
        background: linear-gradient(var(--neutral-900), var(--neutral-900)) padding-box,
          linear-gradient(90deg, #90F4E8, #2DD282) border-box;
        border: 2px solid var(--neutral-700);
        border-radius: 2px;
        height: 58px;
        outline: none;
        padding: 14px 16px;
        transition: border-color .1s;
        &:hover {
          border-color: var(--neutral-300);
        }
        &:focus {
          border-color: transparent;
        }
      }
      &.legal {
        label {
          display: grid;
          grid-template-columns: auto 1fr;
        }
        span {
          transform: unset;
          pointer-events: auto;
          margin-left: 8px;
          padding: 0;
          margin-top: 2px;
        }
        input {
          cursor: pointer;
          width: 28px;
          height: 28px;
          padding: 0;
          background-color: transparent;
          &:checked {
            background: linear-gradient(90deg, #90F4E8, #2DD282);
            border: none;
          }
        }
        a {
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 1329px){
    grid-template-columns: 1fr;
    gap: 32px;
    .info {
      grid-column: unset;
      grid-template-columns: auto;
      justify-content: flex-start;
      gap: 4px 0;
      .img {
        width: 64px;
      }
    }
  }
  @media (max-width: 449px){
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 calc(var(--pageMargin) * -1);
    .info {
      .img {
        width: 48px;
      }
    }
  }
`

export default QuickForm;