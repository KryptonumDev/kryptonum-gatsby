import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../../atoms/DecorativeHeading';
import Button from '../../atoms/Button';
import ReactMarkdown from "react-markdown";
import { Clamp } from "../../../utils/functions";

const QuickForm = ( { data: { heading, subheading, cta }} ) => {
  const {
    global : {
      quickForm_Paragraph,
      quickForm_Person,
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
          tel
        }
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
            <span>Zgadzam się na <Link to="/pl/polityka-prywatnosci">przetwarzanie moich danych</Link></span>
          </label>
        </div>
        <Button theme="primary">{cta}</Button>
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
          {quickForm_Person.tel && (
            <a href={`tel:${quickForm_Person.tel.replace(/\s/g, '')}`}>{quickForm_Person.tel}</a>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  margin: 64px 0;
  &:last-child{
    margin-bottom: 0;
  }
  background-color: var(--neutral-900);
  padding: ${Clamp(32, 48, 48, 'px')} ${Clamp(16, 64, 64, 'px')};
  h2 {
    margin-bottom: 12px;
  }
  .subheading {
    font-size: ${Clamp(20, 32, 30)};
  }
  .info {
    padding-top: ${Clamp(16, 20, 24, 'px')};
    border-top: 1px solid var(--neutral-800);
    font-size: ${Clamp(20, 32, 30)};
    .person {
      margin-top: 8px;
      width: fit-content;
      display: flex;
      flex-wrap: wrap;
      gap: 8px 12px;
      align-items: center;
    }
    a {
      text-decoration: none;
    }
  }
  form {
    margin: 32px 0;
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
                    var(--gradient) border-box;
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
            background: var(--gradient);
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
    .info {
      .img {
        width: 64px;
      }
    }
  }
  @media (max-width: 499px){
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