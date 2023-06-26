import React from "react"
import { graphql, useStaticQuery } from "gatsby";

export const SEO = ({ title, description, children }) => {
  const { global: { globalSeo: {
    og_Img
  }}} = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        globalSeo {
          og_Img {
            asset {
              url
            }
          }
        }
      }
    }
  `);
  const seo = {
    title: title || 'Kryptonum - Agencja dla tych, którym zależy',
    description: description || '',
  }
  return (
    <>
      <meta name="robots" content="noindex" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:image" content={og_Img.asset.url} />
      <meta property="twitter:image" content={og_Img.asset.url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {children}
    </>
  )
}