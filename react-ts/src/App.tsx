// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";  // Importa la nuova pagina
import NavBar from "./components/NavBar/NavBar";  // Importa il componente NavBar

const App = () => {
    return (
        <Router>
            <NavBar />  {/* Aggiungi la NavBar */}
            <Routes>
                <Route path="/" element={<Home />} />      {/* Rotta per la Home */}
                <Route path="/about" element={<About />} /> {/* Rotta per la pagina Chi Siamo */}
            </Routes>
        </Router>
    );
};

export default App;
