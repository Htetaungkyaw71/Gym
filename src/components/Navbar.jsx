import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around p-3">
      <Link className="text-3xl" to="/">
        Gym
      </Link>
      <h1 className="text-2xl">Explore Exercises</h1>
    </div>
  );
};

export default Navbar;
