import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Client from "./Pages/Client";
import Form from "./Pages/Form";
import ScrollToTop from "./Components/ScrollToTop";
const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="client" element={<Client />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
