import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";

const Pricing = ({
  data: {
    pricing_Paragraph,
    pricing_Paragraph2,
    pricing_Cta,
  }
}) => {
  return (
    <Wrapper>
      <ReactMarkdown className="paragraph">{pricing_Paragraph}</ReactMarkdown>
      <div>
        <ReactMarkdown className="paragraph2">{pricing_Paragraph2}</ReactMarkdown>
        <Button theme={pricing_Cta.theme} to={pricing_Cta.href}>{pricing_Cta.text}</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  .paragraph {
    font-size: ${Clamp(20, 32, 30)};
  }
  .paragraph2 {
    font-size: ${Clamp(16, 22, 22)};
    p:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }
  .cta {
    margin-top: ${Clamp(32, 40, 48, 'px')}
  }
  @media (max-width: 949px){
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export default Pricing;