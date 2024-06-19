import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { ErrorPage, Home } from "../../pages/index.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
