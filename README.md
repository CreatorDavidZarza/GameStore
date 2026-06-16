# 🎮 GameStore
![GameStore Preview](assets/img/preview.png)

## 🌐 Demo

GitHub Pages:


---
## 📖 Descripción

**GameStore es un e-commerce de venta de videojuegos digitales**

La plataforma permite visualizar un catálogo de videojuegos, administrar productos, gestionar un carrito de compras y realizar un proceso de checkout simulado, manteniendo la información almacenada mediante LocalStorage.

LocalStorage es una característica de los navegadores web que permite guardar datos de forma persistente en el dispositivo del usuario, los datos se conservan incluso si la página se recarga o el navegador se cierra y vuelve a abrirse.

---

## 🚀 Funcionalidades

* 🎮 Catálogo dinámico de videojuegos.
* ➕ Alta de productos desde panel administrador.
* ❌ Eliminación de productos.
* 🛒 Carrito de compras funcional.
* 💳 Checkout con simulación de pago.
* 📦 Control de stock mediante licencias disponibles.
* 💾 Persistencia de datos con LocalStorage.
* 🔑 Generación automática de ID para productos.

---

## &#x20;Registro Principal

**El registro principal de la aplicación se define como `Producto`, utilizado para representar cada videojuego dentro del catálogo.** Cada producto almacena la información necesaria para su visualización, gestión de stock y proceso de compra.

Ejemplo de la estructura utilizada en el código:

```javascript
const producto = {
    idProducto: 1,
    nombreProducto: "EA SPORTS FC 25",
    categoria: "Deportes",
    plataforma: "PC",
    precio: 59.99,
    cantidadLicencias: 50,
    imagen: "img/fc25.jpg"
};
```

### Campos del registro

| Campo             | Tipo         |
| ----------------- | ------------ |
| idProducto        | Entero       |
| nombreProducto    | Alfanumérico |
| categoria         | Alfanumérico |
| plataforma        | Alfanumérico |
| precio            | Real         |
| cantidadLicencias | Entero       |
| imagen            | Alfanumérico |

### 🔑 Clave Principal

La clave principal del registro es `idProducto`.

```javascript
idProducto: 1
```

**Este campo identifica de forma única a cada videojuego dentro del sistema.**
Su utilización permite realizar operaciones de búsqueda, modificación y eliminación de productos sin generar conflictos, 
incluso cuando existen videojuegos con nombres similares o disponibles en diferentes plataformas. Además, facilita la gestión de los datos almacenados en los arreglos y en LocalStorage.

---

## 🏗 Estructura de Datos

```text
Producto
        ↓
Arreglo productos[] (se utiliza un arreglo para almacenar múltiples registros dentro de una misma estructura.
Cada producto se guarda como un elemento del arreglo, lo que permite agregar, buscar, modificar o eliminar productos de forma dinámica.
No se crean variables individuales como producto1, producto2, producto3, etc., porque esa solución sería poco práctica y difícil de mantener cuando la cantidad de productos aumenta.
El arreglo permite gestionar cualquier cantidad de productos utilizando una única estructura organizada.)
        ↓
Catálogo
        ↓
Carrito
        ↓
Checkout
        ↓
LocalStorage
```

---

## 🛠 Tecnologías Utilizadas
<table align="center">
  <tr>
    <td align="center">
        <b>HTML5</b><br><br>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="70">
    </td>
    <td align="center">
        <b>CSS</b><br><br>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="70">
    </td>
    <td align="center">
        <b>JavaScript</b><br><br>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="70">
    </td>
  </tr>
  </table>
  
## 👨‍💻 Autor

**David Zarza**

Actividad Formativa 
**Diseñando un e-Commerce con Inteligencia Artificial**
