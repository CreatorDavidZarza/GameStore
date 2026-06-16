# 🎮 GameStore
![GameStore Preview](assets/img/preview.png)

## 🌐 Demo
URL A LA PAGINA : 
https://creatordavidzarza.github.io/GameStore/

<h2>Video chat con la IA</h2>
<p> Click en el enlace</p>
https://youtu.be/62cLMlm-DK8   

<h2>🎥 Video explicativo del registro pricipal y la clave o ID</h2>

<p>CLICK EN LA IMAGEN</p>

<a href="https://youtu.be/9_Av3vR9OpU">
    <img src="assets/img/Miniaturavideo.jpg" width="700">
</a>

<h2>🎥 Video del funcionamiento de la página</h2>

<p>CLICK EN LA IMAGEN</p>

<a href="https://youtu.be/3HPN8KApBOg">
    <img src="assets/img/miniaturiavideo2.jpg" width="700">
</a>

    
---

## 📖 Descripción

**GameStore es un e-commerce de venta de videojuegos digitales**

La plataforma permite visualizar un catálogo de videojuegos, administrar productos, gestionar un carrito de compras y realizar un proceso de checkout simulado, manteniendo la información almacenada mediante LocalStorage.

LocalStorage es una característica de los navegadores web que permite guardar datos de forma persistente en el dispositivo del usuario, los datos se conservan incluso si la página se recarga o el navegador se cierra y vuelve a abrirse.

---


## &#x20;Registro Principal

**El registro principal de la aplicación se define como Producto, utilizado para representar cada videojuego dentro del catálogo. Cada registro almacena la información necesaria para su visualización, control de stock y proceso de compra.

En la implementación, cada vez que el administrador carga un videojuego, se crea un nuevo registro,

Ejemplo de la estructura utilizada en el código:

```javascript
const nuevoProducto = {
    idProducto: nuevoId,
    nombreProducto: nombre,
    categoria: categoria,
    plataforma: plataforma,
    precio: precio,
    cantidadLicencias: licencias,
    imagen: imagen
};
```
Este objeto constituye la implementación del registro Producto dentro de la aplicación.

```javascript
Ejemplo de un registro cargado
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
En la aplicación no se utilizan múltiples variables independientes como producto1, producto2, producto3, etc., ya que esta práctica dificultaría la administración de los datos a medida que aumenta la cantidad de videojuegos. Esto se debe a que cada nuevo producto requeriría crear una variable adicional y modificar manualmente el código para acceder, buscar o actualizar la información. Además, operaciones comunes como listar todos los videojuegos, realizar búsquedas, controlar el stock o eliminar productos serían mucho más complejas. Entonces se trabaja sobre el REGISTRO PRINCIPAL


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
Su utilización permite distinguir cada videojuego, incluso cuando existen videojuegos con nombres similares o disponibles en diferentes plataformas. Además, facilita la gestión de los registros, para poder eliminar, cambiarlos, etc.

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
