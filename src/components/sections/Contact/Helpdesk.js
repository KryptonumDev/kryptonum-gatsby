import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import HelpDesk_Form from "./Helpdesk_Form";

const Helpdesk = ({
  data: {
    helpDesk_Heading,
    helpDesk_Subheading,
    helpDesk_Paragraph,
    helpDesk_FormTitle,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{helpDesk_Heading}</DecorativeHeading>
        <ReactMarkdown className="subheading">{helpDesk_Subheading}</ReactMarkdown>
        <ReactMarkdown className="paragraph">{helpDesk_Paragraph}</ReactMarkdown>
      </header>
      <div className="form">
        <ReactMarkdown components={{ 'p': 'h3' }}>{helpDesk_FormTitle}</ReactMarkdown>
        <HelpDesk_Form />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  .subheading {
    font-size: ${Clamp(20, 32, 40)};
    margin-bottom: 24px;
  }
  .paragraph {
    font-size: ${Clamp(16, 22, 22)};
    p:not(:last-child){
      margin-bottom: 16px;
    }
  }
  h2, h3 {
    margin-bottom: 24px;
  }
  @media (max-width: 1049px){
    grid-template-columns: 1fr;
    .form {
      max-width: ${500/16}rem;
    }
  }
`

export default Helpdesk;