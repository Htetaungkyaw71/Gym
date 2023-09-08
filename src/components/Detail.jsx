/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useGetBodyDetailQuery } from "../redux/bodyServices/bodyServices";
import { useState } from "react";
import AllExercises from "./AllExercises";

const Detail = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const { name } = useParams();
  const { data, isLoading } = useGetBodyDetailQuery(name);

  console.log(data);

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
    <AllExercises
      items={currentItems}
      handlePageClick={handlePageClick}
      pageCount={pageCount}
    />
  );
};

export default Detail;
