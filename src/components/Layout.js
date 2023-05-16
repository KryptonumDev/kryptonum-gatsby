import React, { useEffect, useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import GlobalStyle from "../styles/GlobalStyle";
import Nav from "../components/organisms/Nav"
import Footer from "./organisms/Footer";

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      caseStudies: allStrapiCaseStudy(limit: 4) {
        nodes {
          name
          slug
          thumbnail {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 456)
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
                gatsbyImageData(placeholder: DOMINANT_COLOR, width: 94)
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
                  gatsbyImageData(width: 32)
                }
              }
            }
          }
          img {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 128, height: 128)
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
      footer: strapiFooter {
        contactName
        contactEmail
        contactTel
        officeCity
        officeStreet
        socials {
          text
          href
        }
        legalLinks {
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