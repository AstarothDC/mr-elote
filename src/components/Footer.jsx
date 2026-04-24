/**
 * @file Footer.jsx
 * @description Pie de página de Mr. Elote con información de contacto
 *              y redes sociales.
 * @author Dilan Alexander Cabas
 * @version 1.0.0
 */

import React from "react";
import "./Footer.css";

/**
 * Componente Footer
 * @returns {JSX.Element}
 */
const Footer = () => {
  // Año actual para el copyright
  const anio = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <div className="footer-contenido">

        {/* Marca */}
        <div className="footer-marca">
          <span className="footer-emoji">🌽</span>
          <h3>Mr. Elote</h3>
          <p>Los mejores elotes y mazorcas, frescos cada día.</p>
        </div>

        {/* Sección Nosotros */}
        <div className="footer-seccion" id="nosotros">
          <h4>Nosotros</h4>
          <p>
            Somos una empresa familiar apasionada por llevar el sabor
            auténtico del elote fresco a cada rincón. Usamos solo los
            mejores ingredientes y recetas tradicionales.
          </p>
        </div>

        {/* Contacto */}
        <div className="footer-seccion">
          <h4>Contáctanos</h4>
          <p>📍 Santa Marta, Colombia</p>
          <p>📞 +57 300 000 0000</p>
          <p>📧 hola@mrelote.com</p>
        </div>
      </div>

      {/* Línea de copyright */}
      <div className="footer-copy">
        <p>© {anio} Mr. Elote — Todos los derechos reservados.</p>
        <p className="footer-dev">Desarrollado por Dilan Alexander Cabas · SENA ADSO</p>
      </div>
    </footer>
  );
};

export default Footer;
