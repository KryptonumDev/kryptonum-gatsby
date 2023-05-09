import React from "react";
import styled from "styled-components";
import { transformBToStrong } from "../../../utils/functions";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Conquest = ({data}) => {
  const {conquest_Heading, conquest_Claim, conquest_Paragraph, conquest_SecondClaim, conquest_Cta} = data;
  console.log(conquest_SecondClaim)
  return (
    <Wrapper>
      <DecorativeHeading type="h2" text={conquest_Heading} />
      <p dangerouslySetInnerHTML={{__html: transformBToStrong(conquest_Claim)}}></p>
      <p>{conquest_Paragraph}</p>
      <div dangerouslySetInnerHTML={{__html: conquest_SecondClaim.data.childMarkdownRemark.html}}></div>
      <Button
        theme={conquest_Cta.theme}
        text={conquest_Cta.text}
        to={conquest_Cta.href}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`

`
 
export default Conquest;