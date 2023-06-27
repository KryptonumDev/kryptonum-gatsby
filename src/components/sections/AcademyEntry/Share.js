import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Facebook, Linkedin, Pinterest } from "../../atoms/Icons";

const baseUrl = `https://kryptonum.eu/pl/akademia/`;
const share = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=`,
  twitter: `https://twitter.com/intent/tweet?url=`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=`,
  pinterest: `https://pinterest.com/pin/create/link/?url=`,
}

const Share = ({ heading, img, url }) => {
  Object.keys(share).forEach((platform) => {
    share[platform] += baseUrl + url;
  });
  return (
    <Wrapper>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <div className="wrapper">
          <a href={share.facebook} target="_blank" rel="noreferrer">
            <Facebook />
            <span>Facebook</span>
          </a>
          <a href={share.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
            <span>Linkedin</span>
          </a>
          <a href={share.pinterest} target="_blank" rel="noreferrer">
            <Pinterest />
            <span>Pinterst</span>
          </a>
        </div>
      </header>
      <GatsbyImage
        image={img.asset.gatsbyImageData}
        alt={img.asset.altText || ''}
        className="img"
        objectFit="contain"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
  align-items: center;
  background-color: var(--neutral-900);
  overflow: visible;
  header {
    padding: ${Clamp(32, 48, 64, 'px')} ${Clamp(32, 96, 110, 'px')};
    padding-right: 0;
    h2 {
      margin-bottom: 32px;
    }
  }
  .wrapper {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 32px;
    a {
      text-align: center;
      font-size: ${Clamp(16, 32, 30)};
      svg {
        height: 128px;
        width: 128px;
        border: 1px solid var(--neutral-200);
        border-radius: 50%;
        padding: 32px;
        margin-bottom: 8px;
      }
      span {
        display: block;
      }
    }
  }
  margin-top: 48px;
  .img {
    margin-top: -48px;
  }
  @media (max-width: 1189px){
    grid-template-columns: 1fr;
    gap: 0;
    background-color: unset;
    justify-content: center;
    header {
      border-radius: 2px;
      background-color: var(--neutral-900);
      padding: ${Clamp(32, 48, 64, 'px')} 32px;
      h2 {
        margin: 0 auto 32px;
      }
    }
    .wrapper {
      margin: 0 auto;
    }
    margin-top: 0;
    .img {
      order: -1;
      margin-top: 0;
    }
  }
  @media (max-width: 599px){
    header {
      padding: 32px 16px;
      h2 {
        svg {
          display: none;
        }
      }
    }
    .wrapper {
      gap: 16px;
      a {
        svg {
          height: 64px;
          width: 64px;
          padding: 16px;
        }
      }
    }
  }
`

export default Share;