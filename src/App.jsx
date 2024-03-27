import React from "react";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import { Route, Routes } from "react-router-dom";
import OtherLanguages from "./components/ProgrammingLanguages/ProgrammingLanguages";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Animation from "./components/Animation/Animation";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className=" max-[319px]:hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Animation />} />
        <Route path="/html-css-js" element={<WebDevelopment />} />
        <Route path="/compiler" element={<OtherLanguages />} />
      </Routes>
    </div>
  );
}

export default App;
