import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ id, name, gifUrl, equipment, target }) => {
  return (
    <Link to={`/exercise/${id}`}>
      <div className="mb-5">
        <img src={gifUrl} className="w-32 h-32" />
        <h1>{name}</h1>
        <p>
          {equipment} -- {target}
        </p>
      </div>
    </Link>
  );
};

export default Card;
