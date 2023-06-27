import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions'
import Button from '../atoms/Button';
import BlogEntry from "../organisms/BlogEntry";

const LatestBlogEntries = ({ heading }) => {
  const { entries } = useStaticQuery(graphql`
    query {
       entries: allSanityBlogEntries(limit: 3, sort: {_createdAt: DESC}) {
        nodes {
          title
          subtitle
          slug {
            current
          }
          author {
            name
            slug {
              current
            }
            img {
              asset {
                altText
                gatsbyImageData(placeholder: BLURRED, width: 48, height: 48)
              }
            }
          }
          categories {
            name
            slug {
              current
            }
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 230, height: 230)
            }
          }
          _createdAt(formatString: "D MMMM Y", locale: "pl")
        }
      }
    }
  `);

  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading || 'Zobacz nasze najnowsze **posty** na blogu'}</DecorativeHeading>
      <div className="wrapper">
        {entries.nodes.map((entry, i) => (
          <BlogEntry data={entry} key={i} />
        ))}
      </div>
      <Button theme="secondary" to='/pl/blog' className='cta'>Przejdź do bloga</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    max-width: ${686/16}rem;
    margin-bottom: ${Clamp(28, 48, 72)};
  }
  .cta {
    display: flex;
    width: fit-content;
    margin: 32px auto 0;
  }
`
 
export default LatestBlogEntries;