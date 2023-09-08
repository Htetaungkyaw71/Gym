import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetTargetDetailQuery } from "../redux/bodyServices/bodyServices";
import AllExercises from "./AllExercises";

/* eslint-disable react/prop-types */

const TargetDetail = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const { name } = useParams();
  const { data, isLoading } = useGetTargetDetailQuery(name);

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
    <div>
      <AllExercises
        items={currentItems}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </div>
  );
};

export default TargetDetail;
