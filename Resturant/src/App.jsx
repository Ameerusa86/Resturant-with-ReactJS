import "./App.css";
import About from "./Components/About/About";
import Head from "./Components/Header/Head";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
