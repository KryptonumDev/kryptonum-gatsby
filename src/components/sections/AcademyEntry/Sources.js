import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Sources = ({ heading, list }) => {
  const showRootDomain = list.map(item => {
    const domain = new URL(item.href).hostname.replace('www.', '');
    return {
      href: domain
    };
  });
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <div className="wrapper">
        {list.map((item, i) => (
          <a href={item.href} target="_blank" rel="noreferrer" key={i}>
            <p>{item.text}</p>
            <span>{showRootDomain[i].href}</span>
          </a>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin-bottom: ${Clamp(28, 48, 72, 'px')}
  }
  .wrapper {
    display: grid;
    gap: 32px;
    @media (min-width: 899px) {
      grid-template-columns: 1fr 1fr;
    }
    a {
      p {
        font-size: ${Clamp(20, 30, 30)};
      }
      span {
        font-size: ${Clamp(16, 22, 22)};
      }
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: space-between;
      padding: ${Clamp(20, 32, 32, 'px')};
      border: 1px solid var(--neutral-900);
      border-radius: 2px;
    }
  }
`

export default Sources;