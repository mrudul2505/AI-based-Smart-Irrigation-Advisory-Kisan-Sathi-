import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Farms from "./pages/Farms";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <h1>KisanSaathi</h1>
      <p>Smart Irrigation Single Page Application</p>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/farms">Farms</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
