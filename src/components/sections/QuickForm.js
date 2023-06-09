import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import DecorativeHeading from '../atoms/DecorativeHeading';
import ReactMarkdown from "react-markdown";
import { Clamp } from "../../utils/functions";
import Form from "../organisms/forms/QuickContact";

const QuickForm = ({
  data: {
    heading,
    subheading,
    cta,
  },
  isPortableContent=false
}) => {
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
    <Wrapper className={isPortableContent ? 'portable' : ''}>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <ReactMarkdown className="subheading">{subheading}</ReactMarkdown>
      </header>
      <Form cta={cta} />
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

const Wrapper = styled.section`
  display: grid;
  position: relative;
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
    z-index: 5;
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
  .overlay{
    align-items: flex-start !important;
  }
  form{
    input:not([type="checkbox"]), textarea{
      background: var(--neutral-900) !important;
      position: relative;
      z-index: 2;
    }

    .legend{
      background: var(--neutral-900) !important;
      z-index: 3;
    }

    .border{
      z-index: 0;
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
  &.portable {
    padding: ${Clamp(32, 48, 48, 'px')} ${Clamp(16, 64, 64, 'px')};
    margin: 64px 0;
    display: block;
    form {
      margin: 32px 0px;
    }
    .info {
      display: block;
      .person {
        margin-top: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px 12px;
        .img {
          width: 64px;
          height: 64px;
        }
      }
    }
    @media (max-width: 499px){
      padding-left: var(--pageMargin);
      padding-right: var(--pageMargin);
      margin: 0 calc(var(--pageMargin) * -1);
      margin-top: 32px;
    }
    &:last-child{
      margin-bottom: 0;
    }
  }
`

export default QuickForm;