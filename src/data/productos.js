/**
 * @file productos.js
 * @description Datos del catálogo de productos de Mr. Elote.
 *              Cada producto representa una variedad o presentación
 *              de elote/mazorca disponible en el menú.
 * @author Dilan Alexander Cabas
 * @version 1.0.0
 */

/**
 * Lista de productos disponibles en el catálogo.
 * @typedef {Object} Producto
 * @property {number}  id          - Identificador único del producto
 * @property {string}  nombre      - Nombre del producto
 * @property {string}  descripcion - Descripción breve del producto
 * @property {number}  precio      - Precio en pesos colombianos
 * @property {string}  categoria   - Categoría del producto
 * @property {string}  emoji       - Emoji representativo
 * @property {boolean} disponible  - Si el producto está disponible
 * @property {string}  etiqueta    - Etiqueta destacada (Nuevo, Popular, etc.)
 */
const productos = [
  {
    id: 1,
    nombre: "Elote Clásico",
    descripcion: "Mazorca tierna asada a la parrilla con mantequilla, sal y limón. El favorito de siempre.",
    precio: 4500,
    categoria: "clasicos",
    emoji: "🌽",
    disponible: true,
    etiqueta: "Popular"
  },
  {
    id: 2,
    nombre: "Elote con Queso",
    descripcion: "Mazorca asada bañada en queso rallado y crema. Una combinación irresistible.",
    precio: 5500,
    categoria: "clasicos",
    emoji: "🧀",
    disponible: true,
    etiqueta: "Popular"
  },
  {
    id: 3,
    nombre: "Elote Picante",
    descripcion: "Para los amantes del picante: mazorca con salsa picante, limón y chamoy.",
    precio: 5000,
    categoria: "especiales",
    emoji: "🌶️",
    disponible: true,
    etiqueta: "Nuevo"
  },
  {
    id: 4,
    nombre: "Esquites",
    descripcion: "Granos de elote tierno en vaso, con crema, queso, limón y chile al gusto.",
    precio: 4000,
    categoria: "clasicos",
    emoji: "🥤",
    disponible: true,
    etiqueta: ""
  },
  {
    id: 5,
    nombre: "Elote Mexicano",
    descripcion: "Mazorca con mayonesa, queso cotija, chile en polvo y limón. Receta 100% mexicana.",
    precio: 6000,
    categoria: "especiales",
    emoji: "🇲🇽",
    disponible: true,
    etiqueta: "Especial"
  },
  {
    id: 6,
    nombre: "Elote Dulce",
    descripcion: "Mazorca cocida al vapor, tierna y dulce, ideal para niños.",
    precio: 4000,
    categoria: "dulces",
    emoji: "🍬",
    disponible: true,
    etiqueta: ""
  },
  {
    id: 7,
    nombre: "Combo Mr. Elote",
    descripcion: "2 elotes a elección + 2 esquites + 2 bebidas. El combo perfecto para compartir.",
    precio: 18000,
    categoria: "combos",
    emoji: "🎉",
    disponible: true,
    etiqueta: "Combo"
  },
  {
    id: 8,
    nombre: "Elote Tropical",
    descripcion: "Mazorca con mango, chamoy, tajín y jugo de naranja. Una explosión tropical.",
    precio: 6500,
    categoria: "especiales",
    emoji: "🥭",
    disponible: false,
    etiqueta: "Agotado"
  }
];

/**
 * Lista de categorías disponibles para filtrar el catálogo.
 * @type {Array<{id: string, nombre: string}>}
 */
export const categorias = [
  { id: "todos",     nombre: "Todos" },
  { id: "clasicos",  nombre: "Clásicos" },
  { id: "especiales",nombre: "Especiales" },
  { id: "dulces",    nombre: "Dulces" },
  { id: "combos",    nombre: "Combos" }
];

export default productos;
