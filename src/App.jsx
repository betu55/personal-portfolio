import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import * as comp from "./components/pages";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="w-full h-full pages">
          <Routes>
            <Route path="/" element={<comp.Home />} />
            <Route path="/about" element={<comp.About />} />
            <Route path="/contact" element={<comp.Contact />} />
            <Route path="/projects" element={<comp.Projects />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
