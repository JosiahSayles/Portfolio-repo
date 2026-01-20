import { Routes, Route } from "react-router";
import React from "react";
import Layout from "./src/layout/Layout";
import HomePage from "./src/Components/Home-page";
import AboutPage from "./src/Components/About-page";
import Portfolio from "./src/Components/Portfolio";
import ContactPage from "./src/Components/Contact-page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
