import React from "react"

export default function Article({ canonical, title, description, ogImage, date, author }) {
  return (
    <script type="application/ld+json">
      {JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonical
          },
          "headline": title,
          "description": description,
          "image": {
            "@type": "ImageObject",
            "url": ogImage,
          },
          "datePublished": date,
          "dateModified": date,
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Kryptonum",
            "logo": {
              "@type": "ImageObject",
              "url": "https://kryptonum.eu/logo.webp",
              "width": 60,
              "height": 60
            }
          }
        }
      )}
    </script>
  )
}