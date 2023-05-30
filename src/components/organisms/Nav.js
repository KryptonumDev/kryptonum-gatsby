import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { ChevronDown, ChevronLeft, KryptonumLogo } from '../atoms/Icons';
import { Clamp, removeMarkdown, scrollLock } from "../../utils/functions";
import { useEffect } from "react";
import Button from "../atoms/Button";

const Nav = ({
  data: {
    caseStudies,
    team,
    blogEntries,
    blogCategories,
    curiosities,
    technologies
  }
}) => {
  const [navOpened, setNavOpened] = useState(false);
  const nav = useRef(null);

  const locationPath = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    const navHeight = nav.current?.offsetHeight;
    let prevScrollPos = window.pageYOffset;
    let currentScrollPos = prevScrollPos;
    let scrollDistance = 0;
    window.addEventListener('scroll', () => {
      prevScrollPos = currentScrollPos;
      currentScrollPos = window.pageYOffset;
      if (currentScrollPos < prevScrollPos && currentScrollPos > navHeight) {
        nav.current?.classList.add('fixed');
        scrollDistance = 0;
      } else if(nav.current?.classList.contains('fixed')) {
        scrollDistance += prevScrollPos - currentScrollPos;
        if (scrollDistance * -1 >= navHeight) {
          nav.current?.classList.remove('fixed');
          scrollDistance = 0;
        }
      }
      if (currentScrollPos === 0) {
        nav.current?.classList.remove('fixed');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setNavOpened(false)
        scrollLock(false)
      }
    })
  }, [locationPath])

  const handleNavLinks = (e, item) => {
    if (window.matchMedia('(pointer: coarse), (max-width: 1149px)').matches) {
      e.preventDefault();
      item
      ? nav.current.setAttribute('data-expand', item)
      : nav.current.removeAttribute('data-expand');
    }      
  }

  const handleHideNav = () => {
    nav.current?.style?.setProperty('pointer-events', 'none');
    setNavOpened(false)
    scrollLock(false)
    setTimeout(() => {
      nav.current?.removeAttribute('style');
    }, 1000);
  };

  const handleNavToggle = () => {
    if(!nav.current?.classList.contains('fixed')){
      window.scrollTo({top: 0});
    }
    setNavOpened(!navOpened)
    scrollLock(!navOpened)
  }

  return (
    <Wrapper className="nav" aria-expanded={navOpened} ref={nav}>
      <div className="max-width">
        <Link to="/" aria-label="Strona główna">
          <KryptonumLogo />
        </Link>
        <div className="nav-list">
          <ul>
            <li>
              <Link to="/uslugi" onClick={(e) => handleNavLinks(e, 'services')}>
                <span>Usługi</span>
                <ChevronDown />
              </Link>
              <ul className="nav-list2 services">
                <div className="max-width">
                  <button className="mobileElement backBtn" onClick={(e) => handleNavLinks(e)}>
                    <ChevronLeft />
                    <span>Wróć</span>
                  </button>
                  <h3 className="mobileElement"><Link to="/projekty" onClick={e => handleHideNav(e)}>Wszystkie usługi</Link></h3>
                  <li><Link to="/web-development" onClick={e => handleHideNav(e)}><h3>Web Development</h3></Link>
                    <ul className="nav-list3">
                      <li><Link to="/web-development-strony-internetowe" onClick={e => handleHideNav(e)}>Strony internetowe</Link></li>
                      <li><Link to="/web-development-aplikacje-internetowe" onClick={e => handleHideNav(e)}>Aplikacje internetowe</Link></li>
                      <li><Link to="/web-development-sklepy-internetowe" onClick={e => handleHideNav(e)}>Sklepy internetowe</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/grafika-design" onClick={e => handleHideNav(e)}><h3>Grafika & design</h3></Link>
                    <ul className="nav-list3">
                      <li><Link to="/grafika-design-projektowanie-logo" onClick={e => handleHideNav(e)}>Logo</Link></li>
                      <li><Link to="/grafika-design-audyt-ux-ui" onClick={e => handleHideNav(e)}>Audyty</Link></li>
                      <li><Link to="/grafika-design-identyfikacja-wizualna-marki" onClick={e => handleHideNav(e)}>Identyfikacja wizualna i branding</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie" onClick={e => handleHideNav(e)}><h3>Opieka agencyjna</h3></Link></li>
                  <li><Link to="/warsztaty-discovery" onClick={e => handleHideNav(e)}><h3>Warsztat strategiczny</h3></Link></li>
                </div>
              </ul>
            </li>
            <li>
              <Link to="/projekty" onClick={(e) => handleNavLinks(e, 'caseStudies')}>
                <span>Projekty</span>
                <ChevronDown />
              </Link>
              <ul className="nav-list2 caseStudies">
                <div className="max-width">
                  <button className="mobileElement backBtn" onClick={(e) => handleNavLinks(e)}>
                    <ChevronLeft />
                    <span>Wróć</span>
                  </button>
                  <h3 className="mobileElement"><Link to="/projekty" onClick={e => handleHideNav(e)}>Wszystkie projekty</Link></h3>
                  {caseStudies.nodes.map((caseStudy, i) => (
                    <Link to={`/projekty/${caseStudy.slug.current}`} key={i} className="item" onClick={e => handleHideNav(e)}>
                      <GatsbyImage image={caseStudy.thumbnail.asset.gatsbyImageData} alt={caseStudy.thumbnail.asset.altText || ''} />
                      <p>{caseStudy.name}</p>
                    </Link>
                  ))}
                </div>
              </ul>
            </li>
            <li>
              <Link to="/zespol" onClick={(e) => handleNavLinks(e, 'team')}>
                <span>Zespół</span>
                <ChevronDown />
              </Link>
              <ul className="nav-list2 team">
                <div className="max-width">
                  <button className="mobileElement backBtn" onClick={(e) => handleNavLinks(e)}>
                    <ChevronLeft />
                    <span>Wróć</span>
                  </button>
                  <h3 className="mobileElement"><Link to="/zespol" onClick={e => handleHideNav(e)}>Zobacz nasz zespół</Link></h3>
                  <div className="wrapper">
                    {team.nodes.map((person, i) => (
                      <Link to={`/zespol/${person.slug.current}`} key={i} className="item" onClick={e => handleHideNav(e)}>
                        <GatsbyImage image={person.img.asset.gatsbyImageData} alt={person.img.asset.altText || ''} className="img person-border" />
                        <p>{person.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <Link to="/blog" onClick={(e) => handleNavLinks(e, 'blog')}>
                <span>Blog</span>
                <ChevronDown />
              </Link>
              <ul className="nav-list2 blog">
                <div className="max-width">
                  <button className="mobileElement backBtn" onClick={(e) => handleNavLinks(e)}>
                    <ChevronLeft />
                    <span>Wróć</span>
                  </button>
                  <div className="entries">
                    <h3><Link to="/blog">Zobacz bloga</Link></h3>
                    {blogEntries.nodes.map((entry, i) => (
                      <div className="entry" key={i}>
                        <Link to={`/blog/${entry.slug.current}`} className="link" aria-label={removeMarkdown(entry.title)} onClick={e => handleHideNav(e)}></Link>
                        <GatsbyImage image={entry.cover.asset.gatsbyImageData} alt={entry.cover.asset.altText || ''} className="thumbnail" />
                        <div className="copy">
                          <div className="copy-top">
                            <Link to={`/blog/autor/${entry.author[0].slug.current}`} onClick={e => handleHideNav(e)}>
                              <GatsbyImage image={entry.author[0].img.asset.gatsbyImageData} alt={entry.author[0].img.asset.altText || ''} className="person-border" />
                              <span>{entry.author[0].name}</span>
                            </Link>
                            <span>{entry._createdAt}</span>
                          </div>
                          <h3>{removeMarkdown(entry.title)}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="categories">
                    <h3>Kategorie:</h3>
                    <div className="wrapper">
                      {blogCategories.nodes.map((category, i) => (
                        <Link to={`/blog/kategoria/${category.slug.current}`} key={i} onClick={e => handleHideNav(e)}>
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="authors">
                    <h3>Twórcy:</h3>
                    <div className="wrapper">
                      {team.nodes.map((person, i) => (
                        <Link to={`/blog/autor/${person.slug.current}`} key={i} onClick={e => handleHideNav(e)}>
                          <GatsbyImage image={person.img.asset.gatsbyImageData} alt={person.img.asset.altText || ''} className="person-border" />
                          <p>{person.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <Link to="/akademia" onClick={(e) => handleNavLinks(e, 'academy')}>
                <span>Akademia</span>
                <ChevronDown />
              </Link>
              <ul className="nav-list2 academy">
                <div className="max-width">
                  <button className="mobileElement backBtn" onClick={(e) => handleNavLinks(e)}>
                    <ChevronLeft />
                    <span>Wróć</span>
                  </button>
                  <h3 className="mobileElement"><Link to="/akademia" onClick={e => handleHideNav(e)}>Akademia</Link></h3>
                  <div className="curiosities">
                    <h3><Link to="/ciekawostki" onClick={e => handleHideNav(e)}>Ciekawostki</Link></h3>
                    {curiosities.nodes.map((curiosity, i) => (
                      <Link to={`/akademia/ciekawostki/${curiosity.slug.current}`} key={i} className="link" onClick={e => handleHideNav(e)}>
                        <GatsbyImage image={curiosity.thumbnail.asset.gatsbyImageData} alt={curiosity.thumbnail.asset.altText || ''} className="thumbnail" />
                        <h3>{curiosity.title}</h3>
                      </Link>
                    ))}
                  </div>
                  <div className="technologies">
                    <h3><Link to="/technologie" onClick={e => handleHideNav(e)}>Technologie</Link></h3>
                    <div className="wrapper">
                      {technologies.nodes.map((technology, i) => (
                        <Link to={`/akademia/technologie/${technology.slug.current}`} key={i} onClick={e => handleHideNav(e)}>
                          <GatsbyImage image={technology.thumbnail.asset.gatsbyImageData} alt={technology.thumbnail.asset.altText || ''} />
                          <p>{technology.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="authors">
                    <h3>Twórcy:</h3>
                    <div className="wrapper">
                      {team.nodes.map((person, i) => (
                        <Link to={`/blog/autor/${person.slug.current}`} key={i} onClick={e => handleHideNav(e)}>
                          <GatsbyImage image={person.img.asset.gatsbyImageData} alt={person.img.asset.altText || ''} className="person-border" />
                          <p>{person.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
        <Button to='/kontakt' className='nav-cta' onClick={e => handleHideNav(e)}>Darmowa konsultacja</Button>
        <button
          id="nav-toggle"
          onClick={() => handleNavToggle()}
          aria-label="Nawigacja"
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        className="overlay"
        aria-hidden="true"
        onClick={() => {
          setNavOpened(false)
          scrollLock(false)
        }}
      ></div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  --nav-height: 94px;
  background-color: var(--neutral-950);
  position: relative;
  z-index: 9;
  &.fixed {
    position: sticky;
    top: 0%;
    animation: navDown .5s forwards;
  }
  @keyframes navDown {
    0% {transform: translateY(-100%)}
    100% {transform: translateY(0)}
  }
  > .max-width {
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-cta {
    font-size: ${Clamp(16, 20, 18)};
  }
  ul {
    list-style-type: none;
  }
  .nav-list {
    & > ul {
      margin: 0 -24px;
      display: flex;
      & > li {
        margin: 0 24px;
        > a {
          padding: 13px 0;
          &::before {
            position: relative;
            content: '';
            position: absolute;
            left: -48px;
            top: 0;
            width: calc(100% + 96px);
            height: var(--nav-height);
            opacity:0;
            transform: scaleY(0);
          }
          position: relative;
          display: inline-flex;
          align-items: center;
          column-gap: 4px;
          svg {
            transition: transform .3s;
          }
        }
        @media (pointer: fine) and (min-width: 1150px){
          &:hover,
          &:focus-within {
            > a {
              &::before {
                transform: scaleY(1);
              }
              svg {
                transform: rotateX(180deg);
              }
            }
            .nav-list2 {
              transform: translateY(0);
              visibility: visible;
            }
          }
        }
      }
    }
  }
  .nav-list2 {
    transform: translateY(-8px);
    visibility: hidden;
    transition: transform .5s cubic-bezier(0.23,1,0.32,1);
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    max-height: calc(100vh - var(--nav-height));
    max-height: calc(100dvh - var(--nav-height));
    overflow-y: auto;
    border-bottom: 1px solid var(--neutral-800);
    background-color: var(--neutral-950);
    > .max-width {
      height: 100%;
      padding: 48px 0 96px;
    }
    h3 {
      font-size: ${28/16}rem;
      margin-bottom: 20px;
    }
    &.services {
      .max-width {
        display: grid;
        grid-template: "one two three" "one two four";
        grid-template-columns: repeat(3, 1fr);
        gap:32px;
      }
      li {
        &:not(:last-child){
          margin-bottom: 1rem;
        }
        a {
          display: inline-block;
          font-size: ${20/16}rem;
        }
        &:nth-of-type(1) {
          grid-area: one;
        }
        &:nth-of-type(2) {
          grid-area: two;
        }
        &:nth-of-type(3) {
          grid-area: three;
        }
        &:nth-of-type(4) {
          grid-area: four;
        }
      }
    }
    &.caseStudies {
      .max-width {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
      }
      .item {
        text-align: center;
        font-size: ${22/16}rem;
        p {
          margin-top: 24px;
        }
      }
    }
    &.team {
      .wrapper {
        margin: 0 auto;
        max-width: calc(5 * (96px + 48px));
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 24px 48px;
        p {
          font-size: ${22/16}rem;
          margin-top: 8px;
        }
        .img {
          width: 96px;
          height: 96px;
        }
      }
    }
    &.blog {
      .max-width {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: flex-start;
        gap: 42px;
      }
      .entries {
        .entry {
          &:not(:last-child){
            margin-bottom: 30px;
          }
          position: relative;
          .link {
            position: absolute;
            inset: 0;
            z-index: 1;
          }
          display: flex;
          gap: 22px;
          .copy {
            .copy-top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              a {
                display: grid;
                grid-template-columns: auto auto;
                align-items: center;
                gap: 4px;
                z-index: 2;
                .person-border {
                  width: 32px;
                  height: 32px;
                }
                @media (max-width: 1329px){
                  & + span {
                    display: none;
                  }
                }
              }
            }
            h3 {
              margin-top: 1rem;
              font-size: 1rem;
            }
          }
        }
        .thumbnail {
          width: 128px;
          height: 128px;
          flex-shrink: 0;
        }
      }
      .categories {
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          a {
            background-color: var(--neutral-900);
            padding: 4px 16px;
            border-radius: 2px;
          }
        }
      }
      .authors {
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 32px;
          a {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .person-border {
            width: 48px;
            height: 48px;
          }
          p {
            font-size: ${20/16}rem;
          }
        }
      }
    }
    &.academy {
      .max-width {
        display: grid;
        align-items: flex-start;
        grid-template-columns: repeat(3, 1fr);
        gap: 42px;
      }
      .curiosities {
        .link {
          &:not(:last-child) {
            margin-bottom: 24px;
          }
          display: flex;
          gap: 12px;
          .thumbnail {
            width: 188px;
            flex-shrink: 0;
          }
          h3 {
            font-size: ${22/16}rem;
          }
        }
      }
      .technologies {
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          p {
            font-size: ${22/16}rem;
            margin-top: 1rem;
          }
        }
      }
      .authors {
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 32px;
          a {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .person-border {
            width: 48px;
            height: 48px;
          }
          p {
            font-size: ${20/16}rem;
          }
        }
      }
    }
  }
  #nav-toggle {
    padding: 9px 12.5px;
    margin-right: -12.5px;
    cursor: pointer;
    display: none;
    span {
      display: block;
      width: 34px;
      height: 2px;
      background-color: var(--neutral-200);
      margin: 11px 0;
      border-radius: 2px;
      transition: transform .3s;
    }
  }
  &[aria-expanded="true"] {
    #nav-toggle {
      span {
        &:nth-child(1){
          transform: translateY(6.5px) rotate(-45deg);
        }
        &:nth-child(2){
          transform: translateY(-6.5px) rotate(45deg);
        }
      }
    }
  }
  .backBtn {
    display: flex;
    align-items: center;
    font-size: ${32/16}rem;
    gap: 4px;
    margin-bottom: 32px;
  }
  .backBtn + h3 {
    margin-bottom: 32px;
  }
  .mobileElement {
    display: none;
  }
  @media (max-width: 1149px), (pointer: coarse){
    #nav-toggle {
      display: block;
    }
    .nav-list {
      width: 100%;
      position: absolute;
      right: 0;
      top: var(--nav-height);
      height: calc(100vh - var(--nav-height));
      height: calc(100dvh - var(--nav-height));
      background-color: var(--neutral-950);
      transition: transform .5s cubic-bezier(0.23,1,0.32,1);
      visibility: hidden;
      transform: translateY(-8px);
      opacity: 0;
      overflow-x: hidden;
      ul {
        display: block;
        > li > a {
          font-size: ${32/16}rem;
        }
      }
      & > ul {
        margin: 40px 0 0 0;
        > li {
          margin: 0 40px;
          @media (max-width: 767px){
            margin: 0 16px;
          }
          > a svg {
            width: 40px;
            height: 40px;
            path {
              stroke-width: 1;
            }
            transform: rotate(-90deg);
          }
        }
      }
    }
    .overlay {
      position: fixed;
      inset: 0;
      z-index: -1;
      background-color: rgba(0,0,0,.6);
      backdrop-filter: blur(8px);
      opacity: 0;
      pointer-events: none;
      transition: opacity .5s;
    }
    .nav-list2 {
      transform: translateX(-8px);
      transition: transform .5s cubic-bezier(0.23,1,0.32,1);
      top: 0;
      height: calc(100vh - var(--nav-height));
      height: calc(100dvh - var(--nav-height));
      border-bottom: none;
      z-index: 1;
      > .max-width {
        height: auto;
        padding: 48px 0 96px;
      }
      &.services {
        .max-width {
          display: block;
          > li:not(:last-child) {
            margin-bottom: 2rem;
          }
          > li:nth-of-type(3),
          > li:nth-of-type(4) {
            h3 {
              margin-bottom: 0;
            }
          }
          .nav-list3 > li:not(:last-child) {
            margin-bottom: .5rem;
          }
        }
      }
      &.caseStudies {
        .max-width {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          text-align: left;
          font-size: ${20/16}rem;
          p {
            margin-top: 0;
          }
        }
      }
      &.team {
        .wrapper {
          max-width: unset;
          text-align: left;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem 1rem;
          .item {
            text-align: center;
            .person-border {
              width: 96px;
              height: 96px;
            }
            p {
              font-size: 1rem;
            }
          }
        }
      }
      &.blog {
        .backBtn {
          margin-bottom: 0;
        }
        .max-width {
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .entries {
          .entry {
            &:not(:last-child){
              margin-bottom: 30px;
            }
            display: flex;
            gap: 22px;
            .copy {
              .copy-top {
                a {
                  display: flex;
                  align-items: center;
                  gap: 4px;
                  z-index: 2;
                  .person-border {
                    width: 32px;
                    height: 32px;
                  }
                }
              }
              h3 {
                margin-top: 4px;
              }
            }
          }
        }
        .categories {
          .wrapper {
            gap: 1rem;
            a {
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        .authors {
          .wrapper {
            gap: 1rem;
            a {
              flex-direction: column;
            }
            .person-border {
              width: 96px;
              height: 96px;
            }
            p {
              font-size: 1rem;
            }
          }
        }
      }
      &.academy {
        .backBtn {
          margin-bottom: 0;
        }
        .max-width {
          grid-template-columns: 1fr;
          gap: 32px;
          > h3 {
            margin-bottom: 0;
          }
        }
        .curiosities {
          .link {
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
            flex-direction: column;
            gap: 4px;
            .thumbnail {
              width: 100%;
            }
            h3 {
              font-size: ${20/16}rem;
            }
          }
        }
        .technologies {
          .wrapper {
            gap: 1fr;
            p {
              font-size: ${20/16}rem;
            }
          }
        }
        .authors {
          .wrapper {
            gap: 1rem;
            a {
              flex-direction: column;
            }
            .person-border {
              width: 96px;
              height: 96px;
            }
            p {
              font-size: 1rem;
            }
          }
        }
      }
    }
    .mobileElement {
      display: flex;
    }
    &[aria-expanded="true"] {
      .nav-list {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      .overlay {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
  &[data-expand="services"] .nav-list2.services,
  &[data-expand="caseStudies"] .nav-list2.caseStudies,
  &[data-expand="team"] .nav-list2.team,
  &[data-expand="blog"] .nav-list2.blog,
  &[data-expand="academy"] .nav-list2.academy {
    transform: translateX(0);
    visibility: visible;
  }
  @media (max-width: 499px){
    .nav-cta {
      display: none;
    }
  }
`
 
export default Nav;