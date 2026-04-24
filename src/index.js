/**
 * @file index.js
 * @description Punto de entrada de la aplicación React Mr. Elote.
 *              Monta el componente App en el elemento #root del HTML.
 * @author Dilan Alexander Cabas
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Monta la aplicación en el elemento raíz del DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
