import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Exercise from "./components/Exercise";
import TargetDetail from "./components/TargetDetail";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/:name" element={<Detail itemsPerPage={16} />} />
            <Route path="/exercise/:id" element={<Exercise />} />
            <Route
              path="/target/:name"
              element={<TargetDetail itemsPerPage={16} />}
            />
            <Route />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
