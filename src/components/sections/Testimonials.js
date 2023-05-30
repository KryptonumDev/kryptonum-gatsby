import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions';
import TestimonialsSwiper from "../organisms/TestimonialsSwiper";

const Testimonials = () => {
  const { testimonials } = useStaticQuery(graphql`
    query {
      testimonials: allSanityTestimonials(limit: 3) {
        nodes {
          name
          project
          text
          cta {
            theme
            text
            href
          }
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED, width: 268)
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <DecorativeHeading type="h2">Zobacz, co mówią **klienci**:</DecorativeHeading>
      <TestimonialsSwiper testimonials={testimonials} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    margin-bottom: ${Clamp(28, 64, 64, "px")};
  }
`
 
export default Testimonials;