import React, { useState } from "react";
import "../style/RegisterPage.css";
import { auth } from "../firebase/config.js";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/usersSlice.js";

function Register() {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleCredentials(e) {
    setError("");
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="register-container">
      <div className="logo-container">
        <img
          className="dental-hifi-logo"
          src="Dental-Hifi.jpg"
          alt="Dental Hi-Fi"
        />
      </div>
      <div className="register-box">
        <h2>Register</h2>

        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              handleCredentials(e);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              handleCredentials(e);
            }}
          />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>
        <div className="gap-y-3">
          <Link to="/" className="ms-2">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
