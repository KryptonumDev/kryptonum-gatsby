import React from "react";
import styled from "styled-components";
import PortableContent from "../../organisms/PortableContent";


const Content = ({ data }) => {
  return (
    <Wrapper>
      <PortableContent data={data} />
    </Wrapper>
  );
}

const Wrapper = styled.section`

`

export default Content;