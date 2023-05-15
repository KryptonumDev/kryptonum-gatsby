import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/sections/Homepage/Hero";
import Conquest from "../components/sections/Homepage/Conquest";
import Challange from "../components/sections/Homepage/Challenge";
import Services from "../components/sections/Homepage/Services";
import Creativity from "../components/sections/Homepage/Creativity";
import Roadmap from "../components/sections/Homepage/Roadmap";

const IndexPage = ({data:
  {
    homepage,
  }
}) => {
  return (
    <>
      <Hero data={homepage} />
      <Services data={homepage} />
      <Conquest data={homepage} />
      <Challange data={homepage} />
      <Creativity data={homepage} />
      <Roadmap data={homepage} />
      
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt culpa distinctio soluta nostrum eum officia, veniam provident, perferendis suscipit repellendus ducimus vero cumque alias illo molestiae tenetur quo! Veniam nobis nisi vel, itaque cum quibusdam eum quidem molestiae eius neque sunt quaerat, obcaecati similique sit quasi sapiente aliquam alias magnam? Perferendis ratione distinctio natus mollitia velit ex exercitationem tempora ullam voluptas maiores excepturi commodi quia facilis, obcaecati asperiores quaerat perspiciatis aspernatur temporibus consequatur soluta vel veritatis, beatae maxime? Dolorem voluptates praesentium architecto impedit perferendis nobis tempora deserunt eaque debitis nulla iste porro, eveniet accusantium laboriosam eligendi saepe veniam at minus esse. Quo consectetur, sit sunt animi provident laborum amet optio dolor tempore rem quia ipsa nihil quas iste, accusamus odio ad. Atque suscipit facere et voluptatibus porro! Veniam sunt alias est sed dolorum praesentium ex maxime culpa dolor accusantium dolore perferendis quo labore ad cupiditate eaque, iusto ipsam minus tempora nihil nostrum quisquam ipsum! Inventore praesentium et corporis? Impedit minima odio numquam porro ducimus excepturi architecto vel beatae, assumenda harum neque aspernatur at, vero blanditiis dolores cum, doloribus doloremque mollitia veritatis totam! Odio, harum eius dolore et expedita blanditiis omnis facere dolorem pariatur ut autem, nihil nobis. Quae aliquid pariatur perferendis praesentium adipisci veniam et explicabo placeat dignissimos corporis amet aspernatur veritatis impedit nobis provident ea laborum, rerum blanditiis. Temporibus sequi repellendus voluptates omnis. Quidem deserunt, dicta ut unde porro est delectus enim voluptates. Eaque vitae nisi, saepe quibusdam minima similique odit cupiditate est, soluta voluptatibus blanditiis accusamus, exercitationem tempore veritatis officia ratione fugiat? Accusantium delectus hic officia, sequi consequuntur modi vitae, magnam recusandae voluptatibus dolor assumenda harum numquam iste laudantium in autem enim accusamus. Itaque ipsa minus soluta ullam deleniti molestias, nostrum maxime voluptate dicta! Totam excepturi deleniti culpa aut perferendis sapiente hic doloremque quae porro, consectetur, aperiam at inventore eaque! Deleniti facere quae, cupiditate fugiat nulla quasi eaque? Dolor tempore dignissimos quisquam magnam accusamus accusantium cumque omnis laboriosam itaque quos minus praesentium ipsum exercitationem sunt minima maxime, amet reiciendis animi? Quidem repudiandae sapiente eum quisquam nisi nostrum molestias sint. Veritatis architecto, a facilis aspernatur maxime beatae aut, assumenda modi nobis deserunt ad accusantium recusandae enim quam nulla tenetur eum, corporis perspiciatis nostrum mollitia eveniet ea culpa earum. Quibusdam voluptates architecto fugiat unde! Temporibus voluptatem quisquam illum unde tempora cumque suscipit assumenda eos quas. Illum perspiciatis magnam odit asperiores, voluptates vitae suscipit sunt quasi et? Explicabo vitae quae consequatur.
    </>
  )
}

export const query = graphql`
  query {
    homepage: strapiHomepage {
      # Hero
      hero_Heading
      hero_Subheading {
        text
      }
      hero_Cta {
        theme
        text
        href
        target
        isExternal
      }
      hero_CaseStudies {
        name
        slug
        thumbnail {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      hero_CaseStudiesLink
      # Conquest
      conquest_Heading
      conquest_Claim
      conquest_Paragraph
      conquest_SecondClaim {
        data {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      conquest_Cta {
        theme
        text
        href
      }
      # Challange
      challenge_Heading
      challenge_Claim
      challenge_Paragraph
      challenge_SecondClaim {
        data {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      challenge_Cta {
        theme
        text
        href
      }
      # Services
      services_Heading
      services_List {
        title
        description
      }
      # Creativity
      creativity {
        data {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      # Roadmap
      roadmap_Heading
      roadmap_Process {
        title
        description
      }
      roadmap_Cta {
        theme
        text
        href
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Kryptonum</title>
