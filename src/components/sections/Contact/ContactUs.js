import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const ContactUs = ({
  data: {
    contact_Email,
    contact_Tel,
    contact_Address,
    contact_Img,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{contact_Email}</DecorativeHeading>
        <ReactMarkdown className="tel" components={{ 'p': 'h3' }}>{contact_Tel}</ReactMarkdown>
        <ReactMarkdown className="address">{contact_Address}</ReactMarkdown>
      </header>
      <GatsbyImage
        image={contact_Img.asset.gatsbyImageData}
        alt={contact_Img.asset.altText || ''}
        className="img"
        objectFit="contain"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    padding: ${Clamp(24, 64, 72, 'px')} ${Clamp(16, 32, 72, 'px')};
    padding-right: 0;
    h2 {
      margin-bottom: ${Clamp(16, 24, 32, 'px')};
    }
    h3 {
      margin-bottom: ${Clamp(16, 24, 24, 'px')};
    }
    p {
      font-size: ${Clamp(16, 30, 30)};
    }
  }
  border-radius: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 32px;
  background-color: var(--neutral-900);
  margin-top: 48px;
  .img {
    margin-top: -48px;
    margin-right: -50%;
  }
  @media (max-width: 1249px){
    header {
      background-color: var(--neutral-900);
      padding: ${Clamp(24, 64, 64, 'px')} ${Clamp(16, 32, 32, 'px')};
      border-radius: 2px;
    }
    border-radius: unset;
    grid-template-columns: 1fr;
    gap: 0;
    background-color: unset;
    margin-top: unset;
    .img {
      max-width: 500px;
      margin: 0 auto;
      order: -1;
    }
  }
  @media (max-width: 499px){
    header {
      margin: 0 calc(var(--pageMargin) * -1);
      padding: 24px 16px;
      word-break: break-word;
    }
  }
`

export default ContactUs;