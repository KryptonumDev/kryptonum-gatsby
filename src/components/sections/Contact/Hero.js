import React from "react"
import styled from "styled-components"
import Form from "../../organisms/forms/FastContact"
import DecorativeHeading from "../../atoms/DecorativeHeading"
import ReactMarkdown from "react-markdown"
import { GatsbyImage } from "gatsby-plugin-image"
import { Clamp } from "../../../utils/functions"
import { Link } from "gatsby"

const Hero = ({ heading, subheading, contact }) => {
  return (
    <Wrapper>
      <div>
        <DecorativeHeading>{heading}</DecorativeHeading>
        <ReactMarkdown className="subheading">{subheading}</ReactMarkdown>
        <Form />
      </div>
      <div className="contact">
        {contact.map((item, i) => (
          <div className="item" key={i}>
            <p>{item.title}</p>
            <div>
              <Link to={`/pl/zespol/${item.person.slug.current}`}>
                <GatsbyImage
                  image={item.person.img.asset.gatsbyImageData}
                  alt={item.person.img.asset.altText || ''}
                  className="person-border"
                />
              </Link>
              <p>
                {item.person.email && (
                  <a href={`mailto:${item.person.email}`}>{item.person.email}</a>
                )}
                {item.person.tel && (
                  <a href={`tel:${item.person.tel?.replace(/\s/g, '')}`}>{item.person.tel}</a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  @media (min-width: 1199px){
    grid-template-columns: 1fr 1fr;
  }
  align-items: start;
  gap: 64px 32px;
  form {
    max-width: 520px;
  }
  .subheading {
    margin: 32px 0;
    font-size: ${Clamp(20, 32, 32)};
  }
  .contact {
    display: grid;
    row-gap: ${Clamp(32, 48, 64, 'px')};
    .item {
      > p {
        font-size: ${Clamp(20, 32, 32)};
        margin-bottom: 16px;
      }
      > div {
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: 16px;
        align-items: center;
        p {
          font-size: ${Clamp(16, 26, 28)};
          a {
            display: block;
            &:first-child {
              margin-bottom: 4px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1198px){
    .contact .item > div {
      grid-template-columns: 144px 1fr;
    }
  }
  @media (max-width: 499px){
    .contact .item > div {
      grid-template-columns: 96px 1fr;
    }
  }
  @media (max-width: 349px){
    .contact .item > div {
      grid-template-columns: 64px 1fr;
    }
  }
`

export default Hero;