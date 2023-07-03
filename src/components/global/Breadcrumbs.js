import React from "react"
import styled from "styled-components"

const Icon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 12L10.5 8L6.5 4" stroke="#EFF0F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export default function Breadcrumbs({ data }) {
  return (
    <Wrapper className="breadcrumbs">
      <ul>
        <li><a href="/pl">Strona główna</a></li>
        <li><Icon /></li>
        {data?.map((el, index) => (
          <>
            <li><a href={el.url}>{el.name}</a></li>
            {data.length - 1 !== index && <li><Icon /></li>}
          </>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  ul{
    display: flex;
    align-items: center;
    gap: 8px;

    li{
      list-style: none;
      height: fit-content;

      svg{
        display: block;
      }
    }
  }

  *{
    font-size: 22px;
    color: var(--neutral-200, #EFF0F3);
  }

  &:last-child{
  }
`