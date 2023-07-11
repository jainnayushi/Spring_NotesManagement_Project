import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav
        class="navbar bg-dark border-bottom border-bottom-dark mb-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            SpringBoot + React App
          </Link>
          <Link className="btn btn-dark" to="/addUser">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
