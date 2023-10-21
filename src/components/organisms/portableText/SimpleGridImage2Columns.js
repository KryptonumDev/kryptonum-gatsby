import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import { ImageComponent } from "../PortableContent";

const SimpleGridImage2Columns = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item, i) => (
        <ImageComponent value={item} key={i} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 32px 0 24px;
  display: grid;
  gap: ${Clamp(16, 20, 24, 'px')};
  @media (min-width: 500px){
    grid-template-columns: 1fr 1fr;
  }
`

export default SimpleGridImage2Columns;