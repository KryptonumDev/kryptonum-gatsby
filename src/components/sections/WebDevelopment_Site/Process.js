import { GatsbyImage } from "gatsby-plugin-image";
import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import QuickForm from "../QuickForm";
import Roadmap from '../Roadmap';

const Process = ({
  data: {
    process_Heading,
    process_List,
    roadmap_Heading,
    roadmap_List,
    quickForm,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <DecorativeHeading>{process_Heading}</DecorativeHeading>
      </header>
      <div className="wrapper">
        {process_List.map((item, i) => (
          <Fragment key={i}>
            <div className="item">
              <ReactMarkdown className="claim" components={{ p: 'h3' }}>{item.claim}</ReactMarkdown>
              <ReactMarkdown className="heading" components={{ p: 'h4' }}>{item.heading}</ReactMarkdown>
              <ReactMarkdown className="subheading">{item.subheading}</ReactMarkdown>
              <GatsbyImage
                image={item.img.asset.gatsbyImageData}
                alt={item.img.asset.altText || ''}
                className="img"
              />
              <ReactMarkdown className="paragraph">{item.paragraph}</ReactMarkdown>
            </div>
            {i === 2 && (
              <>
                <Roadmap
                  heading={roadmap_Heading}
                  list={roadmap_List}
                />
                <QuickForm
                  data={quickForm}
                />
              </>
            )}
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    margin-bottom: ${Clamp(28, 48, 72, 'px')};
  }
  .wrapper {
    counter-reset: counter;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Clamp(64, 64, 80, 'px')};
  }
  .item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 48px 32px;
    counter-increment: counter;
    .claim {
      grid-column: 3/1;
      font-size: ${Clamp(28, 42, 48)};
      padding: ${Clamp(24, 48, 64, 'px')} ${Clamp(16, 48, 64, 'px')};
      border: 1px solid var(--neutral-800);
      text-align: center;
    }
    .heading {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 16px;
      font-size: ${Clamp(20, 32, 30)};
      &::before {
        content: counter(counter);
        background: linear-gradient(var(--neutral-950), var(--neutral-950)) padding-box,
                    var(--gradient) border-box;
        border: 1px solid transparent;
        border-radius: 50%;
        width: ${Clamp(40, 64, 64, "px")};
        height: ${Clamp(40, 64, 64, "px")};
        font-size: ${Clamp(16, 28, 30)};
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .subheading,
    .paragraph {
      font-size: ${Clamp(16, 22, 22)};
    }
    .paragraph {
      align-self: end;
      p:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
  @media (max-width: 899px){
    .item {
      grid-template-columns: 1fr;
      gap: 24px;
      .claim {
        grid-column: unset;
      }
    }
  }
`

export default Process;