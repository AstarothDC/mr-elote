/**
 * @file Navbar.jsx
 * @description Barra de navegación principal de Mr. Elote.
 *              Muestra el logo, nombre de la marca y el menú de navegación.
 * @author Dilan Alexander Cabas
 * @version 1.0.0
 */

import React, { useState } from "react";
import "./Navbar.css";

/**
 * Componente Navbar
 * Renderiza la barra superior de navegación con logo y enlaces.
 * @returns {JSX.Element}
 */
const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto
  const [menuAbierto, setMenuAbierto] = useState(false);

  /**
   * Alterna la visibilidad del menú en pantallas pequeñas
   */
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="navbar">
      {/* Logo y nombre de la marca */}
      <div className="navbar-marca">
        <span className="navbar-emoji">🌽</span>
        <span className="navbar-titulo">Mr. Elote</span>
      </div>

      {/* Botón hamburguesa para móvil */}
      <button
        className="navbar-hamburguesa"
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Menú de navegación */}
      <ul className={`navbar-menu ${menuAbierto ? "abierto" : ""}`}>
        <li><a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
        <li><a href="#catalogo" onClick={() => setMenuAbierto(false)}>Catálogo</a></li>
        <li><a href="#nosotros" onClick={() => setMenuAbierto(false)}>Nosotros</a></li>
        <li><a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
