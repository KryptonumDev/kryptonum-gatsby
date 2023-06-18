import * as React from "react"
import { graphql } from "gatsby";
import { SEO } from "../../../components/global/Seo";
import Hero from "../../../components/sections/Team/TeamMember/Hero";

const TeamMemberPage = ({
  data: { teamMember : {
    name,
    cryptonym,
    img,
  }
  }
}) => {
  return (
    <>
      <Hero name={name} cryptonym={cryptonym} img={img} />
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    teamMember: sanityTeamMember(id: {eq: $id}) {
      name
      cryptonym
      img {
        asset {
          altText
          gatsbyImageData(placeholder: BLURRED, width: 356, height: 356)
        }
      }
    }
  }
`

export default TeamMemberPage;

export const Head = ({data: { teamMember : { name, cryptonym } } }) => (
  <SEO
    title={`${name} - ${cryptonym} w Kryptonum`}
    description=""
  />
)