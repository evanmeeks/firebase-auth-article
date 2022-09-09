import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { godaddy } from "./pages/godaddy";
import Reset from "./Reset";
import Resume from "./pages/Resume";
import Dashboard from "./Dashboard";

function App() {
  React.useEffect(() => {
    fetch(
      "https://www.googleapis.com/auth/contacts.readonly?key=AIzaSyDK73LVTB7HZX4sjOl6nIlG_oMMGFAV8MI"
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/authorized" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
