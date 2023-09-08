import { Link } from "react-router-dom";
import { useGetBodyListQuery } from "../redux/bodyServices/bodyServices";
import Header from "./Header";
import Exercises from "./Exercises";
import TargetList from "./TargetList";

const Body = () => {
  const { data, isLoading } = useGetBodyListQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="flex gap-5 mt-10 flex-wrap">
          {data.map((i) => (
            <div key={i}>
              <Link to={`/${i}`}>{i}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center" id="exercises">
        <Exercises itemsPerPage={16} />
      </div>
      <div className="mt-10 mb-10">
        <TargetList />
      </div>
    </>
  );
};

export default Body;
