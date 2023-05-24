import React from "react"

export const SEO = ({ title, children }) => {
  const seo = {
    title: title + ' | Kryptonum' || 'Kryptonum',
  }

  return (
    <>
      <meta name="robots" content="noindex" />
      <title>{seo.title}</title>
      {children}
    </>
  )
}