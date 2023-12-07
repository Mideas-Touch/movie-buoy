import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Home from "./Pages/Home"
import Movies from "./Components/Movies";
import HomeDesktop from "./Pages/HomeDesktop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeDesktop />} /> 
        <Route exact path="/movies" element={<Movies />}  /> 
      </Routes>
    </>
    
  );
}

export default App;
