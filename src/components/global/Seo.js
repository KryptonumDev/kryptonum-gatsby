import React from "react"
import { graphql, useStaticQuery } from "gatsby";

export const SEO = ({ title, description, url, children }) => {
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
    url: url || '',
  }
  const domain = 'https://kryptonum.eu';
  const locale = "pl_PL";
  return (
    <>
      <meta name="robots" content="noindex" />
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />

      <meta property="og:image" content={og_Img.asset.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta property="twitter:domain" content={`${domain}/pl`} />
      <meta property="twitter:image" content={og_Img.asset.url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="twitter:url" content={`${domain}${seo.url}`} />
      <link rel="canonical" href={`${domain}${seo.url}`} />
      <meta property="og:url" content={`${domain}${seo.url}`} />
      {children}
    </>
  )
}