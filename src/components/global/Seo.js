import React from "react"

export const SEO = ({ title, description, children }) => {
  const seo = {
    title: title || 'Kryptonum',
    description: description || '',
  }

  return (
    <>
      <meta name="robots" content="noindex" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  )
}