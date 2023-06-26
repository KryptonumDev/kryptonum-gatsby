import React from "react";
import styled from "styled-components";
import { PortableText } from '@portabletext/react'

const myPortableTextComponents = {
  types: {
    image: ({value}) => <img src={value.imageUrl} />,
    callToAction: ({value, isInline}) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}

const Content = ({ data }) => {
  return (
    <Wrapper>
      <PortableText value={data} components={myPortableTextComponents} />
    </Wrapper>
  );
}

const Wrapper = styled.section`

`

export default Content;