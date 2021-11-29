/*First comment to test branch test1*/
/*Added comment to test branch test2*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Client from "./Pages/Client";
import Form from "./Pages/Form";
import ScrollToTop from "./Components/ScrollToTop";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
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
