import gym from "../assets/gym_header.jpg";

const Header = () => {
  return (
    <div className="grid grid-cols-2 h-screen items-center text-center">
      <div>
        <h1 className="text-3xl">Gym</h1>
        <p className="text-xl mt-3 mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
        </p>
        <div>
          <a href="#exercises" className="p-3 mt-10 bg-red-500 text-white">
            Explore Exercises
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={gym} className="w-80 h-96" />
      </div>
    </div>
  );
};

export default Header;
