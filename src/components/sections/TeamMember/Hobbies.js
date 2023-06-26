import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Hobbies = ({ data }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">**#jaramsię**</DecorativeHeading>
      <ul className="wrapper">
        {data.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin-left: 0;
  }
  font-size: ${Clamp(20, 32, 30)};
  .wrapper {
    list-style-type: none;
    li:not(:last-child){
      margin-bottom: 16px;
    }
  }
`

export default Hobbies;