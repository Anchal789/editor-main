import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-black">
      <span
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <h1 className="logoTextC">C</h1>
        <h1 className="logoTextE">E</h1>
      </span>
      <div>
        <Link to={"/html-css-js"}>Web Development</Link>
        <Link to={"/compiler"}>Other Languages</Link>
      </div>
    </div>
  );
};

export default Navbar;
