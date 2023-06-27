import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"
import styled from "styled-components"
import EntryCard from "../../organisms/SitemapEntryCard"
import CaseStudy from "../../organisms/CaseEntrySmall"
import { Clamp } from "../../../utils/functions"

export default function Grid({ team, blogEntries, sanityWebDevelopment, sanityAgency, sanityGraphicsDesign, sanityWorkshop, caseStudies, akademiaEntries }) {

  const postsByCategory = useMemo(() => {
    const arr = []

    blogEntries.nodes.forEach((post) => {
      post.categories.forEach((category) => {
        const categoryIndex = arr.findIndex((item) => item.category.name === category.name)
        if (categoryIndex === -1) {
          arr.push({
            category: category,
            posts: [post]
          })
        } else {
          arr[categoryIndex].posts.push(post)
        }
      })
    })

    return arr
  }, [blogEntries])

  const akademiaByCategory = useMemo(() => {
    const arr = []

    akademiaEntries.nodes.forEach((post) => {
      post.categories.forEach((category) => {
        const categoryIndex = arr.findIndex((item) => item.category.name === category.name)
        if (categoryIndex === -1) {
          arr.push({
            category: category,
            posts: [post]
          })
        } else {
          arr[categoryIndex].posts.push(post)
        }
      })
    })

    return arr
  }, [akademiaEntries])

  return (
    <Wrapper>
      <Link className="big-link" to='/pl'>Strona główna</Link>
      <Link className="big-link" to='/pl'>Szybki kontakt</Link>
      <Link className="big-link" to='/pl'>Formularz rozbudowany</Link>
      <div>
        <Link className="big-link" to='/pl'>Zespół</Link>
        <TeamGrid>
          {team.nodes.map((person, i) => (
            <Link to={`/pl/zespol/${person.slug.current}`} key={i} className="item" onClick={(e) => handleHideNav(e)}>
              <GatsbyImage image={person.img.asset.gatsbyImageData} alt={person.img.asset.altText || ''} className="img person-border" />
              <p>{person.name}</p>
            </Link>
          ))}
        </TeamGrid>
      </div>
      <div>
        <Link className="big-link title" to='/pl'>Blog</Link>
        {postsByCategory.map((el, i) => (
          <div key={i}>
            <Link className="med-link" to={`/pl/blog/kategoria/${el.category.slug.current}`}>{el.category.name} ({el.posts.length})</Link>
            <ul>
              {el.posts.map((entry, i) => (
                <EntryCard data={entry} key={i} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <Link className="big-link" to='/pl'>
          <GatsbyImage image={sanityAgency.hero_Img.asset.gatsbyImageData} alt={sanityAgency.hero_Img.asset.altText || ''} className="img main-img" />
          <span>Opieka agencyjna</span>
        </Link>
      </div>
      <div>
        <Link className="big-link" to='/pl'>
          <GatsbyImage image={sanityWebDevelopment.hero_Img.asset.gatsbyImageData} alt={sanityWebDevelopment.hero_Img.asset.altText || ''} className="img main-img" />
          <span>Web Development</span>
        </Link>
        <Link className="med-link" to='/pl'>Aplikacje internetowe</Link>
        <Link className="med-link" to='/pl'>Sklepy internetowe</Link>
        <Link className="med-link" to='/pl'>Strony internetowe</Link>
      </div>
      <div>
        <Link className="big-link" to='/pl'>
          <GatsbyImage image={sanityGraphicsDesign.hero_Img.asset.gatsbyImageData} alt={sanityGraphicsDesign.hero_Img.asset.altText || ''} className="img main-img" />
          <span>Grafika & design & kreacja</span>
        </Link>
        <Link className="med-link" to='/pl'>Audyty</Link>
        <Link className="med-link" to='/pl'>Identyfikacja wizualna i branding</Link>
        <Link className="med-link" to='/pl'>Logo</Link>
      </div>
      <div>
        <Link className="big-link" to='/pl'>
          <GatsbyImage image={sanityWorkshop.hero_Img.asset.gatsbyImageData} alt={sanityWorkshop.hero_Img.asset.altText || ''} className="img main-img" />
          <sapn>Warsztat strategiczny</sapn>
        </Link>
      </div>
      <div>
        <Link className="big-link" to='/pl'>Case study</Link>
        {caseStudies.nodes.map((entry, i) => (
          <CaseStudy data={entry} />
        ))}
      </div>
      <div>
        <Link className="big-link" to='/pl'>Akademia</Link>
        {akademiaByCategory.map((el, i) => (
          <div key={i}>
            <Link className="med-link" to={`/pl/blog/kategoria/${el.category.slug.current}`}>{el.category.name} ({el.posts.length})</Link>
            <ul>
              {el.posts.map((entry, i) => (
                <EntryCard data={entry} key={i} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link className="big-link" to='/pl'>Polityka prywatności</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  columns: 2;
  column-gap: 32px;

  @media (max-width: 962px) {
    columns: 1;
  }

  .big-link{
    margin-top: ${Clamp(48, 96, 96, "px")};
    font-size: ${Clamp(28, 50, 48)};
    display: block;
    letter-spacing: -0.24px;

    &.title{
    }
  }

  div, a{
    break-inside: avoid;
  }

  .med-link{
    margin-top: 24px;
    font-size: ${Clamp(20, 32, 30)};
    display: block;
  }

  ul{
    margin-top: 24px;

    @media (max-width: 420px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    @media (max-width: 349px) {
      grid-template-columns: 1fr;
    }
  }

  .main-img{
    margin-bottom: 32px;
  }
`

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px ${Clamp(16, 24, 48, "px")};
  margin-top: 32px;

  .item{
    width: 156px;

    p{
      text-align: center;
      margin-top: 8px;
      font-size: 1.375rem;
    }
  }
`