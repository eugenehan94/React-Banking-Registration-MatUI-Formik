import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Client from "./Pages/Client";
import Form from "./Pages/Form";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="client" element={<Client />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
