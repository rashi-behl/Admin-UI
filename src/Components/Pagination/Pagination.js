import "./Pagination.css";
import { BsChevronDoubleRight,BsChevronDoubleLeft,BsChevronRight,BsChevronLeft } from "react-icons/bs";

const Pagination = (props) => {
  const { page, numOfUsers, handleSelectedDelete, setPage } = props;

  const totalPages = Math.ceil(numOfUsers / 10);

  const handlePageNavigation = (index) => {
    if (index < 1) {
      index = 1;
    } else if (index > totalPages) {
      index = totalPages;
    }
    setPage(index);
  };

  const handlePageChange = (index) => {
    setPage(index);
  };

  let pages = [];
  pages.push(
    <div
      key={-3}
      className={`pageBubble ${page === 1 ? "disabled" : ""}`}
      onClick={() => handlePageChange(1)}
    >
      <BsChevronDoubleLeft/>
    </div>
  );
  pages.push(
    <div
      key={-2}
      className={`pageBubble ${page === 1 ? "disabled" : ""}`}
      onClick={() => handlePageNavigation(page - 1)}
    >
     <BsChevronLeft/>
    </div>
  );
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <div
        key={i}
        onClick={() => handlePageChange(i)}
        className={`pageBubble ${page === i ? "selected" : ""}`}
      >
        {i}
      </div>
    );
  }
  pages.push(
    <div
      key={-1}
      className={`pageBubble ${page === totalPages ? "disabled" : ""}`}
      onClick={() => handlePageNavigation(page + 1)}
    >
      <BsChevronRight/>

    </div>
  );
  pages.push(
    <div
      key={0}
      className={`pageBubble ${page === totalPages ? "disabled" : ""}`}
      onClick={() => handlePageChange(totalPages)}
    >
     <BsChevronDoubleRight/>
    </div>
  );

  return (
    <div className="paginationDiv">
      <button className="deleteBtn" onClick={() => handleSelectedDelete()}>
        Delete Selected
      </button>
      <div className="pagination">{pages}</div>

    </div>
  );
};

export default Pagination;
