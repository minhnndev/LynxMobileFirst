import { MemoryRouter, Routes, Route } from "react-router";

import Home from "../pages/home/Home.jsx";
import Details from "../pages/details/Details.jsx";

const Routers = () => (
  <MemoryRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </MemoryRouter>
);

export default Routers;
