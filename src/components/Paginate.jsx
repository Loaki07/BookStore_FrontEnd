import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page }) => {
  return pages > 1 && (
    <Pagination>
      {[...Array(pages).keys()].map(pageNumber => (
        <LinkContainer 
          to={`/page/${pageNumber+1}`}>
          <Pagination.Item 
           active={pageNumber+1 === page}>
            {pageNumber+1}
          </Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  )
}

export default Paginate
