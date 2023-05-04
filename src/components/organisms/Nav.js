import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { ArrowDown, ArrowTopRight, KryptonumLogo } from '../atoms/Icons';
import { GatsbyImage } from "gatsby-plugin-image";

const Nav = () => {
  const {caseStudies, team, blogEntries, blogCategories} = useStaticQuery(graphql`
    query {
      caseStudies: allStrapiCaseStudy(limit: 4) {
        nodes {
          name
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
    }
  `);

  const [navOpened, setNavOpened] = useState(false);

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
                <li><Link to="/web-development">Web Development</Link>
                  <ul className="nav-list3">
                    <li><Link to="/strony-internetowe">Strony internetowe</Link></li>
                    <li><Link to="/aplikacje-internetowe">Aplikacje internetowe</Link></li>
                    <li><Link to="/sklepy-internetowe">Sklepy internetowe</Link></li>
                  </ul>
                </li>
                <li><Link to="/grafika-design-kreacja">Grafika & design & kreacja</Link>
                  <ul className="nav-list3">
                    <li><Link to="/strony-internetowe">Logo</Link></li>
                    <li><Link to="/aplikacje-internetowe">Audyty</Link></li>
                    <li><Link to="/sklepy-internetowe">Identyfikacja wizualna i branding</Link></li>
                  </ul>
                </li>
                <li><Link to="/opieka-agencyjna">Opieka agencyjna</Link></li>
                <li><Link to="/warsztat-strategiczny">Warsztat strategiczny</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/projekty">
                <span>Projekty</span>
                <ArrowDown />
              </Link>
              <ul className="nav-list2 caseStudies">
                {caseStudies.nodes.map((caseStudy, i) => (
                  <div key={i}>
                    <GatsbyImage image={caseStudy.thumbnail.localFile.childImageSharp.gatsbyImageData} alt={caseStudy.alternativeText} />
                    <h3>{caseStudy.name}</h3>
                  </div>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/zespol">
                <span>Zespół</span>
                <ArrowDown />
              </Link>
              <ul className="nav-list2 team">
                <div>
                  {team.nodes.map((person, i) => (
                    <Link to="#" key={i}>
                      <GatsbyImage image={person.img.localFile.childImageSharp.gatsbyImageData} alt={person.alternativeText} />
                      <h3>{person.name}</h3>
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
                <div>
                  <h3><Link>Zobacz bloga</Link></h3>
                  {blogEntries.nodes.map((entry, i) => (
                    <Link to="#" key={i}>
                      <GatsbyImage image={entry.img.localFile.childImageSharp.gatsbyImageData} alt={entry.alternativeText} />
                      <h3>{entry.title}</h3>
                    </Link>
                  ))}
                </div>
                <div>
                  <h3>Kategorie:</h3>
                  {blogCategories.nodes.map((category, i) => (
                    <Link to={`/blog/kategoria/${category.slug}`} key={i}>
                      <h3>{category.name}</h3>
                    </Link>
                  ))}
                </div>
                <div>
                  <h3>Twórcy:</h3>
                </div>
              </ul>
            </li>
            <li><Link to="/akademia">Akademia</Link></li>
          </ul>
        </div>
        <Link to="/kontakt" className="nav-cta cta secondary" data-text="Kontakt">
          <span>Kontakt</span>
          <ArrowTopRight />
        </Link>
        <button
          id="nav-toggle"
          onClick={() => {setNavOpened(!navOpened)}}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  --nav-height: 94px;
  background-color: var(--neutral-950);
  position: relative;
  z-index: 9;
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
    & >ul {
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
    background-color: rgba(0,0,0,.7);
    backdrop-filter: blur(16px);
    padding: 48px 16px 96px;
    &.services {
      display: grid;
      grid-template:"one two three" "one two four";
      > li {
        a {
          display: inline-block;
          font-size: ${20/16}rem;
          margin-bottom: 1rem;
        }
        > a {
          font-size: ${28/16}rem;
          margin-bottom: ${20/16}rem;
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
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    &.team {
      > div {
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
  @media (pointer: coarse) or (max-width: 999px){
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
      transition: transform .4s;
      transform: translateX(100%);
      ul {
        display: block;
        > li > a {
          font-size: ${32/16}rem;
        }
      }
     
    }
    &[aria-expanded="true"] {
      .nav-list {
        transform: translateX(0);
      }
    }
    .nav-list2 {
      position: absolute;
      transform: translateY(-8px);
      opacity: 0;
      pointer-events: none;
      transition: transform .5s cubic-bezier(0.23,1,0.32,1);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      overflow-y: auto;
      border-bottom: 1px solid var(--neutral-800);
      padding: 48px 16px 96px;
      &.services {
        display: block;
        > li {
          a {
            display: inline-block;
            font-size: ${20/16}rem;
            margin-bottom: 1rem;
          }
          > a {
            font-size: ${28/16}rem;
            margin-bottom: ${20/16}rem;
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
    }
  }
`
 
export default Nav;