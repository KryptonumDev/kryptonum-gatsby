import React  from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import TagCloud from "@frank-mayer/react-tag-cloud"

const Inspirations = ({ data }) => {

  return (
    <Wrapper>
      <DecorativeHeading type="h2">Chmura **inspiracji**:</DecorativeHeading>
      <TagCloud
        className="wrapper"
        options={(w) => ({
          radius: w.innerWidth >= 768 ? 768 / 2 : (w.innerWidth / 2) - 16,
          maxSpeed: "fast",
        })}
        onClickOptions={{ passive: true }}
      >
        {data}
      </TagCloud>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin-left: 0;
  }
  font-size: ${Clamp(20, 32, 30)};
  .wrapper {
    padding: 55px 0;
    overflow: hidden;
    margin: 0 calc(var(--pageMargin) * -1);
  }
`
export default Inspirations;