import "./App.css";
import About from "./Components/About/About";
import Head from "./Components/Header/Head";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Reservation from "./Components/Reservation/Reservation";

function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </>
  );
}

export default App;
