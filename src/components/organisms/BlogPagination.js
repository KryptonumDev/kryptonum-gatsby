import React, { useMemo } from "react"
import styled from "styled-components"
import { Link } from "gatsby"


export default function Pagination({ currentPage, itemCount, urlBasis }) {
  const pagesCount = useMemo(() => {
    return (Math.ceil(itemCount / Number(process.env.GATSBY_PAGE_ITEM_COUNT)))
  }, [itemCount])

  const buttons = useMemo(() => {
    let arr = []
    for (let i = 0; i < pagesCount; i++) {
      arr.push(i + 1)
    }
    return arr
  }, [pagesCount])

  if (pagesCount < 2) {
    return null
  }

  return (
    <Wrapper>
      <Button
        as={currentPage <= 1 ? 'button' : null}
        disabled
        className='arrow'
        to={currentPage >= 3
          ? `${urlBasis}/${currentPage - 1}`
          : `${urlBasis}`}
      >
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.75 24L12.75 16L20.75 8" stroke="#EFF0F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
      <div className="center">
        {pagesCount < 6 ? (
          <>
            {buttons.map(el => (
              <Button
                active={currentPage === el}
                to={el >= 2
                  ? `${urlBasis}/${el}`
                  : `${urlBasis}`}
              >
                {el}
              </Button>
            ))}
          </>
        ) : (
          <>
            {currentPage > 3
              && <Button to={`${urlBasis}`} >
                {1}
              </Button>
            }
            {currentPage > 4
              && <Button className="not" disabled>
                ...
              </Button>
            }

            {buttons.map((el, index) => {
              if (currentPage < 4 && index < 6) { // first 4 pages
                return (
                  <Button
                    to={el >= 2
                      ? `${urlBasis}/${el}`
                      : `${urlBasis}`}
                    active={currentPage === el}
                  >
                    {el}
                  </Button>
                )
              }
              if (currentPage > pagesCount - 3 && index > pagesCount - 7) { // last 4 pages
                return (
                  <Button to={`${urlBasis}/${el}`} active={currentPage === el}>
                    {el}
                  </Button>
                )
              }
              if (index >= currentPage - 3 && index <= currentPage + 1) { // all othher pages
                return (
                  <Button to={`${urlBasis}/${el}`} active={currentPage === el}>
                    {el}
                  </Button>
                )
              }
              return null
            })}

            {(currentPage === 1 || pagesCount - currentPage > 3)
              && <Button className="not" disabled>
                ...
              </Button>
            }
            {(currentPage === 1 || pagesCount - currentPage > 2)
              && (
                <Button to={`${urlBasis}/${pagesCount}`}>
                  {pagesCount}
                </Button>
              )}
          </>
        )}
      </div>
      <Button
        as={currentPage >= pagesCount ? 'button' : null}
        disabled
        className='arrow'
        to={
          currentPage < pagesCount
            ? `${urlBasis}/${currentPage + 1}`
            : `${urlBasis}/${pagesCount}`}
      >
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.75 24L20.75 16L12.75 8" stroke="#EFF0F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
 
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
`

const Button = styled(Link)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  width: 44px;
  height: 44px;
  font-size: 1.875rem;

  ${({ active }) => active && `
    border-radius: 2px;
    background: var(--neutral-200, #EFF0F3);
    color: var(--neutral-950, #010104);
  `}
 
  &.arrow{
    padding: 6px;
    border-radius: 2px;
    border: 1px solid var(--neutral-200, #EFF0F3);
  }

  &:disabled{
    cursor: default;
    border: 1px solid var(--neutral-800, #212123);

    path{
      stroke: #212123;
    }
  }
`