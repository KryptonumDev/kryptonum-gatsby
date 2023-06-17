import React from "react";
import styled from "styled-components";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Clamp } from "../../../utils/functions";

const Services = ({
  data: {
    services_Heading,
    services_List,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{services_Heading}</DecorativeHeading>
      <div className="wrapper">
        {services_List.map((service, i) => (
          <div className="item" key={i}>
            <h3>{service.title}</h3>
            <p className="strong">{service.description}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin: 0 auto ${Clamp(32, 64, 96, "px")};
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${Clamp(32, 54, 64, "px")} 32px;
    max-width: 1066px;
    margin: 0 auto;
    counter-reset: counter;
    .item {
      counter-increment: counter;
      h3 {
        font-size: ${Clamp(20, 32, 30)};
        margin-bottom: ${Clamp(8, 16, 32, "px")};
        &::before {
          content: "/0" counter(counter);
          display: inline-block;
          width: ${Clamp(36, 72, 72, "px")};
          margin-right: ${Clamp(8, 16, 16, "px")};
        }
      }
      p {
        font-size: ${Clamp(16, 22, 22)};
      }
    }
  }
  @media (max-width: 899px){
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
`
 
export default Services;