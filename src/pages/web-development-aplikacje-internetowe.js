import { graphql } from "gatsby";
import * as React from "react"
import { SEO } from "../components/global/Seo";
import CaseStudies from "../components/sections/CaseStudies";
import CtaSection from "../components/sections/CtaSection";
import HeroServices from "../components/sections/HeroServices";
import Testimonials from "../components/sections/Testimonials";
import Advantages from "../components/sections/WebDevelopment/Advantages";
import Flexibility from "../components/sections/WebDevelopment/Flexibility";
import Process from "../components/sections/WebDevelopment/Process";

const WebDevelopmentPWAsPage = () => {
  // const { page: {
  //   hero_Heading,
  //   hero_Img,
  //   hero_Claim,
  //   hero_Paragraph,
  //   hero_SecondParagraph,
  //   hero_Nav,
  //   advantages_Heading,
  //   advantages_Array,
  //   advantages_CtaHeading,
  //   advantages_Cta,
  //   flexibility_Heading,
  //   flexibility_Claim,
  //   flexibility_Paragraph,
  //   flexibility_SecondParagraph,
  //   flexibility_Cta,
  //   process_Heading,
  //   process_Claim,
  //   process_Paragraph,
  //   process_List,
  //   caseStudies_Heading,
  //   ctaSection_Heading,
  //   ctaSection_Cta,
  //   ctaSection_Img,
  // } } = data;
  return (
    <>
    
    </>
  );
}

// export const query = graphql`
//   query {
  
//   }
// `

export default WebDevelopmentPWAsPage;

export const Head = () => (
  <SEO
    title="Dedykowane aplikacje internetowe, aplikacje webowe | Kryptonum"
    description="Aplikacje webowe dla firm, instytucji i osób indywidualnych. Zaprojektujemy dla Ciebie profesjonalną aplikację internetową, którą pokochają użytkownicy!"
  />
)