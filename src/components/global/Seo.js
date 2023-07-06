import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Organization from "./OrganisationSchema";
import Article from "./ArticleSchema";

export const SEO = ({ author, date, title, description, url, ogImage, children }) => {
  const { global: { globalSeo: {
    og_Img
  } } } = useStaticQuery(graphql`
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
      <Organization />
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />

      <meta property="og:image" content={ogImage || og_Img.asset.url} />
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

      {(date && author) && (
        <>
          <Article
            canonical={`${domain}${seo.url}`}
            title={seo.title}
            description={seo.description}
            ogImage={ogImage || og_Img.asset.url}
            date={date}
            author={author}
          />
          <meta property="article:author" content={author} />
          <meta property="article:published_time" content={date} />
        </>
      )}
    </>
  )
}