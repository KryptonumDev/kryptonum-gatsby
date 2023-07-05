import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import LargeList from "../LargeList";

const Audit = ({
  data: {
    audit_Heading,
    audit_Paragraph,
    audit_Paragraph2,
    audit_Title,
    audit_List,
    audit_Paragraph3,
    audit_Paragraph4,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2" className="heading">{audit_Heading}</DecorativeHeading>
      <div className="copy">
        <ReactMarkdown className="paragraph">{audit_Paragraph}</ReactMarkdown>
        <ReactMarkdown className="paragraph2">{audit_Paragraph2}</ReactMarkdown>
      </div>
      <LargeList
        title={audit_Title}
        list={audit_List}
        paragraph={audit_Paragraph3}
        paragraph2={audit_Paragraph4}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .heading {
    margin-bottom: ${Clamp(28, 48, 48, 'px')}
  }
  .copy {
    display: grid;
    gap: 16px 32px;
    p:not(:last-child){
      margin-bottom: 16px;
    }
    @media (min-width: 949px){
      grid-template-columns: 1fr 1fr;
    }
  }
  .paragraph {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
  }
`

export default Audit;