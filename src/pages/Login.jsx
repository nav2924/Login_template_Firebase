import React, { useState } from "react";
import "../style/LoginPage.css";
import { auth } from "../firebase/config.js";
import { Link, useNavigate } from "react-router-dom";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/usersSlice.js";

function Login() {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  onAuthStateChanged(auth, (user) => {
    console.log("Auth state changed, user:", user);
    if (user) {
      dispatch(setUser({ id: user.uid, email: user.email }));
    } else {
      dispatch(setUser(null));
    }
  });

  function handleCredentials(e) {
    setError("");
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });

    console.log(userCredentials);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error
      });
  };

  function handleLoginGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google sign-in user:", user);
        dispatch(setUser({ id: user.uid, email: user.email }));
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  }

  function handlePasswordReset() {
    const email = prompt("Enter your Email");
    sendPasswordResetEmail(auth, email);
    alert("Password reset link sent your " + email);
  }

  return (
    <div className="login-container">
      <div className="logo-container">
        <img
          className="dental-hifi-logo"
          src="Dental-Hifi.jpg"
          alt="Dental Hi-Fi"
        />
      </div>
      <div className="login-box">
        <h2>Log in</h2>
        <div className="social-login">
          <button className="google-btn" onClick={handleLoginGoogle}>
            <img className="google-logo" src="/google.jpg" alt="Google" />
            Log in with Google
          </button>
          <button className="apple-btn">
            <img className="apple-logo" src="/apple.jpg" alt="Apple" />
            Log in with Apple
          </button>
        </div>
        <div className="or">or</div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email or Phone No."
            name="email"
            onChange={(e) => {
              handleCredentials(e);
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              handleCredentials(e);
            }}
          />
        </div>
        <a href="" className="forgot-password" onClick={handlePasswordReset}>
          Forgot your password?
        </a>
        <button
          className="login-btn"
          onClick={(e) => {
            handleLogin(e);
          }}
        >
          Log in
        </button>
        {error && <div className="text-red-600">{error}</div>}
        <div className="gap-y-3">
          {" "}
          <Link to="/register" className="ms-2">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

// https://dentalhifi-949ea.firebaseapp.com/__/auth/handler
