import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationMenu = (props) => {
  const { paginations, setCurrentPage } = props;
  return (
    <Pagination aria-label='Page navigation'>
      {paginations.map((item) => (
        <PaginationItem
          key={item}
          onClick={() => setCurrentPage(item)}
        >
          <PaginationLink>
            {item}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default PaginationMenu;