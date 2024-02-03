import React from "react";
import { Routes, Route } from "react-router-dom";
import { BaseLayout } from "../layout-components/BaseLayout";
import HomePage from "../pages/HomePage";

export const RoutesTree = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
