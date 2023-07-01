import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Clamp } from "../../../utils/functions";
import { Share } from "../../atoms/Icons";
import ReadingTime from "../../atoms/ReadingTime";
import TableOfContent from "../../moleculas/TableOfContent";
import PortableContent from "../../organisms/PortableContent";

const Content = ({ _rawContent, author, share }) => {
  author = author[0];
  const shareData = {
    title: share.title,
    text: share.description || '',
    url: typeof window !== 'undefined' ? window.location.href.split('?')[0]+'?feature=share' : 'kryptonum.eu',
  };
  const handleShare = async (e) => {
    try {
      await navigator.share(shareData);
    } catch {
      const btn = e.currentTarget;
      const btnSpan = btn.querySelector('span');
      const btnSpanText = btnSpan.textContent;
      await navigator.clipboard.writeText(shareData.url);
      btnSpan.textContent = 'Skopiowano!'
      setTimeout(() => {
        btnSpan.textContent = btnSpanText;
      }, 3000);
    }
  }

  return (
    <Wrapper className="content">
      <GlobalStyle />
      <div className="column">
        <nav>
          <Link to={`/pl/zespol/${author.slug.current}`} className="author">
            <GatsbyImage
              image={author.img.asset.gatsbyImageData}
              alt={author.img.asset.altText || ''}
              className="img person-border"
            />
            <p>Autor: {author.name}</p>
          </Link>
          <button className="share" onClick={(e) => handleShare(e)}>
            <Share />
            <span>Udostępnij</span>
          </button>
          <TableOfContent content={_rawContent} />
        </nav>
        <div>
          <ReadingTime content={_rawContent} />
          <PortableContent data={_rawContent} />
        </div>
      </div>
    </Wrapper>
  );
}

const GlobalStyle = createGlobalStyle`
  @media (min-width: 1099px){
    nav:not(.fixed) + main .content nav {
      transform: translateY(-94px);
    }
  }
`

const Wrapper = styled.section`
  .column {
    display: grid;
    @media (min-width: 1100px){
      grid-template-columns: 1fr 2fr;
      nav {
        position: sticky;
        top: 204px;
      }
    }
    @media (min-width: 1099px){
      nav {
        max-height: calc(100vh - 204px);
        max-height: calc(100dvh - 204px);
      }
    }
    align-items: start;
    gap: 144px 32px;
    .readingTime {
      margin-bottom: 24px;
    }
    nav {
      transition: transform .5s;
      border: 1px solid var(--neutral-800);
      padding: 0 16px 32px;
      margin-top: 78px;
      .author {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        .img {
          margin-top: -78px;
        }
        p {
          font-size: ${Clamp(16, 22, 22)};
        }
      }
      .share {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: ${Clamp(16, 22, 22)};
        margin: 16px auto 24px;
      }
    }
  }
`

export default Content;