import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions'
import Button from '../atoms/Button';
import BlogEntry from "../organisms/BlogEntry";

const LatestBlogEntries = ({ data, heading, exclude=null, smallEntry=false }) => {
  let { blogEntries } = useStaticQuery(graphql`
    query {
      blogEntries: allSanityBlogEntries(limit: 4, sort: {_createdAt: DESC}) {
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
          _rawContent
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
  if(data){
    blogEntries = data;
  }
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading || 'Zobacz nasze najnowsze **posty** na blogu'}</DecorativeHeading>
      <div className="wrapper">
        {blogEntries.nodes.filter(entry => entry.slug.current !== exclude).map((entry, i) => (
          i < 3 && (
            <BlogEntry data={entry} key={i} smallEntry={smallEntry} />
          )
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