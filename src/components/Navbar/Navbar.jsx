import React from "react";
import "../../index.css";
import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-transparent w-full grid grid-cols-2 text-center justify-center items-center fixed">
      <span
        className="flex"
        onClick={() => {
          navigate("/");
        }}
      >
        <h1 className="logo text-white xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl max-sm:text-xl font-bold lg:m-5 max-xl:m-6 max-md:m-4 max-sm:m-3 cursor-pointer">
          Code Editor
        </h1>
      </span>
      <div className="flex max-sm:block gap-2">
        <button className="p-3 m-1 bg-purple-700 rounded-xl xl:p-2 lg:p-2 md:p-2 max-sm:p-[5px] max-sm:w-32 w-36 hover:bg-gradient-to-r from-cyan-500 to-blue-500 active:bg-transparent">
          <Link
            className="text-slate-100 xl:text-xl lg:text-xl md:text-lg max-sm:text-sm font-bold"
            to={"/html-css-js"}
          >
            Web Dev
          </Link>
        </button>
        <button className="p-3 m-1 bg-slate-100 rounded-xl xl:p-2 lg:p-2 md:p-2 max-sm:p-[5px] max-sm:w-32 w-36 hover:bg-gradient-to-r from-purple-500 to-pink-600 text-purple-700 hover:text-white">
          <Link
            className=" xl:text-xl lg:text-xl md:text-lg max-sm:text-sm font-bold "
            to={"/compiler"}
          >
            Compiler
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
