/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";
import Card from "./Card";

const AllExercises = ({ items, handlePageClick, pageCount, name }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl">{name}</h1>
      <div className="grid grid-cols-4">
        {items?.map((i) => (
          <Card key={i.id} {...i} />
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default AllExercises;
