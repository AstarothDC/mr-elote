/**
 * @file App.jsx
 * @description Componente raíz de la aplicación Mr. Elote.
 *              Ensambla todos los módulos: Navbar, Hero, Catalogo y Footer.
 * @author Dilan Alexander Cabas
 * @version 1.0.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalogo from "./components/Catalogo";
import Footer from "./components/Footer";
import "./App.css";

/**
 * Componente principal de la aplicación.
 * Organiza la estructura de páginas en orden vertical.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="app">
      {/* Barra de navegación fija en la parte superior */}
      <Navbar />

      {/* Banner principal de bienvenida */}
      <Hero />

      {/* Módulo del catálogo de productos (evidencia principal) */}
      <main>
        <Catalogo />
      </main>

      {/* Pie de página con contacto e información */}
      <Footer />
    </div>
  );
}

export default App;
