import React from "react";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import { Route, Routes } from "react-router-dom";
import OtherLanguages from "./components/ProgrammingLanguages/ProgrammingLanguages";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import "./index.css";

function App() {
  return (
    <div className="absolute h-full w-full max-[277px]:hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/html-css-js" element={<WebDevelopment />} />
        <Route path="/compiler" element={<OtherLanguages />} />
      </Routes>
    </div>
  );
}

export default App;
