import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { godaddy } from "./pages/godaddy";
import Reset from "./Reset";
import Resume from "./pages/Resume";
import Dashboard from "./Dashboard";
import GitHubCredds from "./pages/GitCred";
// import GitAuthorized from "./pages/GitAuthorized";

function App() {
  React.useEffect(() => {}, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/resume" element={<Resume />} />
        {/* <Route
          exact
          path="well-known/pki-validation/godaddy"
          element={<godaddy />}
        /> */}
        <Route exact path="/git-cred" element={<GitHubCredds />} />
        {/* <Route exact path="/git-cred-authorize" element={<GitAuthorized />} /> */}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
