import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const randomWidth = () => {
  return Math.floor(Math.random() * 71) + 30;
}

const Inspirations = ({ data }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">Chmura **inspiracji**:</DecorativeHeading>
      <ul className="wrapper">
        {data.map((inspiration, i) => (
          <Item key={i} data-width={randomWidth()}>{inspiration}</Item>
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
    display: flex;
    flex-wrap: wrap;
    li:not(:last-child){
      margin-bottom: 16px;
    }
    li {
      text-align: right;
    }
  }
`

const Item = styled.li`
  width: ${props => `${props['data-width']}%`}
`

export default Inspirations;