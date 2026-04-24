/**
 * @file TarjetaProducto.jsx
 * @description Tarjeta individual que muestra la información de un producto
 *              del catálogo de Mr. Elote: nombre, descripción, precio,
 *              disponibilidad y etiqueta destacada.
 * @author Dilan Alexander Cabas
 * @version 1.0.0
 */

import React from "react";
import "./TarjetaProducto.css";

/**
 * Componente TarjetaProducto
 * @param {Object}  props
 * @param {Object}  props.producto  - Objeto con los datos del producto
 * @returns {JSX.Element}
 */
const TarjetaProducto = ({ producto }) => {
  const { nombre, descripcion, precio, emoji, disponible, etiqueta } = producto;

  /**
   * Formatea un número como precio en pesos colombianos
   * @param {number} valor - Precio numérico
   * @returns {string} Precio formateado, ej: "$4.500"
   */
  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0
    }).format(valor);
  };

  return (
    <article className={`tarjeta ${!disponible ? "tarjeta--agotada" : ""}`}>

      {/* Etiqueta destacada (Popular, Nuevo, Combo, etc.) */}
      {etiqueta && (
        <span className={`tarjeta-etiqueta tarjeta-etiqueta--${etiqueta.toLowerCase()}`}>
          {etiqueta}
        </span>
      )}

      {/* Emoji principal del producto */}
      <div className="tarjeta-emoji" aria-hidden="true">
        {emoji}
      </div>

      {/* Información del producto */}
      <div className="tarjeta-info">
        <h3 className="tarjeta-nombre">{nombre}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
      </div>

      {/* Pie de la tarjeta: precio y disponibilidad */}
      <div className="tarjeta-pie">
        <span className="tarjeta-precio">{formatearPrecio(precio)}</span>

        {/* Botón de acción: agregar o mostrar agotado */}
        <button
          className={`tarjeta-boton ${!disponible ? "tarjeta-boton--agotado" : ""}`}
          disabled={!disponible}
          aria-label={disponible ? `Agregar ${nombre} al pedido` : `${nombre} no disponible`}
        >
          {disponible ? "Agregar 🛒" : "Agotado"}
        </button>
      </div>
    </article>
  );
};

export default TarjetaProducto;
