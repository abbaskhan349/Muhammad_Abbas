// eslint-disable-next-line no-unused-vars
import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 pt-5">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-2xl text-white">Muhammad Abbas</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 space-x-5 text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Works</a>
            </li>
            <li>
              <a>contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-base rounded-2xl px-8">Let's Talk</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
