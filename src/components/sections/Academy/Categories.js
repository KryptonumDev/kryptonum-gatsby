import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Categories = ({ categories, slug }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2" className="heading">Co Cię **interesuje**?</DecorativeHeading>
      <div className="categories">
        {categories.nodes.map((category, i) => (
          <Link to={`${slug}${category.slug.current}`} key={i}>{category.name}</Link>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 123px 0;
  .heading {
    margin: 0 auto;
  }
  position: relative;
  .categories {
    a {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: ${Clamp(14, 28, 30)};
      min-width: 25%;
      max-width: 100%;
      padding: 10px ${Clamp(8, 24, 48, 'px')};
      display: block;
      background-color: var(--neutral-900);
      border-radius: 2px;
      text-align: center;
      &[aria-current="page"] {
        background-image: var(--gradient);
        color: var(--neutral-950);
      }
    }
  }
  @media (min-width: 1100px){
    .categories {
      a {
        position: absolute;
        &:nth-of-type(1){
          left: 50%;
          top: 0;
          transform: translate(-50%, 0);
        }
        &:nth-of-type(2){
          right: 0;
          top: 50%;
          transform: translate(0, -50%);
        }
        &:nth-of-type(3){
          left: 50%;
          bottom: 0;
          transform: translate(-50%, 0);
        }
        &:nth-of-type(4){
          left: 0;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
    }
  }
  @media (max-width: 1099px){
    padding: 0;
    .heading {
      margin: 0 0 ${Clamp(28, 42, 42, 'px')} 0;
    }
    .categories {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${Clamp(12, 24, 24, 'px')};
      a {
        
      }
    }
  }
`

export default Categories;