const carrito = [];

function agregarAlCarrito(idProducto) {

    const producto = productos.find(p => p.idProducto === idProducto);

    const cantidadEnCarrito = carrito.filter(
        item => item.idProducto === idProducto
    ).length;

    if (cantidadEnCarrito >= producto.cantidadLicencias) {
        alert("No hay más licencias disponibles para agregar");
        return;
    }

    carrito.push(producto);
    guardarCarrito();
    actualizarContador();
}

function actualizarContador() {
    document.getElementById("contadorCarrito").textContent = carrito.length;
}

function mostrarCarrito() {

    const lista    = document.getElementById("listaCarrito");
    const totalEl  = document.getElementById("totalCarrito");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, indice) => {

        total += producto.precio;

        lista.innerHTML += `
        <div>
            <span>${producto.nombreProducto} — $${producto.precio.toLocaleString('es-AR')}</span>
            <button onclick="eliminarDelCarrito(${indice})">✕</button>
        </div>`;
    });

    totalEl.textContent = `$${total.toLocaleString('es-AR')}`;
}

const panelCarrito = document.getElementById("panelCarrito");

document.getElementById("btnCarrito").addEventListener("click", () => {
    mostrarCarrito();
    panelCarrito.classList.add("carrito-abierto");
});

document.getElementById("btnCerrarCarrito").addEventListener("click", () => {
    panelCarrito.classList.remove("carrito-abierto");
});

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    guardarCarrito();
    actualizarContador();
    mostrarCarrito();
}

document.getElementById("btnVaciarCarrito").addEventListener("click", () => {
    carrito.length = 0;
    guardarCarrito();
    actualizarContador();
    mostrarCarrito();
});

document.getElementById("btnFinalizarCompra").addEventListener("click", () => {

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    abrirCheckout();
    panelCarrito.classList.remove("carrito-abierto");
    document.getElementById("carritoOverlay").classList.remove("overlay-visible");
});
