import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import { selectUsers, setUser } from "./store/usersSlice.js";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUsers) || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(setUser({ currentUser: true }));
    }
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Display loader while loading
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user.currentUser ? <Navigate replace to="/home" /> : <Login />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={user.currentUser ? <Home /> : <Navigate replace to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
