import { MemoryRouter, Routes, Route } from "react-router";

import Home from "../pages/home/Home.jsx";

const Routers = () => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </MemoryRouter>
);

export default Routers;
