/**
 * @file Catalogo.jsx
 * @description Módulo principal del catálogo de productos de Mr. Elote.
 *              Permite filtrar los productos por categoría y realizar
 *              búsquedas por nombre o descripción en tiempo real.
 * @author Dilan Alexander Cabas
 * @version 1.0.0
 */

import React, { useState, useMemo } from "react";
import TarjetaProducto from "./TarjetaProducto";
import productos, { categorias } from "../data/productos";
import "./Catalogo.css";

/**
 * Componente Catalogo
 * Renderiza la sección completa del catálogo con filtros y búsqueda.
 * @returns {JSX.Element}
 */
const Catalogo = () => {
  // Estado de la categoría seleccionada para filtrar
  const [categoriaActiva, setCategoriaActiva] = useState("todos");

  // Estado del texto de búsqueda
  const [busqueda, setBusqueda] = useState("");

  /**
   * Lista de productos filtrados según categoría y búsqueda.
   * Se recalcula solo cuando cambian los filtros (useMemo para optimización).
   */
  const productosFiltrados = useMemo(() => {
    return productos.filter((producto) => {
      // Filtro por categoría
      const coincideCategoria =
        categoriaActiva === "todos" || producto.categoria === categoriaActiva;

      // Filtro por búsqueda (nombre o descripción, sin importar mayúsculas)
      const textoBusqueda = busqueda.toLowerCase().trim();
      const coincideBusqueda =
        textoBusqueda === "" ||
        producto.nombre.toLowerCase().includes(textoBusqueda) ||
        producto.descripcion.toLowerCase().includes(textoBusqueda);

      return coincideCategoria && coincideBusqueda;
    });
  }, [categoriaActiva, busqueda]);

  /**
   * Maneja el cambio en el campo de búsqueda
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <section className="catalogo" id="catalogo">

      {/* Encabezado de la sección */}
      <div className="catalogo-encabezado">
        <h2 className="catalogo-titulo">Nuestro Menú 🌽</h2>
        <p className="catalogo-subtitulo">
          Elige tu elote favorito — todos preparados al momento con ingredientes frescos
        </p>
      </div>

      {/* Barra de búsqueda */}
      <div className="catalogo-busqueda-contenedor">
        <input
          type="search"
          className="catalogo-busqueda"
          placeholder="🔍  Buscar producto..."
          value={busqueda}
          onChange={manejarBusqueda}
          aria-label="Buscar productos en el catálogo"
        />
      </div>

      {/* Botones de filtro por categoría */}
      <div className="catalogo-filtros" role="group" aria-label="Filtrar por categoría">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            className={`filtro-boton ${categoriaActiva === cat.id ? "filtro-boton--activo" : ""}`}
            onClick={() => setCategoriaActiva(cat.id)}
            aria-pressed={categoriaActiva === cat.id}
          >
            {cat.nombre}
          </button>
        ))}
      </div>

      {/* Contador de resultados */}
      <p className="catalogo-contador">
        {productosFiltrados.length === 0
          ? "No se encontraron productos"
          : `${productosFiltrados.length} producto${productosFiltrados.length !== 1 ? "s" : ""} encontrado${productosFiltrados.length !== 1 ? "s" : ""}`}
      </p>

      {/* Cuadrícula de tarjetas de productos */}
      {productosFiltrados.length > 0 ? (
        <div className="catalogo-grid">
          {productosFiltrados.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        /* Mensaje cuando no hay resultados */
        <div className="catalogo-vacio">
          <span>😕</span>
          <p>No encontramos lo que buscas. Intenta con otro término.</p>
          <button
            className="filtro-boton filtro-boton--activo"
            onClick={() => { setCategoriaActiva("todos"); setBusqueda(""); }}
          >
            Ver todos los productos
          </button>
        </div>
      )}
    </section>
  );
};

export default Catalogo;
