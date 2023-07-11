import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-3"> User Details </h2>
          <h6 className="text-center">Details of User with id - {id}</h6>
          <div className="card">
            <div className="class-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name : </b> {user.name}
                </li>
                <li className="list-group-item">
                  <b>Username : </b> {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email : </b> {user.email}
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link to={"/"} className="btn btn-primary mt-3">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
