import React from "react";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions'
import Pagination from "../organisms/BlogPagination";
import CuriosityEntry from "../organisms/CuriosityEntry";

const CuriosityEntries = ({ page, totalCount, urlBasis, curiosityEntries, heading }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading || `Arena **ciekawostek** (${curiosityEntries.nodes.length})`}</DecorativeHeading>
      <div className="wrapper">
        {curiosityEntries.nodes.map((entry, i) => (
          <CuriosityEntry data={entry} key={i} />
        ))}
      </div>
      <Pagination currentPage={page} itemCount={totalCount} urlBasis={urlBasis} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    max-width: ${686 / 16}rem;
    margin-bottom: ${Clamp(28, 48, 72)};
  }
`

export default CuriosityEntries;