import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/main/Home";
import Layout from "./components/main/Layout";
import About from "./components/main/About";
import Landing from "./components/main/Landing";
import Values from "./components/main/Values";
import Programs from "./components/main/Programs";

function App() {

  function ScrollToTop() {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  }
  
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/*" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="values" element={<Values />} />
          <Route path="programs" element={<Programs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
