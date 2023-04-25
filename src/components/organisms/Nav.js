import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { KryptonumLogo } from '../atoms/Icons';

const Nav = () => {
  return (
    <StyledNav className="nav">
      <div className="max-width">
        <Link to="/">
          <KryptonumLogo />
        </Link>
        <ul className="nav-list1">
          <li><Link to="/uslugi">Usługi</Link>
            <ul className="nav-list2">
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
          <li><Link to="/projekty">Projekty</Link></li>
          <li><Link to="/zespol">Zespół</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/akademia">Akademia</Link></li>
        </ul>
        <Link to="/kontakt" className="nav-cta">
          <span>Kontakt</span>
        </Link>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: var(--neutral-950);
  position: relative;
  z-index: 9;
  .max-width {
    height: 94px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      list-style-type: none;
    }
    .nav-list1 {
      justify-self: flex-start;
      margin: 0 -24px;
      display: flex;
      & > li {
        margin: 0 24px;
        &:hover {
          .nav-list2 {
            opacity: 1;
          }
        }
      }
    }
    .nav-list2 {
      opacity: 0;
      pointer-events: none;
      overflow: auto;
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      border-bottom: 1px solid var(--neutral-800);
      background-color: var(--neutral-950);
      grid-template:"one two three" "one two four";
      display: grid;
      padding: 48px 16px 96px;
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
 
  
  .nav-cta {
    text-decoration: underline;
  }
`
 
export default Nav;