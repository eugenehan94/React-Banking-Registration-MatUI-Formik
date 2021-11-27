/*Testing Purpose Only */
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Client from "./Pages/Client";
import Form from "./Pages/Form";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="client" element={<Client />}></Route>
          <Route path="form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
