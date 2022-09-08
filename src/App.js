import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { godaddy } from "./pages/godaddy";
import Reset from "./Reset";
import Resume from "./pages/Resume";
import Dashboard from "./Dashboard";

function App() {
  React.useEffect(() => {}, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/git-auth" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
