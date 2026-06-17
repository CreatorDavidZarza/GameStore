# 🎮 GameStore
![GameStore Preview](assets/img/preview.png)

## 🌐 Demo
URL A LA PAGINA : 
https://creatordavidzarza.github.io/GameStore/

<h2>Video chat con la IA</h2>
<p> Click en el enlace</p>
https://youtu.be/62cLMlm-DK8   
<h2>Video chat con la IA (Claude)</h2>
https://www.youtube.com/watch?v=BqOExknZ9o4&feature=youtu.be
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

En la implementación, cada vez que el administrador carga un videojuego, se crea un nuevo registro de tipo Producto.

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
Por lo tanto, el registro Producto constituye la estructura central de la aplicación, ya que toda la información se organiza y administra a partir de este registro.

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
el control de dato no se declara explícitamente dentro del objeto nuevoProducto. El control del tipo de dato se realiza mediante los formularios HTML y las validaciones implementadas en JavaScript.
Ejemplo:
```html
**<input type= "text" id="categoria">**
```
luego para obtener la información en el lenguaje javascript en este caso:
```javascript
**const nombre = document.getElementById("nombreProducto").value;**
```
para los datos que tienen valor numérico hace una conversión explicita para asegurarse de que ese valor sea numérico.

En la aplicación no se utilizan múltiples variables independientes como producto1, producto2, producto3,etc., ya que esta práctica dificultaría la administración de los datos a medida que aumenta la cantidad de  videojuegos. Por ello utilizamos el registro principal (Producto), para representar cada videojuego.

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
---
### 🔑 Clave Principal

La clave principal del registro es **idProducto**.

Se seleccionó idProducto como clave principal porque permite identificar de manera única cada videojuego dentro del sistema. A diferencia de otros campos como nombreProducto, categoria o plataforma, el identificador no se repite entre registros, evitando ambigüedades y conflictos al administrar la información.
Esta decisión permite que la aplicación pueda localizar, modificar, eliminar y gestionar correctamente cada videojuego, incluso cuando existen productos con el mismo nombre o disponibles en distintas plataformas. Además, la clave idProducto es utilizada por módulos como el catálogo, el panel administrador, el carrito de compras y el control de stock, garantizando la integridad y organización de los datos almacenados.

Ejemplo de una funcionalidad del idProducto:

```javascript
    function agregarAlCarrito(idProducto) {
const producto = productos.find(
p => p.idProducto === idProducto
);
carrito.push(producto);
}
```
Cuando se hace click en el botón **“agregar al carrito”**
```html
<button onclick="agregarAlCarrito(2)">
    Agregar al carrito
</button>
```

Se ejecuta a su vez, la función mencionada anteriormente agregarAlCarrito(2);
Entonces javascript busca en donde se almacenan todos los registros productos, el **idProducto** que, **sea igual al que se agregó al carrito.**
```javascript
    const producto = productos.find(
        p => p.idProducto === 2 ejemplo si el producto agregado tiene idProducto = 2
    );
```
Si no existiera idProducto tendríamos algo similar a:
**agregarAlCarrito("GTA V");**
Pero como sabemos de qué plataforma es, o cuantas licencias tenemos de GTA V en tal plataforma. Entonces no sabrías que producto tendría que ir en agregarAlCarrito.

---
### Reflexión sobre el uso de Inteligencia Artificial
Al utilizar la IA para realizar este trabajo, me sorprendió hasta dónde se puede llegar al plasmar ideas en un prompt bien elaborado. Básicamente, es posible iterar los prompts tantas veces como sea necesario hasta alcanzar el resultado
esperado. El avance que tiene esta tecnología puede convertirse en una gran herramienta si se utiliza como apoyo y no como una dependencia. Considero que su mayor valor está en ayudar a desarrollar y organizar ideas propias, ya sea mediante texto, imágenes o propuestas de solución. Sin embargo, también es importante aportar contexto y criterio personal, ya que la IA puede generar respuestas incorrectas o poco coherentes si no recibe instrucciones claras. Por esta razón, creo que la combinación entre creatividad humana e inteligencia artificial permite obtener mejores resultados que cualquiera de las dos por separado.
###
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
