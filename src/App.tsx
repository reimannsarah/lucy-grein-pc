import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import Layout from "./components/main/Layout";
import About from "./components/main/About";
import Landing from "./components/main/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/*" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
