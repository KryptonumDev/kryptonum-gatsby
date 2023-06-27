import React, { useEffect, useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../organisms/Nav"
import Footer from "../organisms/Footer";
import ScrollToNext from "../organisms/ScrollToNext";

const Layout = ({ data: { page }, children }) => {
  const data = useStaticQuery(graphql`
    query {
      caseStudies: allSanityCaseStudyEntries(limit: 4) {
        nodes {
          name
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 456)
            }
          }
        }
      }
      team: allSanityTeamMember {
        nodes {
          name
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 96, height: 96)
            }
          }
        }
      }
      blogEntries: allSanityBlogEntries(limit: 2, sort: {_createdAt: DESC}) {
        nodes {
          title
          slug {
            current
          }
          author {
            name
            slug {
              current
            }
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED, width: 32, height: 32)
              }
            }
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 128, height: 128)
            }
          }
          _createdAt(formatString: "D MMMM Y", locale: "pl")
        }
      }
      blogCategories: allSanityBlogCategories(limit: 8) {
        nodes {
          name
          slug {
            current
          }
        }
      }
      curiosityEntries: allSanityCuriosityEntries(limit: 2) {
        nodes {
          title
          slug {
            current
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      curiosityCategories: allSanityCuriosityCategories(limit: 8) {
        nodes {
          name
          slug {
            current
          }
        }
      }
      global: sanityGlobal {
        footer_OfficeCity
        footer_OfficeStreet
        footer_ContactName
        footer_ContactTel
        footer_ContactEmail
        footer_LegalLinks {
          text
          href
        }
        footer_Socials {
          text
          href
        }
      }
    }
  `);

  const locationPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const orphansRegex = useMemo(() => {
    const orphans = ['a', 'i', 'o', 'u', 'w', 'z', 'np.'];
    return new RegExp(` (${orphans.join('|')}) `, 'gi');
  }, []);

  useEffect(() => {
    const paragraphs = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a, button, span'));
    paragraphs.forEach((paragraph) => {
      Array.from(paragraph.childNodes).forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = node.textContent.replaceAll(orphansRegex, ` $1\u00A0`);
        }
      });
    });
  }, [locationPath, orphansRegex]);
  return (
    <>
      <GlobalStyle />
      <Nav data={data} />
      <main>
        {children}
      </main>
      <Footer data={data} />
      {page?.scrollToNext && (
        <ScrollToNext data={page.scrollToNext} />
      )}
    </>
  );
}
 
export default Layout;