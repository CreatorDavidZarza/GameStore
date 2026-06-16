const panelCheckout = document.getElementById("panelCheckout");

function abrirCheckout() {

    let total = 0;
    carrito.forEach(producto => { total += producto.precio; });

    document.getElementById("checkoutTotal").textContent =
        `$${total.toLocaleString('es-AR')}`;

    panelCheckout.style.display = "flex";
}

document.getElementById("btnCerrarCheckout").addEventListener("click", () => {
    panelCheckout.style.display = "none";
});

document.getElementById("btnConfirmarCompra").addEventListener("click", () => {

    const nombre = document.getElementById("nombreCliente").value;
    const email  = document.getElementById("emailCliente").value;
    const metodo = document.getElementById("metodoPago").value;

    if (nombre.trim() === "" || email.trim() === "" || metodo === "") {
        alert("Complete todos los campos");
        return;
    }

    carrito.forEach(item => {
        const producto = productos.find(p => p.idProducto === item.idProducto);
        if (producto) {
            producto.cantidadLicencias--;
        }
    });

    guardarProductos();
    mostrarProductos();

    alert("Compra realizada con éxito");

    carrito.length = 0;
    guardarCarrito();
    actualizarContador();
    mostrarCarrito();

    panelCheckout.style.display = "none";
});
