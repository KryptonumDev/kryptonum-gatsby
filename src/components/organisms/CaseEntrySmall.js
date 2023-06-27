import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function CaseStudy({ data: { img, name, slug } }) {
  return (
    <Wrapper to={`/pl/portfolio/${slug.current}`}>
      <GatsbyImage image={img.asset.gatsbyImageData} alt={img.asset.altText || ''} />
      <p>{name}</p>
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
margin-top: 48px;
  padding: 16px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  border-top: 1px solid var(--neutral-800, #212123);
  border-bottom: 1px solid var(--neutral-800, #212123);

  p{
    margin-top: 16px;
    font-size: 1.875rem;  
  }
`