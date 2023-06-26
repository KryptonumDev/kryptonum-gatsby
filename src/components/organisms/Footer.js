import React, { useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Facebook, Instagram, KryptonumLogoSimple, Mail, Tel, Tiktok, Whatsapp, Youtube } from "../atoms/Icons";
import { Clamp, removeMarkdown } from "../../utils/functions";

const Footer = ({
  data: {
    caseStudies,
    team,
    blogEntries,
    global: {
      footer_OfficeCity,
      footer_OfficeStreet,
      footer_ContactName,
      footer_ContactTel,
      footer_ContactEmail,
      footer_LegalLinks,
      footer_Socials,
    }
  }
}) => {
  const [showMore, setShowMore] = useState(0);
  const maxPeople = 6;
  const peopleToExpand = team.nodes.length - maxPeople;

  return (
    <Wrapper className="max-width">
      <ul className="footer-wrapper">
        <li className="info">
          <Link to='/pl' aria-label="Strona główna" className="footer-logo">
            <KryptonumLogoSimple />
          </Link>
          <h3><Link to='/pl/kontakt'>Kontakt</Link></h3>
          <div>
            <h3>{footer_OfficeCity}</h3>
            <p>{footer_OfficeStreet}</p>
          </div>
          <div>
            <h3>{footer_ContactName}</h3>
            <a href={`tel:${footer_ContactTel.replace(/\s/g, '')}`}>
              <Tel />
              <span>{footer_ContactTel}</span>
            </a>
            <a href={`mailto:${footer_ContactEmail}`}>
              <Mail />
              <span>{footer_ContactEmail}</span>
            </a>
          </div>
        </li>
        <li>
          <h3>Usługi</h3>
          <Link to="/pl/web-development">Web Development</Link>
          <Link to="/pl/warsztaty-discovery">Warsztat strategiczny</Link>
          <Link to="/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie">Opieka agencyjna</Link>
          <Link to="/pl/grafika-design">Grafika & design</Link>
        </li>
        <li>
          <h3><Link to="/pl/portfolio">Case study</Link></h3>
          {caseStudies.nodes.map((caseStudy, i) => (
            <Link to={`/pl/portfolio/${caseStudy.slug.current}`} key={i}>{caseStudy.name}</Link>
          ))}
        </li>
        <li className="team">
          <h3><Link to="/pl/zespol">Zespół</Link></h3>
          {team.nodes.map((person, i) => (
            <Link
              to={`/pl/zespol/${person.slug.current}`}
              className="person"
              key={i}
              style={{display: !showMore && i+1 > maxPeople ? 'none' : ''}}
            >
              <GatsbyImage image={person.img.asset.gatsbyImageData} alt={person.img.asset.altText || ''} className="person-border" />
              <span>{person.name}</span>
            </Link>
          ))}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? (
                `Pokaż mniej`
              ) : (
                `Pokaż więcej (${peopleToExpand})`
            )}
          </button>
        </li>
        <li className="blog">
          <h3><Link to="/pl/blog">Blog</Link></h3>
          {blogEntries.nodes.map((entry, i) => (
            <div className="entry" key={i}>
              <Link to={`/blog/${entry.slug.current}`} className="link" aria-label={entry.title}></Link>
              <GatsbyImage image={entry.cover.asset.gatsbyImageData} alt={entry.cover.asset.altText || ''} className="thumbnail" />
              <div className="copy">
                <Link to={`/pl/zespol/${entry.author[0].slug.current}`} className="author">
                  <GatsbyImage image={entry.author[0].img.asset.gatsbyImageData} alt={entry.author[0].img.asset.altText || ''} className="person-border" />
                  <span>{entry.author[0].name}</span>
                </Link>
                <span>{entry._createdAt}</span>
                <h3>{removeMarkdown(entry.title)}</h3>
              </div>
            </div>
          ))}
        </li>
      </ul>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Kryptonum</p>
        <div className="social">
          {footer_Socials.map((social, i) => {
            let SocialComponent = null;
            const name = social.text.toLowerCase();
            if(name === 'youtube') {
              SocialComponent = <Youtube />;
            } else if (name === 'instagram') {
              SocialComponent = <Instagram />;
            } else if (name === 'facebook') {
              SocialComponent = <Facebook />;
            } else if (name === 'tiktok') {
              SocialComponent = <Tiktok />;
            } else if (name === 'whatsapp') {
              SocialComponent = <Whatsapp />;
            }
            return (
              <a href={social.href} aria-label={social.text} key={i} target="_blank" rel="noreferrer">
                {SocialComponent}
              </a>
            )
          })}
        </div>
        <div className="legal">
          {footer_LegalLinks.map((link, i) => (
            <Link to={link.href} key={i}>{link.text}</Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  padding: 32px 0;
  position: relative;
  &.max-width {
    margin-top: ${Clamp(96, 144, 172, "px")};
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: var(--neutral-800);
  }
  .footer-logo {
    display: inline-block;
    margin-bottom: 34px;
    grid-column: 4/1;
  }
  .footer-wrapper {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1.8fr;
    gap: 32px;
    li {
      & > h3 {
        margin-bottom: 24px;
      }
      a {
        & + a {
          margin-top: 8px;
        }
        display: block;
        font-size: ${Clamp(16, 20, 20)};
        svg {
          margin-right: 8px;
        }
        svg, span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      h3 {
        font-size: ${Clamp(20, 22, 22)};
        a {
          font-size: inherit;
        }
      }
      &.info {
        span {
          font-size: 1rem;
        }
        > div {
          &:not(:last-child){
            margin-bottom: 24px;
          }
          h3 {
            margin-bottom: 4px;
          }
        }
      }
      &.team {
        .person {
          display: grid;
          grid-template-columns: 32px auto;
          align-items: center;
          gap: 8px;
          margin-bottom: 1rem;
        }
      }
      &.blog {
        .entry {
          display: grid;
          grid-template-columns: 128px auto;
          position: relative;
          align-items: flex-start;
          gap: 22px;
          &:not(:last-child) {
            margin-bottom: 34px;
          }
          .thumbnail {
            max-width: 156px;
            max-height: 156px;
          }
          .link {
            position: absolute;
            inset: 0;
            z-index: 1;
          }
          .author {
            display: flex;
            align-items: center;
            z-index: 2;
            .person-border {
              margin-right: 4px;
            }
            span {
              font-size: 1rem;
            }
          }
          .copy {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            > span {
              margin-left: auto;
            }
          }
          h3 {
            font-size: 1rem;
            margin-top: 1rem;
            grid-column: 3/1;
          }
        }
      }
    }
  }
  .footer-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    .social {
      display: flex;
      justify-content: center;
      gap: 24px;
    }
    .legal {
      margin-left: auto;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      gap: .5rem 2rem;
    }
    position: relative;
    margin-top: 32px;
    padding-top: 32px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background-color: var(--neutral-800);
    }
  }
  @media (max-width: 1419px){
    .footer-wrapper {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px;
      li {
        &.info {
          display: grid;
          grid-column: 4/1;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 22px;
        }
        &.blog {
          grid-column: 4/1;
          max-width: 686px;
          .entry {
            h3 {
              font-size: ${20/16}rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1049px){
    .footer-info {
      padding-bottom: 2rem;
      grid-template-columns: 1fr;
      gap: 2rem;
      p {
        margin: 0 auto;
      }
      .social {
        order: -1;
      }
      .legal {
        order: -1;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 709px){
    .footer-wrapper {
      grid-template-columns: 1fr;
      li {
        & > h3 {
          margin-bottom: 12px;
        }
        &.info {
          display: block;
          grid-column: unset;
        }
        &.team {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          h3 {
            grid-column: 3/1;
          }
          .person {
            margin: 0;
            grid-template-columns: 48px auto;
          }
          button {
            grid-column: 3/1;
          }
        }
        &.blog {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          grid-column: unset;
          > h3 {
            grid-column: 3/1;
          }
          .entry {
            grid-template-columns: 1fr;
            &:not(:last-child) {
              margin-bottom: 0;
            }
            h3 {
              font-size: ${14/16}rem;
              margin: 1rem 0;
              grid-column: unset;
            }
            .copy {
              grid-template-columns: 1fr;
              span {
                order: 3;
                margin-left: 0;
                font-size: ${14/16}rem;
              }
            }
          }
        }
      }
    }
  }
`
 
export default Footer;