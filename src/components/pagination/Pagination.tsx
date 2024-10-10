import { Dispatch } from "react";
import { generatePageItems } from "./Pagination.utils";
import { ButtonPaginate, WrapperPagination } from "./Pagination.style";
import useMediaCustom from "../../hooks/useMediaCustom";
import { LibsSVG } from "../../utils/libsSVG";

interface IPagination {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  setCurrentPage: Dispatch<number>;
  paginate: (value: number, setCurrentPage: Dispatch<number>) => void;
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  setCurrentPage,
  currentPage,
}: IPagination) => {
  const { isDesktop } = useMediaCustom();
  const delta = isDesktop ? 9 : 1;

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
    if (currentPage === totalPages) {
      setCurrentPage(1);
    }
  };

  return (
    <WrapperPagination data-testid="pagination_test">
      <div className="pagination_container">
        <div className="pagination_left">
          <i onClick={previousPage} className="icon">
            <img src={LibsSVG.rigthPaginate} alt="icon_rigth" />
          </i>
        </div>
        <div className="page_container_number" aria-label="ellipses">
          {generatePageItems(currentPage, totalPages, delta).map((number) => (
            <ButtonPaginate
              key={number}
              active={currentPage === number ? "active-class" : ""}
              more={number === "..." ? "active-class" : ""}
              onClick={() => {
                paginate(number, setCurrentPage);
              }}
              className={`page-number`}
              disabled={number === "..."}>
              {number}
            </ButtonPaginate>
          ))}
        </div>
        <div className="pagination_rigth">
          <i onClick={nextPage} className="icon">
            <img src={LibsSVG.leftPaginate} alt="icon_rigth" />
          </i>
        </div>
      </div>
    </WrapperPagination>
  );
};

export default Pagination;
