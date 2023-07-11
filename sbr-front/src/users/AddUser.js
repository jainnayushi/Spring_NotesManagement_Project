import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  // Deconstruct user{}
  const { name, username, email } = user;

  // Add input to user{}
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Send this user{} in DB via axios
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-3"> Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="md-3">
              <label htmlFor="name" className="form-label mt-2 md-1">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="md-3">
              <label htmlFor="username" className="form-label mt-3 md-1">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="md-3">
              <label htmlFor="email" className="form-label mt-3 md-1">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary mt-4 text-center"
            >
              Submit
            </button>
            <Link
              to="/"
              className="btn btn-outline-danger mx-3 mt-4 text-center"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
