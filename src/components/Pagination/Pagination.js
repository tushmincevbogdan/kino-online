import React from "react";
import "./Pagination.css";

const Pagination = ({ defaultCount, totalCount, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / defaultCount); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className={`page-item${currentPage == number ? " current-page" : ""}`} key={number}>
            <a href="#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
