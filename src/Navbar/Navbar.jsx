import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Your Logo</div>
      <div className="nav-buttons">
        <button>Home</button>
        <button>Python</button>
        <button>Java</button>
        <button>C++</button>
        <button>Web Development</button>
      </div>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
};

export default Navbar;