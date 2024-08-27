import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import Details from "../pages/details/Details";
import NoData from "../components/NoData";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NoData />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/:details" element={<Details />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
