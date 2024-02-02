import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import Layout from "./components/main/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
