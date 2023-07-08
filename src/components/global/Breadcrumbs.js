import { Link } from "gatsby"
import React, { Fragment } from "react"
import styled from "styled-components"
import { Clamp, removeMarkdown } from "../../utils/functions"

const Icon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 12L10.5 8L6.5 4" stroke="#EFF0F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const createBreadcrumbs = (breadCrumbs) => {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": 'Kryptonum',
      "item": 'https://kryptonum.eu/pl'
    }
  ]

  breadCrumbs.forEach((el, index) => {
    items.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": el.name,
      "item": 'https://kryptonum.eu/' + el.link
    })
  });

  return items
}

export default function Breadcrumbs({ portfolio, data }) {
  if (data?.length < 1 || !data) return null

  const breadCrumbsItems = createBreadcrumbs(data)
  return (
    <Wrapper className={portfolio ? 'portfolio breadcrumbs' : "breadcrumbs"}>
      {breadCrumbsItems.length > 1 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadCrumbsItems
          })}
        </script>
      )}
      <ul>
        <li><a href="/pl">Strona główna</a></li>
        <li><Icon /></li>
        {data?.map((el, index) => (
          <Fragment key={index}>
            {data.length - 1 !== index ? <>
              <li><Link to={el.link}>{removeMarkdown(el.name)}</Link></li>
              <li><Icon /></li>
            </> :
              <li>{removeMarkdown(el.name)}</li>
            }
          </Fragment>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  max-width: ${680/16}rem;
  &:not(.portfolio){
    margin-bottom: ${Clamp(16, 24, 24, 'px')};
    + * {
      margin-top: ${Clamp(-172, -144, -96, 'px')};
    }
  }
  &.portfolio {
    margin-top: ${Clamp(16, 24, 24, 'px')};
  }
  ul {
    max-width: calc(100vw - var(--pageMargin) * 2);
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    li {
      font-size: ${Clamp(14, 16, 18)};
      list-style-type: none;
      svg {
        display: block;
      }
      &:last-child {
        color: var(--primary-400);
        background-image: var(--gradient);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`