import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Clamp } from "../../../utils/functions";
import { Heart, Share } from "../../atoms/Icons";
import ReadingTime from "../../atoms/ReadingTime";
import TableOfContent from "../../moleculas/TableOfContent";
import PortableContent from "../../organisms/PortableContent";

const Content = ({ _id, _rawContent, author, share }) => {
  author = author[0];
  const shareData = {
    title: share?.title,
    text: share?.description || '',
    url: typeof window !== 'undefined' ? window.location.href.split('?')[0]+'?feature=share' : 'kryptonum.eu',
  };

  const [ isLiked, setIsLiked ] = useState(false);

  const saveToLocalStorage = (name, value) => {
    const retrievedArrayString = localStorage.getItem(name);
    const retrievedArray = JSON.parse(retrievedArrayString) || [];
    const idAlreadyExists = retrievedArray.includes(value);
    const newArray = idAlreadyExists ? retrievedArray : [...retrievedArray, value];
    localStorage.setItem(name, JSON.stringify(newArray));  
  }

  const ifValueExsistFromLocalStorage = (name, value) => {
    const retrievedArrayString = localStorage.getItem(name);
    const retrievedArray = JSON.parse(retrievedArrayString) || [];
    return retrievedArray.indexOf(value) !== -1 ? true : false;
  }

  const handleLike = () => {
    setIsLiked(true);
    fetch('/api/post-likes', {
      method: 'POST', 
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({id: _id})
    })
    .then(response => response.json())
    .then(response => {
      if(response.success){
        saveToLocalStorage('liked', _id);
      }
    })
    .catch(() => {
      setIsLiked(false);
    })
  }

  const locationPath = typeof window !== 'undefined' ? window.location.pathname : '';
  useEffect(() => {
    ifValueExsistFromLocalStorage('liked', _id) && setIsLiked(true);
  }, [locationPath])

  const handleShare = async (e) => {
    const btn = e.currentTarget;
    try {
      await navigator.share(shareData);
    } catch {
      const btnSpan = btn.querySelector('span');
      const btnSpanText = btnSpan.textContent;
      await navigator.clipboard.writeText(shareData.url);
      btnSpan.textContent = 'Skopiowano link! 👏🏼'
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
          <button
            className={`like${isLiked ? ' liked' : ''}`}
            onClick={() => handleLike()}
            disabled={isLiked ? true : false}
          >
            <Heart />
            <span>Polub artykuł</span>
          </button>
          <button className="share" onClick={(e) => handleShare(e)}>
            <Share />
            <span>Udostępnij</span>
          </button>
          <div className="overflow">
            <TableOfContent content={_rawContent} />
          </div>
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
    nav.nav:not(.fixed) ~ main .content nav {
      transform: translateY(-94px);
    }
  }
`
const Wrapper = styled.section`
  .column {
    display: grid;
    align-items: start;
    gap: 144px 32px;
    .readingTime {
      margin-bottom: 24px;
    }
    nav {
      transition: transform .5s;
      border: 1px solid var(--neutral-800);
      margin-top: 78px;
      display: flex;
      flex-direction: column;
      .overflow {
        padding: 32px 24px;
      }
      .author {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
          margin-top: -78px;
        p {
          font-size: ${22/16}rem;
        }
      }
      .share,
      .like {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: ${Clamp(16, 22, 22)};
        margin: 16px auto;
      }
      .like {
        &[disabled] span {
          opacity: .4;
        }
        margin-bottom: 0;
        &.liked {
          svg {
            animation: .6s likeAnimation forwards;
            fill: url(#heart);
          }
        }
      }
      @keyframes likeAnimation {
        0% {
          transform: scale(1) rotate(0deg);
        }
        30% {
          transform: scale(1.5) rotate(8deg);
        }
        70% {
          transform: scale(1.2) rotate(-5deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
    }
    @media (min-width: 1099px){
      grid-template-columns: 1fr 2fr;
      nav {
        position: sticky;
        top: 204px;
        max-height: calc(100vh - 204px);
        max-height: calc(100dvh - 204px);
        .overflow {
          position: relative;
          padding: 0 32px;
          overflow-y: auto;
          &::before,
          &::after {
            content: '';
            width: 100%;
            height: 24px;
            display: block;
            position: sticky;
            left: 0;
            top: 0;
            z-index: 1;
          }
          &::before {
            background: linear-gradient(var(--neutral-950), rgba(0,0,0,0));
          }
          &::after {
            bottom: 0;
            background: linear-gradient(rgba(0,0,0,0), var(--neutral-950));
          }
        }
      }
    }
  }
`

export default Content;