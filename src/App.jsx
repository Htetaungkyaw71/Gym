import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Body from "./components/Body";
import Navbar from "./components/Navbar";
// import Detail from "./components/Detail";
// import Exercise from "./components/Exercise";
// import TargetDetail from "./components/TargetDetail";
import { Suspense, lazy } from "react";

const Body = lazy(() => import("./components/Body"));
const Detail = lazy(() => import("./components/Detail"));
const Exercise = lazy(() => import("./components/Exercise"));
const TargetDetail = lazy(() => import("./components/TargetDetail"));

function App() {
  return (
    <>
      <div className="container mx-auto">
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
