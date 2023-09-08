import { Link } from "react-router-dom";
import { useGetTargetListQuery } from "../redux/bodyServices/bodyServices";

const TargetList = () => {
  const { data, isLoading } = useGetTargetListQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl text-center">TargetList</h1>
      <div className="flex gap-5 flex-wrap">
        {data?.map((i) => (
          <Link key={i} to={`target/${i}`}>
            {i}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TargetList;
