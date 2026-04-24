/**
 * @file Hero.jsx
 * @description Sección principal de bienvenida (banner) de Mr. Elote.
 *              Muestra el eslogan y un botón de llamada a la acción.
 * @author Dilan Alexander Cabas
 * @version 1.0.0
 */

import React from "react";
import "./Hero.css";

/**
 * Componente Hero
 * Banner principal con imagen de fondo, eslogan y CTA.
 * @returns {JSX.Element}
 */
const Hero = () => {
  /**
   * Desplaza la vista hacia la sección del catálogo
   */
  const irAlCatalogo = () => {
    const seccion = document.getElementById("catalogo");
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="inicio">
      {/* Capa de contenido sobre el fondo */}
      <div className="hero-contenido">
        <p className="hero-subtitulo">¡Frescos y deliciosos!</p>
        <h1 className="hero-titulo">
          Los mejores <span>elotes</span> <br /> de la ciudad 🌽
        </h1>
        <p className="hero-descripcion">
          Preparados al momento con los ingredientes más frescos. <br />
          Clásicos, especiales o picantes — ¡hay para todos!
        </p>

        {/* Botón de llamada a la acción */}
        <button className="hero-boton" onClick={irAlCatalogo}>
          Ver Catálogo
        </button>
      </div>
    </section>
  );
};

export default Hero;
