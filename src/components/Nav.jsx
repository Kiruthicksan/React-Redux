import React, { useState } from "react";
import { Link,} from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Jupiter
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-link mx-3"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
