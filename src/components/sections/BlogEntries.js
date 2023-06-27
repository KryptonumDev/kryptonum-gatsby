import React from "react";
import styled from "styled-components";
import DecorativeHeading from "../atoms/DecorativeHeading";
import { Clamp } from '../../utils/functions'
import Pagination from "../organisms/BlogPagination";
import BlogEntry from "../organisms/BlogEntry";

const BlogEntries = ({ urlBasis, totalCount, blogEntries, page, heading }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{`${heading || `**Najświeższe** artykuły`} (${totalCount})`}</DecorativeHeading>
      <div className="wrapper">
        {blogEntries.nodes.map((entry, i) => (
          <BlogEntry data={entry} key={i} />
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

export default BlogEntries;