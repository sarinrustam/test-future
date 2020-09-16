import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationMenu = (props) => {
  const { paginations, setCurrentPage, currentPage } = props;

  let newPaginations;

  if (currentPage - 2 <= 0) {
    newPaginations = paginations.slice(0, 5);
  } else if (currentPage + 2 > paginations.length) {
    newPaginations = paginations.slice(paginations.length - 5, paginations.length)
  } else {
    newPaginations = paginations.slice(currentPage - 3, currentPage + 2)
  }

  return (
    <Pagination aria-label='Page navigation'>
      <PaginationItem 
        disabled={currentPage === 1} 
      >
        <PaginationLink
          first
          onClick={() => {setCurrentPage(1)}}
        />
      </PaginationItem>
      {newPaginations.map((item) => (
        <PaginationItem
          key={item}
          onClick={() => setCurrentPage(item)}
          disabled={currentPage === item}
        >
          <PaginationLink>
            {item}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem
        disabled={currentPage === paginations.length}
      >
        <PaginationLink
          last
          onClick={() => setCurrentPage(paginations.length)}
        />
      </PaginationItem>
    </Pagination>
  );
};

PaginationMenu.propTypes = {
  paginations: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationMenu;