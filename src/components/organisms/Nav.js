import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { ArrowDown, ArrowTopRight, KryptonumLogo } from '../atoms/Icons';
import { scrollLock } from "../../utils/functions";
import { useEffect } from "react";

const Nav = () => {
  const {caseStudies, team, blogEntries, blogCategories, curiosities, technologies} = useStaticQuery(graphql`
    query {
      caseStudies: allStrapiCaseStudy(limit: 4) {
        nodes {
          name
          slug
          thumbnail {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      team: allStrapiTeam {
        nodes {
          name
          slug
          img {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
      blogEntries: allStrapiBlogEntry(limit: 2) {
        nodes {
          title
          slug
          author {
            name
            slug
            img {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          img {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          publishedAt(formatString: "D MMMM Y", locale: "pl")
        }
      }
      blogCategories: allStrapiBlogCategory {
        nodes {
          name
          slug
        }
      }
      curiosities: allStrapiCuriosity(limit: 2) {
        nodes {
          title
          slug
          img {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      technologies: allStrapiTechnology(limit: 2) {
        nodes {
          name
          slug
          thumbnail {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 160, height: 160)
              }
            }
          }
        }
      }
    }
  `);

  const [navOpened, setNavOpened] = useState(false);
  useEffect(() => {
    const nav = document.querySelector('.nav');
    const navHeight = nav.offsetHeight;
    let prevScrollPos = window.pageYOffset;
    let currentScrollPos = prevScrollPos;
    let scrollDistance = 0;
    window.addEventListener('scroll', () => {
      prevScrollPos = currentScrollPos;
      currentScrollPos = window.pageYOffset;
      if (currentScrollPos < prevScrollPos && currentScrollPos > navHeight) {
        nav.classList.add('fixed');
        scrollDistance = 0;
      } else if(nav.classList.contains('fixed')) {
        console.log(scrollDistance * -1, navHeight)
        scrollDistance += prevScrollPos - currentScrollPos;
        if (scrollDistance * -1 >= navHeight) {
          nav.classList.remove('fixed');
          scrollDistance = 0;
        }
      }
      if (currentScrollPos === 0) {
        nav.classList.remove('fixed');
      }
    });

  }, [])

  return (
    <StyledNav className="nav" aria-expanded={navOpened}>
      <div className="max-width">
        <Link to="/">
          <KryptonumLogo />
        </Link>
        <div className="nav-list">
          <ul>
            <li>
              <Link to="/uslugi">
                <span>Usługi</span>
                <ArrowDown />
              </Link>
              <ul className="nav-list2 services">
                <div className="max-width">
                  <li><Link to="/web-development"><h3>Web Development</h3></Link>
                    <ul className="nav-list3">
                      <li><Link to="/strony-internetowe">Strony internetowe</Link></li>
                      <li><Link to="/aplikacje-internetowe">Aplikacje internetowe</Link></li>
                      <li><Link to="/sklepy-internetowe">Sklepy internetowe</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/grafika-design-kreacja"><h3>Grafika & design & kreacja</h3></Link>
                    <ul className="nav-list3">
                      <li><Link to="/strony-internetowe">Logo</Link></li>
                      <li><Link to="/aplikacje-internetowe">Audyty</Link></li>
                      <li><Link to="/sklepy-internetowe">Identyfikacja wizualna i branding</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/opieka-agencyjna"><h3>Opieka agencyjna</h3></Link></li>
                  <li><Link to="/warsztat-strategiczny"><h3>Warsztat strategiczny</h3></Link></li>
                </div>
              </ul>
            </li>
            <li>
              <Link to="/projekty">
                <span>Projekty</span>
                <ArrowDown />
              </Link>
              <ul className="nav-list2 caseStudies">
                <div className="max-width">
                  <h3 className="mobileLink"><Link to="/projekty">Wszystkie projekty</Link></h3>
                  {caseStudies.nodes.map((caseStudy, i) => (
                    <Link to={`/projekty/${caseStudy.slug}`} key={i}>
                      <GatsbyImage image={caseStudy.thumbnail.localFile.childImageSharp.gatsbyImageData} alt={caseStudy.alternativeText || ''} />
                      <p>{caseStudy.name}</p>
                    </Link>
                  ))}
                </div>
              </ul>
            </li>
            <li>
              <Link to="/zespol">
                <span>Zespół</span>
                <ArrowDown />
              </Link>
              <ul className="nav-list2 team">
                <div className="max-width">
                  <h3 className="mobileLink"><Link to="/zespol">Zespół</Link></h3>
                  {team.nodes.map((person, i) => (
                    <Link to={`/zespol/${person.slug}`} key={i}>
                      <GatsbyImage image={person.img.localFile.childImageSharp.gatsbyImageData} alt={person.alternativeText || ''} />
                      <p>{person.name}</p>
                    </Link>
                  ))}
                </div>
              </ul>
            </li>
            <li>
              <Link to="/blog">
                <span>Blog</span>
                <ArrowDown />
              </Link>
              <ul className="nav-list2 blog">
                <div className="max-width">
                  <div className="entries">
                    <h3><Link to="/blog">Zobacz bloga</Link></h3>
                    {blogEntries.nodes.map((entry, i) => (
                      <div className="entry" key={i}>
                        <Link to={`/blog/${entry.slug}`} className="link"></Link>
                        <GatsbyImage image={entry.img.localFile.childImageSharp.gatsbyImageData} alt={entry.alternativeText || ''} className="thumbnail" />
                        <div className="copy">
                          <div className="copy-top">
                            <Link to={`/blog/autor/${entry.author[0].slug}`}>
                              <GatsbyImage image={entry.author[0].img.localFile.childImageSharp.gatsbyImageData} alt={entry.author[0].img.alternativeText || ''} />
                              <span>{entry.author[0].name}</span>
                            </Link>
                            <span>{entry.publishedAt}</span>
                          </div>
                          <h3>{entry.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="categories">
                    <h3>Kategorie:</h3>
                    <div className="wrapper">
                      {blogCategories.nodes.map((category, i) => (
                        <Link to={`/blog/kategoria/${category.slug}`} key={i}>
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="authors">
                    <h3>Twórcy:</h3>
                    <div className="wrapper">
                      {team.nodes.map((person, i) => (
                        <Link to={`/blog/autor/${person.slug}`} key={i}>
                          <GatsbyImage image={person.img.localFile.childImageSharp.gatsbyImageData} alt={person.alternativeText || ''} />
                          <p>{person.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <Link to="/akademia">
                <span>Akademia</span>
                <ArrowDown />
              </Link>
              <ul className="nav-list2 academy">
                <div className="max-width">
                  <h3 className="mobileLink"><Link to="/akademia">Akademia</Link></h3>
                  <div className="curiosities">
                    <h3><Link to="/ciekawostki">Ciekawostki</Link></h3>
                    {curiosities.nodes.map((curiosity, i) => (
                      <Link to={`/akademia/ciekawostki/${curiosity.slug}`} key={i} className="link">
                        <GatsbyImage image={curiosity.img.localFile.childImageSharp.gatsbyImageData} alt={curiosity.alternativeText || ''} className="thumbnail" />
                        <h3>{curiosity.title}</h3>
                      </Link>
                    ))}
                  </div>
                  <div className="technologies">
                    <h3><Link to="/technologie">Technologie</Link></h3>
                    <div className="wrapper">
                      {technologies.nodes.map((technology, i) => (
                        <Link to={`/akademia/technologie/${technology.slug}`} key={i}>
                          <GatsbyImage image={technology.thumbnail.localFile.childImageSharp.gatsbyImageData} alt={technology.alternativeText || ''} />
                          <p>{technology.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="authors">
                    <h3>Twórcy:</h3>
                    <div className="wrapper">
                      {team.nodes.map((person, i) => (
                        <Link to={`/blog/autor/${person.slug}`} key={i}>
                          <GatsbyImage image={person.img.localFile.childImageSharp.gatsbyImageData} alt={person.alternativeText || ''} />
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
        <Link to="/kontakt" className="nav-cta cta secondary" data-text="Kontakt">
          <span>Kontakt</span>
          <ArrowTopRight />
        </Link>
        <button
          id="nav-toggle"
          onClick={() => {
            setNavOpened(!navOpened)
            scrollLock(!navOpened)
          }}
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        className="overlay"
        onClick={() => {
          setNavOpened(false)
          scrollLock(false)
        }}
      ></div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
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
  .max-width {
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
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
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
        }
      }
    }
  }
  .nav-list2 {
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
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
      margin-bottom: ${20/16}rem;
    }
    &.services {
      .max-width {
        display: grid;
        grid-template: "one two three" "one two four";
      }
      li {
        a {
          display: inline-block;
          font-size: ${20/16}rem;
          margin-bottom: 1rem;
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
      a {
        text-align: center;
        font-size: ${22/16}rem;
        p {
          margin-top: ${24/16}rem;
        }
      }
    }
    &.team {
      .max-width {
        margin: 0 auto;
        max-width: calc(5 * (96px + 48px));
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 24px 48px;
        .gatsby-image-wrapper {
          border-radius: 50%;
        }
        p {
          font-size: ${22/16}rem;
          margin-top: ${8/16}rem;
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
            margin-bottom: ${30/16}rem;
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
                display: flex;
                align-items: center;
                gap: 4px;
                z-index: 2;
                img {
                  width: 32px;
                  height: 32px;
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
          width: 127px;
          height: 127px;
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
          img {
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
            margin-bottom: ${24/16}rem;
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
          img {
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
      width: 30px;
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
  .mobileLink {
    display: none;
  }
  @media (pointer: coarse) or (max-width: 999px){
    #nav-toggle {
      display: block;
    }
    .nav-list {
      width: 100%;
      max-width: 550px;
      position: absolute;
      right: 0;
      top: var(--nav-height);
      height: calc(100vh - var(--nav-height));
      height: calc(100dvh - var(--nav-height));
      background-color: var(--neutral-950);
      transition: transform .4s;
      transform: translateX(100%);
      ul {
        display: block;
        > li > a {
          font-size: ${32/16}rem;
        }
      }
      & > ul > li > a svg {
        transform: rotate(-90deg);
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
      transform: translateY(-8px);
      opacity: 0;
      pointer-events: none;
      transition: transform .5s cubic-bezier(0.23,1,0.32,1);
      top: 0;
      height: calc(100vh - var(--nav-height));
      height: calc(100dvh - var(--nav-height));
      border-bottom: none;
      z-index: 1;
      > .max-width {
        height: 100%;
        padding: 48px 0 96px;
      }
      h3 {
        font-size: ${28/16}rem;
        margin-bottom: ${20/16}rem;
      }
      &.services {
        .max-width {
          display: grid;
          grid-template:"one" "two" "three" "four";
        }
        li {
          a {
            display: inline-block;
            font-size: ${20/16}rem;
            margin-bottom: 1rem;
          }
          &:nth-child(1) {
            grid-area: one;
          }
          &:nth-child(2) {
            grid-area: two;
          }
          &:nth-child(3) {
            grid-area: three;
          }
          &:nth-child(4) {
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
        a {
          text-align: center;
          font-size: ${22/16}rem;
          p {
            margin-top: ${24/16}rem;
          }
        }
      }
      &.team {
        .max-width {
          margin: 0 auto;
          max-width: calc(5 * (96px + 48px));
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px 48px;
          .gatsby-image-wrapper {
            border-radius: 50%;
          }
          p {
            font-size: ${22/16}rem;
            margin-top: ${8/16}rem;
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
              margin-bottom: ${30/16}rem;
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
                  display: flex;
                  align-items: center;
                  gap: 4px;
                  z-index: 2;
                  img {
                    width: 32px;
                    height: 32px;
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
            width: 127px;
            height: 127px;
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
            img {
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
              margin-bottom: ${24/16}rem;
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
            img {
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
    .mobileLink {
      display: block;
    }
    &[aria-expanded="true"] {
      .nav-list {
        transform: translateX(0);
      }
      .overlay {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
`
 
export default Nav;