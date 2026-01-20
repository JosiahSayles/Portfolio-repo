import { Routes, Route } from "react";
import Layout from "./layout/Layout";
import HomePage from "./Components/Home-page";
import AboutPage from "./Components/About-page";
import Portfolio from "./Components/Portfolio";
import ContactPage from "./Components/Contact-page";

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
