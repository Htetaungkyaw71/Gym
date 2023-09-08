/* eslint-disable react/prop-types */
import AllExercises from "./AllExercises";
import { useGetAllExercisesQuery } from "../redux/bodyServices/bodyServices";
import { useState } from "react";

const Exercises = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const { data, isLoading } = useGetAllExercisesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <AllExercises
        items={currentItems}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Exercises;
