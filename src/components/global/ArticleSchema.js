import React from "react"
import Logo from "./../../resources/images/kryptonum-favicon.webp"

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
            "name": 'Kryptonum',
            "logo": {
              "@type": "ImageObject",
              "url": Logo,
              "width": 60,
              "height": 60
            }
          }
        }
      )}
    </script>
  )
}