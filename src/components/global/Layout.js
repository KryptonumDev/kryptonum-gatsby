import React, { useEffect, useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../organisms/Nav"
import Footer from "../organisms/Footer";

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      caseStudies: allSanityCaseStudies(limit: 4) {
        nodes {
          name
          slug {
            current
          }
          thumbnail {
            alt
            source {
              asset {
                gatsbyImageData(placeholder: BLURRED, width: 456)
              }
            }
          }
        }
      }
      team: allSanityTeam {
        nodes {
          name
          slug {
            current
          }
          img {
            alt
            source {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
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
              alt
              source {
                asset {
                  gatsbyImageData(placeholder: BLURRED, width: 32, height: 32)
                }
              }
            }
          }
          cover {
            alt
            source {
              asset {
                gatsbyImageData(placeholder: BLURRED, width: 128, height: 128)
              }
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
      curiosities: allSanityCuriosities(limit: 2) {
        nodes {
          title
          slug {
            current
          }
          thumbnail {
            alt
            source {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
      technologies: allSanityTechnologies(limit: 2) {
        nodes {
          name
          slug {
            current
          }
          thumbnail {
            alt
            source {
              asset {
                gatsbyImageData(placeholder: BLURRED, width: 160, height: 160)
              }
            }
          }
        }
      }
      footer: sanityFooter {
        contactName
        contactEmail
        contactTel
        officeCity
        officeStreet
        legalLinks {
          text
          href
        }
        socials {
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
    </>
  );
}
 
export default Layout;