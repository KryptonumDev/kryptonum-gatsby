import React from "react"

export default function Organization() {
  return (
    <script type="application/ld+json">
      {JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kryptonum",
          "url": "https://kryptonum.eu/pl",
          "telephone": "+48 793 272 020",
          "email": [
            "kuba@kryptonum.eu",
            "michal@kryptonum.eu"
          ],
          "logo": 'https://kryptonum.eu/logo.webp',
          "description": "Kryptonum, to agencja interaktywna kompleksowo wspierająca Twój biznes online. Partner technologiczny na każdym etapie obecności firmy w internecie.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Aleja Komisji Edukacji Narodowej 103/61",
            "addressLocality": "Warszawa",
            "postalCode": "02-722",
            "addressCountry": "PL"
          },
          "openingHours": [
            "Mo-Tu 09:00-22:00",
            "We-Th 09:00-22:00",
            "Fr 09:00-22:00",
            "Sa-Su 09:00-22:00"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+48 793 272 020",
              "contactType": "customer service"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+48 883 736 548",
              "contactType": "customer service",
              "availableLanguage": ["Polish", "English"]
            }
          ],
          "foundingDate": "2018-07-05",
          "founders": [
            {
              "@type": "Person",
              "name": "Michał Chrapek",
              "jobTitle": "Co-founder"
            },
            {
              "@type": "Person",
              "name": "Jakub Chrapek",
              "jobTitle": "Co-founder"
            }
          ],
          "employees": [
            {
              "@type": "Person",
              "name": "Bogdan Shevchenko",
              "jobTitle": "Front-end developer",
              "sameAs": "https://www.linkedin.com/in/bogdan-kryptonum/?originalSubdomain=pl"
            },
            {
              "@type": "Person",
              "name": "Bogumił Milewski",
              "jobTitle": "Fullstack developer",
              "sameAs": [
                "https://www.linkedin.com/in/milewskibogumil/",
                "https://milewski.me/"
              ]
            },
            {
              "@type": "Person",
              "name": "Aneta Jasińska",
              "jobTitle": "Copywriter",
              "sameAs": [
                "https://www.linkedin.com/in/aneta-jasinska/",
                "https://www.last.fm/user/aneciaaak"
              ]
            },
            {
              "@type": "Person",
              "name": "Maciej Ociepka",
              "jobTitle": "Designer",
              "sameAs": []
            },
            {
              "@type": "Person",
              "name": "Patrycja Pokładek",
              "jobTitle": "Designer",
              "sameAs": [
                "https://www.linkedin.com/in/patrycja-pokladek/"
              ]
            },
            {
              "@type": "Person",
              "name": "Oliwia Pałamarczuk",
              "jobTitle": "Designer",
              "sameAs": [
                "https://www.linkedin.com/in/oliwia-pa%C5%82amarczuk-023b66278/"
              ]
            },
            {
              "@type": "Person",
              "name": "Damian Budny",
              "jobTitle": "Designer",
              "sameAs": [
                "https://www.linkedin.com/in/damian-budny/"
              ]
            }
          ],
          "hasMap": "https://www.google.com/maps/place/Kryptonum+Studio/@52.1596951,21.0284403,15z/data=!4m2!3m1!1s0x0:0xe05d60b0c3b5bfe7?sa=X&ved=2ahUKEwjzl-THqo7-AhXWr4sKHTBtAHMQ_BJ6BAhMEAg",
          "sameAs": [
            "https://www.facebook.com/kryptonumPL/",
            "https://www.instagram.com/kryptonum_pl/",
            "https://www.linkedin.com/company/kryptonum/",
            "https://www.tiktok.com/@kryptonum_pl",
            "https://www.behance.net/kryptonumstudio",
            "https://dribbble.com/kryptonum",
            "https://twitter.com/kryptonum"
          ]
        }
      )}
    </script>
  )
}