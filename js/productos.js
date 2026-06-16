const productos = [];
let modoEliminar = false;

if (localStorage.getItem("productos") === null) {

    productos.push(
        {
            idProducto: 1,
            nombreProducto: "GTA V",
            categoria: "Accion",
            plataforma: "Steam",
            precio: 59999,
            cantidadLicencias: 3,
            imagen: "assets/img/GTA V.webp"
        },
        {
            idProducto: 2,
            nombreProducto: "Call Of Duty 6",
            categoria: "Accion",
            plataforma: "PlayStation 5",
            precio: 89999,
            cantidadLicencias: 15,
            imagen: "assets/img/COD6.webp"
        },
        {
            idProducto: 3,
            nombreProducto: "Mortal Kombat 1",
            categoria: "Accion",
            plataforma: "Steam",
            precio: 49999,
            cantidadLicencias: 5,
            imagen: "assets/img/Mortal Kombat 1.webp"
        },

    
    );

    guardarProductos();
}

function mostrarProductos() {

    const contenedor = document.getElementById("contenedorProductos");
    contenedor.innerHTML = "";

    productos.forEach(producto => {

        const sinStock = producto.cantidadLicencias <= 0;

        contenedor.innerHTML += `
        <div class="card">

            ${modoEliminar ? `
            <button
                class="btnEliminar"
                onclick="eliminarProducto(${producto.idProducto})"
                title="Eliminar ${producto.nombreProducto}">
                ✕
            </button>` : ""}

            <div class="card-img-wrap">
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombreProducto}"
                    loading="lazy">
            </div>

            <div class="card-body">

                <h3>${producto.nombreProducto}</h3>

                <div class="card-meta">
                    <span class="tag tag--cat">${producto.categoria}</span>
                    <span class="tag tag--plat">${producto.plataforma}</span>
                </div>

                <p class="card-stock ${sinStock ? 'sin-stock' : ''}">
                    ${sinStock
                        ? 'Sin stock disponible'
                        : `Stock: ${producto.cantidadLicencias} licencia${producto.cantidadLicencias !== 1 ? 's' : ''}`}
                </p>

                <p class="precio">$${producto.precio.toLocaleString('es-AR')}</p>

                ${!sinStock
                    ? `<button onclick="agregarAlCarrito(${producto.idProducto})">
                           <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                           Agregar al carrito
                       </button>`
                    : `<button disabled>Sin Stock</button>`}

            </div>
        </div>`;
    });
}

function crearProducto(
    nombreProducto,
    categoria,
    plataforma,
    precio,
    cantidadLicencias
) {
    const nuevoProducto = {
        idProducto: productos.length + 1,
        nombreProducto,
        categoria,
        plataforma,
        precio,
        cantidadLicencias
    };

    productos.push(nuevoProducto);
    guardarProductos();
    mostrarProductos();
}

function eliminarProducto(idProducto) {

    const confirmar = confirm("¿Eliminar este producto?");
    if (!confirmar) return;

    const indice = productos.findIndex(p => p.idProducto === idProducto);

    if (indice !== -1) {
        productos.splice(indice, 1);
        guardarProductos();
        mostrarProductos();
    }
}
