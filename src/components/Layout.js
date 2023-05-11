import React, { useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Nav from "../components/organisms/Nav"

const Layout = ({children}) => {
  const orphans = ['a', 'i', 'o', 'u', 'w', 'z', 'np.'];
  const orphansRegex = new RegExp(` (${orphans.join('|')}) `, 'gi');
  const locationPath = typeof window !== "undefined" ? window.location.pathname : '';
  useEffect(() => {
    const paragraphs = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a, button, span'));
    paragraphs.forEach(paragraph =>
      paragraph.childNodes.forEach(node =>
        node?.nodeType === Node.TEXT_NODE && (node.textContent = node.textContent.replace(orphansRegex, ` $1\u00A0`))
      )
    );
  }, [locationPath]);
  
  return (
    <>
      <GlobalStyle />
      <Nav />
      <main>
        {children}
      </main>
    </>
  );
}
 
export default Layout;