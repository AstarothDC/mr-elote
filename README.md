# 🌽 Mr. Elote — Catálogo Web

**Evidencia:** GA7-220501096-AA3-EV01  
**Aprendiz:** Dilan Alexander Cabas  
**Programa:** Análisis y Desarrollo de Software — SENA  
**Tecnología:** React 18 + JavaScript  

---

## ¿Qué es este proyecto?

Aplicación web del catálogo de productos de **Mr. Elote**, una tienda de venta de elotes y mazorcas. El módulo desarrollado permite a los clientes explorar el menú, filtrar por categorías y buscar productos en tiempo real.

---

## Módulos desarrollados

| Componente        | Descripción                                              |
|-------------------|----------------------------------------------------------|
| `Navbar`          | Barra de navegación fija con menú responsivo             |
| `Hero`            | Banner de bienvenida con botón de llamada a la acción    |
| `Catalogo`        | Módulo principal: filtros, búsqueda y listado de productos |
| `TarjetaProducto` | Tarjeta individual con nombre, precio y disponibilidad   |
| `Footer`          | Pie de página con contacto e información de la empresa   |

---

## Cómo ejecutar el proyecto

### Requisitos previos
- Node.js v16 o superior
- npm v8 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/AstarothDC/mr-elote

# 2. Entrar a la carpeta
cd mr-elote

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm start
```

La app abrirá automáticamente en `http://localhost:3000`

---

## Estructura del proyecto

```
mr-elote/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Catalogo.jsx / Catalogo.css
│   │   ├── TarjetaProducto.jsx / TarjetaProducto.css
│   │   └── Footer.jsx / Footer.css
│   ├── data/
│   │   └── productos.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## Paleta de colores

| Color     | Hex       | Uso                          |
|-----------|-----------|------------------------------|
| Rojo      | `#c0392b` | Navbar, precios, acento      |
| Amarillo  | `#f9e04b` | Logo, destacados, CTA        |
| Verde     | `#2d7a27` | Botones "Agregar"            |
| Marrón    | `#7d2b00` | Títulos y texto principal    |

---

## Enlace al repositorio

> 📌 **https://github.com/AstarothDC/mr-elote**  
> *(Reemplaza TU_USUARIO con tu nombre de usuario de GitHub)*

---

## Estándares aplicados

- Componentes funcionales con React Hooks (`useState`, `useMemo`)
- Todos los archivos tienen comentarios JSDoc
- Nombres de variables y funciones en español descriptivo
- CSS modular por componente
- Diseño responsivo (mobile-first)
- Accesibilidad básica: `aria-label`, `aria-pressed`, `role`
