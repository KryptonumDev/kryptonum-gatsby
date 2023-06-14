import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";

const Audit = ({
  data: {
    audit_Paragraph,
    audit_Paragraph2,
    audit_Paragraph3,
    audit_Cta,
    audit_Img
  }
}) => {
  return (
    <Wrapper>
      <ReactMarkdown className="paragraph">{audit_Paragraph}</ReactMarkdown>
      <ReactMarkdown className="paragraph2">{audit_Paragraph2}</ReactMarkdown>
      <div className="column">
        <div className="copy">
          <ReactMarkdown className="paragraph3">{audit_Paragraph3}</ReactMarkdown>
          <Button theme={audit_Cta.theme} to={audit_Cta.href}>{audit_Cta.text}</Button>
        </div>
        <GatsbyImage
          image={audit_Img.asset.gatsbyImageData}
          alt={audit_Img.asset.altText}
          className="img"
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .paragraph, .paragraph3 p:first-child {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2, .paragraph3 {
    font-size: ${Clamp(16, 22, 22)};
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  .column {
    margin-top: ${Clamp(28, 48, 72, 'px')};
    grid-column: 3/1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    .copy {
      p:not(:last-of-type) {
        margin-bottom: 24px
      }
      .cta {
        margin-top: 40px;
      }
    }
    .img {
      margin-left: 112px;
    }
  }
`

export default Audit;