import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ pageCount, onPageChange }) => {
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth <= 768 ? 4 : 8
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 4 : 8);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ReactPaginate
      previousLabel={
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-gray-700 dark:text-gray-300 text-lg"
        />
      }
      nextLabel={
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-gray-700 dark:text-gray-300 text-lg"
        />
      }
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={itemsPerPage === 4 ? 3 : 5}
      onPageChange={onPageChange}
      containerClassName="flex justify-center items-center space-x-2 my-4 text-sm"
      pageClassName="rounded"
      pageLinkClassName="px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition duration-300"
      previousClassName="rounded"
      previousLinkClassName="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition duration-300"
      nextClassName="rounded"
      nextLinkClassName="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition duration-300"
      breakLinkClassName="p-2 text-gray-700 dark:text-gray-300"
      activeClassName="bg-blue-500 dark:bg-blue-600 text-white rounded"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  );
};

export default Pagination;
