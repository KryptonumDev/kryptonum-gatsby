import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const ExtendedList = ({
  data: {
    heading,
    subtitle,
    extendedList
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ReactMarkdown className="subtitle">{subtitle}</ReactMarkdown>
      <div className="list">
        {extendedList.map((list, i) => (
          <div className="listItem" key={i}>
            <ReactMarkdown className="paragraph">{list.paragraph}</ReactMarkdown>
            <div className="wrapper">
              {list.item.map((item, i) => (
                <div className="wrapperItem" key={i}>
                  <GatsbyImage
                    image={item.img.asset.gatsbyImageData}
                    alt={item.img.asset.altText || ''}
                    className="img"
                  />
                  <ReactMarkdown className="paragraph">{item.paragraph}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin-bottom: ${Clamp(28, 48, 72, 'px')}
  }
  h2, .subtitle, .paragraph {
    max-width: ${734/16}rem;
  }
  .subtitle {
    font-size: ${Clamp(20, 32, 30)};
    margin-bottom: ${Clamp(24, 32, 32, 'px')};
  }
  .paragraph {
    font-size: ${Clamp(16, 22, 22)};
  }
  .list {
    display: grid;
    gap: ${Clamp(48, 72, 96, 'px')};
    .listItem {
      > .paragraph {
        margin-bottom: ${Clamp(24, 32, 32, 'px')};
      }
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 999px){
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 549px){
      grid-template-columns: 1fr;
    }
    gap: 32px 24px;
    .wrapperItem {
      .img {
        margin-bottom: ${Clamp(8, 16, 24, 'px')};
      }
    }
  }
`

export default ExtendedList;