import { useParams } from "react-router-dom";
import { useGetExerciseQuery } from "../redux/bodyServices/bodyServices";

const Exercise = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetExerciseQuery(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={data.gifUrl} />
      </div>
      <div>
        <h1>{data.name}</h1>
        <p>{data.equipment}</p>
        <p>{data.bodyPart}</p>
        <p>{data.target}</p>
      </div>
    </div>
  );
};

export default Exercise;
